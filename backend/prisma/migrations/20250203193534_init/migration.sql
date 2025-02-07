-- CreateTable
CREATE TABLE "bookings" (
    "booking_id" SERIAL NOT NULL,
    "user_id" INTEGER,
    "property_id" INTEGER,
    "check_in_date" DATE NOT NULL,
    "check_out_date" DATE NOT NULL,
    "is_approved" BOOLEAN DEFAULT false,

    CONSTRAINT "bookings_pkey" PRIMARY KEY ("booking_id")
);

-- CreateTable
CREATE TABLE "categories" (
    "category_id" SERIAL NOT NULL,
    "category_name" VARCHAR(100) NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("category_id")
);

-- CreateTable
CREATE TABLE "cities" (
    "city_id" SERIAL NOT NULL,
    "city_name" VARCHAR(100) NOT NULL,

    CONSTRAINT "cities_pkey" PRIMARY KEY ("city_id")
);

-- CreateTable
CREATE TABLE "districts" (
    "district_id" SERIAL NOT NULL,
    "district_name" VARCHAR(100) NOT NULL,
    "city_id" INTEGER,

    CONSTRAINT "districts_pkey" PRIMARY KEY ("district_id")
);

-- CreateTable
CREATE TABLE "favorites" (
    "favorite_id" SERIAL NOT NULL,
    "user_id" INTEGER,
    "property_id" INTEGER,

    CONSTRAINT "favorites_pkey" PRIMARY KEY ("favorite_id")
);

-- CreateTable
CREATE TABLE "payments" (
    "payment_id" SERIAL NOT NULL,
    "user_id" INTEGER,
    "property_id" INTEGER,
    "amount" DECIMAL(10,2) NOT NULL,
    "payment_date" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "payments_pkey" PRIMARY KEY ("payment_id")
);

-- CreateTable
CREATE TABLE "properties" (
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

    CONSTRAINT "properties_pkey" PRIMARY KEY ("property_id")
);

-- CreateTable
CREATE TABLE "property_photos" (
    "photo_id" SERIAL NOT NULL,
    "property_id" INTEGER,
    "photo" BYTEA NOT NULL,

    CONSTRAINT "property_photos_pkey" PRIMARY KEY ("photo_id")
);

-- CreateTable
CREATE TABLE "property_type" (
    "type_id" SERIAL NOT NULL,
    "type_name" VARCHAR(100) NOT NULL,

    CONSTRAINT "property_type_pkey" PRIMARY KEY ("type_id")
);

-- CreateTable
CREATE TABLE "users" (
    "user_id" SERIAL NOT NULL,
    "first_name" VARCHAR(100) NOT NULL,
    "last_name" VARCHAR(100) NOT NULL,
    "phone_number" VARCHAR(20),
    "email" VARCHAR(255) NOT NULL,
    "birth_date" DATE,
    "password" VARCHAR(255) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("user_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "favorites_user_id_property_id_key" ON "favorites"("user_id", "property_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "bookings" ADD CONSTRAINT "bookings_property_id_fkey" FOREIGN KEY ("property_id") REFERENCES "properties"("property_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "bookings" ADD CONSTRAINT "bookings_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "districts" ADD CONSTRAINT "districts_city_id_fkey" FOREIGN KEY ("city_id") REFERENCES "cities"("city_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "favorites" ADD CONSTRAINT "favorites_property_id_fkey" FOREIGN KEY ("property_id") REFERENCES "properties"("property_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "favorites" ADD CONSTRAINT "favorites_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_property_id_fkey" FOREIGN KEY ("property_id") REFERENCES "properties"("property_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "properties" ADD CONSTRAINT "properties_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("category_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "properties" ADD CONSTRAINT "properties_city_id_fkey" FOREIGN KEY ("city_id") REFERENCES "cities"("city_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "properties" ADD CONSTRAINT "properties_district_id_fkey" FOREIGN KEY ("district_id") REFERENCES "districts"("district_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "properties" ADD CONSTRAINT "properties_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "property_type"("type_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "property_photos" ADD CONSTRAINT "property_photos_property_id_fkey" FOREIGN KEY ("property_id") REFERENCES "properties"("property_id") ON DELETE NO ACTION ON UPDATE NO ACTION;
