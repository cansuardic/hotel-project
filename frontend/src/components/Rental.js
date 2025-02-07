import axios from "axios";
import React, {useEffect, useState} from "react";
import {Modal} from "react-responsive-modal";
import {useLocation} from "react-router-dom";
import {bookingUrl, paymentUrl} from "../urls";
import {StarIcon} from "./StarIcon";
import Comments from "./Comments";

const Rental = ({
  property_id,
  property_name,
  category,
  city,
  district,
  image,
  description,
  room_count,
  bed_count,
  price,
  comments,
}) => {
  const [open, setOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [userData, setUserData] = useState(null);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const onOpenBookingModal = () => setBookingModalOpen(true);
  const onCloseBookingModal = () => setBookingModalOpen(false);

  useEffect(() => {
    const updateUserFromSessionStorage = () => {
      const user = JSON.parse(sessionStorage.getItem("mybnb-user"));
      setUserData(user || null); // If user exists, set data, else null
    };

    updateUserFromSessionStorage();
    window.addEventListener("storage", updateUserFromSessionStorage);

    return () => {
      window.removeEventListener("storage", updateUserFromSessionStorage);
    };
  }, []);

  const handlePaymentAndBooking = () => {
    const userId = JSON.parse(sessionStorage.getItem("mybnb-user")).user_id;

    const paymentPayload = {
      userId: userId,
      amount: price,
    };

    const bookingPayload = {
      userId: userId,
      propertyId: property_id,
      checkInDate: checkInDate,
      checkOutDate: checkOutDate,
    };

    axios
      .post(`${paymentUrl}/property/${property_id}/pay`, paymentPayload)
      .then(() => {
        axios
          .post(`${bookingUrl}/property/${property_id}/book`, bookingPayload)
          .then(() => {
            alert("Booking SUCCESSFUL!");
            onCloseBookingModal();
            onCloseModal();
          })
          .catch((error) => {
            alert("Booking Failed: " + error.message);
          });
      })
      .catch((error) => {
        alert("Payment Failed: " + error.message);
      });
  };

  const handleDateChange = (event, type) => {
    const date = event.target.value;
    const dateTimeString = `${date}T00:00:00`;

    if (type === "checkin") {
      setCheckInDate(new Date(dateTimeString).toISOString());
    } else if (type === "checkout") {
      setCheckOutDate(new Date(dateTimeString).toISOString());
    }
  };

  return (
    <div className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-all duration-300">
      <div onClick={onOpenModal}>
        <div className="relative">
          <img
            src={`${process.env.PUBLIC_URL}/assets/property-images/${property_id}.jpeg`}
            alt={property_name}
            className="object-cover rounded-xl w-full h-[300px] transition-transform duration-500 ease-in-out hover:scale-110"
          />
          <div className="absolute bottom-4 left-4 text-white font-semibold text-lg">
            <h3>{property_name}</h3>
            <div className="flex items-center gap-2">
              <p className="text-sm">
                {city}, {district}
              </p>
              <StarIcon propertyId={property_id} />
            </div>
            <p className="mt-2 text-xl">${price} / night</p>
          </div>
        </div>
      </div>

      <div className="p-5 bg-white rounded-b-xl">
        <p className="text-sm text-gray-600">{description}</p>
        <div className="mt-2 flex justify-between items-center">
          <div className="text-sm">
            <p>
              <strong>Rooms:</strong> {room_count}
            </p>
            <p>
              <strong>Beds:</strong> {bed_count}
            </p>
          </div>
          <div>
            {userData ? (
              <button
                onClick={onOpenBookingModal}
                className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-200">
                Book Now
              </button>
            ) : (
              <button
                disabled
                className="bg-gray-400 text-white py-2 px-4 rounded-full cursor-not-allowed">
                Login to Book
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Modal for Property Details */}
      <Modal open={open} onClose={onCloseModal} center>
        <div className="bg-white rounded-lg shadow-2xl max-w-3xl mx-auto p-8 space-y-6">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            {property_name}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Property Image */}
            <div className="flex justify-center">
              <img
                src={`${process.env.PUBLIC_URL}/assets/property-images/${property_id}.jpeg`}
                alt={property_name}
                className="rounded-lg shadow-lg w-full h-72 object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
              />
            </div>

            {/* Property Details */}
            <div className="space-y-6 text-lg text-gray-800">
              <p>
                <strong className="font-semibold">City:</strong> {city}
              </p>
              <p>
                <strong className="font-semibold">District:</strong> {district}
              </p>
              <p>
                <strong className="font-semibold">Category:</strong> {category}
              </p>
              <p>
                <strong className="font-semibold">Room Count:</strong>{" "}
                {room_count}
              </p>
              <p>
                <strong className="font-semibold">Bed Count:</strong>{" "}
                {bed_count}
              </p>
              <p>
                <strong className="font-semibold">Price:</strong> ${price} per
                night
              </p>
              <p>
                <strong className="font-semibold">Description:</strong>{" "}
                {description}
              </p>

              {/* Comments Section */}
              <Comments
                property_id={property_id}
                property_comments={comments}
              />

              {/* Booking Button */}
              {userData ? (
                <button
                  onClick={onOpenBookingModal}
                  className="w-full py-3 bg-blue-600 text-white rounded-full text-xl hover:bg-blue-700 transition duration-300 ease-in-out">
                  Book Now
                </button>
              ) : (
                <button
                  disabled
                  className="w-full py-3 bg-gray-400 text-white rounded-full text-xl cursor-not-allowed">
                  Login to Book
                </button>
              )}
            </div>
          </div>
        </div>
      </Modal>

      {/* Modal for Booking */}
      <Modal open={bookingModalOpen} onClose={onCloseBookingModal} center>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">{property_name}</h2>
          <div className="space-y-4">
            <p>
              <strong>Price:</strong> ${price} / night
            </p>
            <div>
              <label htmlFor="checkin" className="block text-sm font-semibold">
                Check-in Date:
              </label>
              <input
                value={checkInDate.slice(0, 10)}
                onChange={(event) => handleDateChange(event, "checkin")}
                type="date"
                id="checkin"
                className="w-full p-3 border rounded-lg mt-2"
              />
            </div>
            <div>
              <label htmlFor="checkout" className="block text-sm font-semibold">
                Check-out Date:
              </label>
              <input
                value={checkOutDate.slice(0, 10)}
                onChange={(event) => handleDateChange(event, "checkout")}
                type="date"
                id="checkout"
                className="w-full p-3 border rounded-lg mt-2"
              />
            </div>

            <div className="mt-4">
              <button
                onClick={handlePaymentAndBooking}
                className="w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition duration-200">
                Pay & Book
              </button>
            </div>

            <button
              onClick={onCloseBookingModal}
              className="w-full py-2 border rounded-full text-center mt-2 text-gray-600 hover:bg-gray-100 transition duration-200">
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Rental;
