/*
  Warnings:

  - You are about to drop the `bookings` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `categories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `cities` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `districts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `favorites` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `payments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `properties` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `property_photos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `property_type` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "bookings" DROP CONSTRAINT "bookings_property_id_fkey";

-- DropForeignKey
ALTER TABLE "bookings" DROP CONSTRAINT "bookings_user_id_fkey";

-- DropForeignKey
ALTER TABLE "districts" DROP CONSTRAINT "districts_city_id_fkey";

-- DropForeignKey
ALTER TABLE "favorites" DROP CONSTRAINT "favorites_property_id_fkey";

-- DropForeignKey
ALTER TABLE "favorites" DROP CONSTRAINT "favorites_user_id_fkey";

-- DropForeignKey
ALTER TABLE "payments" DROP CONSTRAINT "payments_property_id_fkey";

-- DropForeignKey
ALTER TABLE "payments" DROP CONSTRAINT "payments_user_id_fkey";

-- DropForeignKey
ALTER TABLE "properties" DROP CONSTRAINT "properties_category_id_fkey";

-- DropForeignKey
ALTER TABLE "properties" DROP CONSTRAINT "properties_city_id_fkey";

-- DropForeignKey
ALTER TABLE "properties" DROP CONSTRAINT "properties_district_id_fkey";

-- DropForeignKey
ALTER TABLE "properties" DROP CONSTRAINT "properties_type_id_fkey";

-- DropForeignKey
ALTER TABLE "property_photos" DROP CONSTRAINT "property_photos_property_id_fkey";

-- DropTable
DROP TABLE "bookings";

-- DropTable
DROP TABLE "categories";

-- DropTable
DROP TABLE "cities";

-- DropTable
DROP TABLE "districts";

-- DropTable
DROP TABLE "favorites";

-- DropTable
DROP TABLE "payments";

-- DropTable
DROP TABLE "properties";

-- DropTable
DROP TABLE "property_photos";

-- DropTable
DROP TABLE "property_type";

-- DropTable
DROP TABLE "users";

-- CreateTable
CREATE TABLE "Booking" (
    "booking_id" SERIAL NOT NULL,
    "user_id" INTEGER,
    "property_id" INTEGER,
    "check_in_date" DATE NOT NULL,
    "check_out_date" DATE NOT NULL,
    "is_approved" BOOLEAN DEFAULT false,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("booking_id")
);

-- CreateTable
CREATE TABLE "Category" (
    "category_id" SERIAL NOT NULL,
    "category_name" VARCHAR(100) NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("category_id")
);

-- CreateTable
CREATE TABLE "City" (
    "city_id" SERIAL NOT NULL,
    "city_name" VARCHAR(100) NOT NULL,

    CONSTRAINT "City_pkey" PRIMARY KEY ("city_id")
);

-- CreateTable
CREATE TABLE "District" (
    "district_id" SERIAL NOT NULL,
    "district_name" VARCHAR(100) NOT NULL,
    "city_id" INTEGER,

    CONSTRAINT "District_pkey" PRIMARY KEY ("district_id")
);

-- CreateTable
CREATE TABLE "Favorite" (
    "favorite_id" SERIAL NOT NULL,
    "user_id" INTEGER,
    "property_id" INTEGER,

    CONSTRAINT "Favorite_pkey" PRIMARY KEY ("favorite_id")
);

-- CreateTable
CREATE TABLE "Payment" (
    "payment_id" SERIAL NOT NULL,
    "user_id" INTEGER,
    "property_id" INTEGER,
    "amount" DECIMAL(10,2) NOT NULL,
    "payment_date" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("payment_id")
);

-- CreateTable
CREATE TABLE "Property" (
    "property_id" SERIAL NOT NULL,
    "property_name" VARCHAR(255) NOT NULL,
    "city_id" INTEGER,
    "district_id" INTEGER,
    "category_id" INTEGER,
    "type_id" INTEGER,
    "room_count" INTEGER,
    "bed_count" INTEGER,
    "price" DECIMAL(10,2),
    "description" TEXT,

    CONSTRAINT "Property_pkey" PRIMARY KEY ("property_id")
);

-- CreateTable
CREATE TABLE "PropertyPhoto" (
    "photo_id" SERIAL NOT NULL,
    "property_id" INTEGER,
    "photo" BYTEA NOT NULL,

    CONSTRAINT "PropertyPhoto_pkey" PRIMARY KEY ("photo_id")
);

-- CreateTable
CREATE TABLE "PropertyComment" (
    "id" SERIAL NOT NULL,
    "property_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "commentText" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PropertyComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PropertyType" (
    "type_id" SERIAL NOT NULL,
    "type_name" VARCHAR(100) NOT NULL,

    CONSTRAINT "PropertyType_pkey" PRIMARY KEY ("type_id")
);

-- CreateTable
CREATE TABLE "User" (
    "user_id" SERIAL NOT NULL,
    "first_name" VARCHAR(100) NOT NULL,
    "last_name" VARCHAR(100) NOT NULL,
    "phone_number" VARCHAR(20),
    "email" VARCHAR(255) NOT NULL,
    "birth_date" DATE,
    "password" VARCHAR(255) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Favorite_user_id_property_id_key" ON "Favorite"("user_id", "property_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_property_id_fkey" FOREIGN KEY ("property_id") REFERENCES "Property"("property_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "District" ADD CONSTRAINT "District_city_id_fkey" FOREIGN KEY ("city_id") REFERENCES "City"("city_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_property_id_fkey" FOREIGN KEY ("property_id") REFERENCES "Property"("property_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_property_id_fkey" FOREIGN KEY ("property_id") REFERENCES "Property"("property_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Property" ADD CONSTRAINT "Property_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("category_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Property" ADD CONSTRAINT "Property_city_id_fkey" FOREIGN KEY ("city_id") REFERENCES "City"("city_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Property" ADD CONSTRAINT "Property_district_id_fkey" FOREIGN KEY ("district_id") REFERENCES "District"("district_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Property" ADD CONSTRAINT "Property_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "PropertyType"("type_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "PropertyPhoto" ADD CONSTRAINT "PropertyPhoto_property_id_fkey" FOREIGN KEY ("property_id") REFERENCES "Property"("property_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "PropertyComment" ADD CONSTRAINT "PropertyComment_property_id_fkey" FOREIGN KEY ("property_id") REFERENCES "Property"("property_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PropertyComment" ADD CONSTRAINT "PropertyComment_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION;
