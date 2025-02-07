import axios from "axios";
import {useState, useEffect} from "react";
import {propertiesUrl} from "../urls";

export default function Comments({property_comments, property_id}) {
  const [comments, setComments] = useState(property_comments);
  const [newComment, setNewComment] = useState("");
  const [rating, setRating] = useState(5);

  useEffect(() => {
    setComments(property_comments);
  }, [property_comments]);

  const addComment = () => {
    if (!newComment.trim()) return;

    const user = JSON.parse(sessionStorage.getItem("mybnb-user"));
    const user_id = user?.user_id;

    const newEntry = {
      user_name: `${user?.first_name} ${user?.last_name}`,
      user_id: user_id,
      comment_text: newComment,
      rating: rating,
    };

    axios
      .post(propertiesUrl + `/${property_id}/comment`, {...newEntry})
      .then((resp) => {
        setComments([newEntry, ...comments]);
        setNewComment("");
        setRating(5);
      })
      .catch((error) => {
        alert(error);
        console.error(error);
      });
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Comments</h2>

      {/* Yorum Ekleme Formu */}
      <div className="mb-4">
        <textarea
          className="w-full p-2 border rounded-md focus:ring focus:ring-blue-200"
          placeholder="Write a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <div className="flex items-center justify-between mt-2">
          <select
            className="p-2 border rounded-md"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}>
            {[5, 4, 3, 2, 1].map((r) => (
              <option key={r} value={r}>
                {r} ⭐
              </option>
            ))}
          </select>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
            onClick={addComment}>
            Submit
          </button>
        </div>
      </div>

      {/* Yorum Listesi */}
      <div className="space-y-4">
        {comments?.map((comment) => (
          <div key={comment.id} className="p-4 border rounded-md shadow-sm">
            <div className="flex justify-between">
              <span className="font-semibold">{comment.user_name}</span>
              <span className="text-yellow-500">{comment.rating} ⭐</span>
            </div>
            <p className="text-gray-700 mt-2">{comment.comment_text}</p>
            <span className="text-gray-400 text-sm">{comment.createdAt}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
