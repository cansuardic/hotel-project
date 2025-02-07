import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      {
        first_name: "John",
        last_name: "Doe",
        phone_number: "123-456-7890",
        email: "john.doe@example.com",
        birth_date: new Date("1990-01-01"),
        password: "12345",
      },
      {
        first_name: "Jane",
        last_name: "Smith",
        phone_number: "123-456-7891",
        email: "jane.smith@example.com",
        birth_date: new Date("1991-02-02"),
        password: "12345",
      },
      {
        first_name: "Alice",
        last_name: "Johnson",
        phone_number: "123-456-7892",
        email: "alice.johnson@example.com",
        birth_date: new Date("1992-03-03"),
        password: "12345",
      },
      {
        first_name: "Bob",
        last_name: "Williams",
        phone_number: "123-456-7893",
        email: "bob.williams@example.com",
        birth_date: new Date("1993-04-04"),
        password: "12345",
      },
      {
        first_name: "Carol",
        last_name: "Brown",
        phone_number: "123-456-7894",
        email: "carol.brown@example.com",
        birth_date: new Date("1994-05-05"),
        password: "12345",
      },
      {
        first_name: "David",
        last_name: "Jones",
        phone_number: "123-456-7895",
        email: "david.jones@example.com",
        birth_date: new Date("1995-06-06"),
        password: "12345",
      },
      {
        first_name: "Eve",
        last_name: "Miller",
        phone_number: "123-456-7896",
        email: "eve.miller@example.com",
        birth_date: new Date("1996-07-07"),
        password: "12345",
      },
      {
        first_name: "Frank",
        last_name: "Davis",
        phone_number: "123-456-7897",
        email: "frank.davis@example.com",
        birth_date: new Date("1997-08-08"),
        password: "12345",
      },
      {
        first_name: "Grace",
        last_name: "Garcia",
        phone_number: "123-456-7898",
        email: "grace.garcia@example.com",
        birth_date: new Date("1998-09-09"),
        password: "12345",
      },
      {
        first_name: "Hank",
        last_name: "Martinez",
        phone_number: "123-456-7899",
        email: "hank.martinez@example.com",
        birth_date: new Date("1999-10-10"),
        password: "12345",
      },
      {
        first_name: "Sarah",
        last_name: "Wilson",
        phone_number: "123-456-7900",
        email: "sarah.wilson@example.com",
        birth_date: new Date("2000-11-11"),
        password: "12345",
      },
      {
        first_name: "Michael",
        last_name: "Brown",
        phone_number: "123-456-7901",
        email: "michael.brown@example.com",
        birth_date: new Date("1989-12-12"),
        password: "12345",
      },
      {
        first_name: "Olivia",
        last_name: "Rodriguez",
        phone_number: "123-456-7902",
        email: "olivia.rodriguez@example.com",
        birth_date: new Date("1988-01-13"),
        password: "12345",
      },
      {
        first_name: "James",
        last_name: "Gonzalez",
        phone_number: "123-456-7903",
        email: "james.gonzalez@example.com",
        birth_date: new Date("1987-02-14"),
        password: "12345",
      },
      {
        first_name: "Emma",
        last_name: "Lopez",
        phone_number: "123-456-7904",
        email: "emma.lopez@example.com",
        birth_date: new Date("1986-03-15"),
        password: "12345",
      },
      {
        first_name: "Daniel",
        last_name: "Hernandez",
        phone_number: "123-456-7905",
        email: "daniel.hernandez@example.com",
        birth_date: new Date("1985-04-16"),
        password: "12345",
      },
      {
        first_name: "Sophia",
        last_name: "Jackson",
        phone_number: "123-456-7906",
        email: "sophia.jackson@example.com",
        birth_date: new Date("1984-05-17"),
        password: "12345",
      },
      {
        first_name: "Liam",
        last_name: "Morgan",
        phone_number: "123-456-7907",
        email: "liam.morgan@example.com",
        birth_date: new Date("1983-06-18"),
        password: "12345",
      },
      {
        first_name: "Isabella",
        last_name: "Smith",
        phone_number: "123-456-7908",
        email: "isabella.smith@example.com",
        birth_date: new Date("1982-07-19"),
        password: "12345",
      },
      {
        first_name: "Logan",
        last_name: "Martin",
        phone_number: "123-456-7909",
        email: "logan.martin@example.com",
        birth_date: new Date("1981-08-20"),
        password: "12345",
      },
      {
        first_name: "Mia",
        last_name: "Garcia",
        phone_number: "123-456-7910",
        email: "mia.garcia@example.com",
        birth_date: new Date("1980-09-21"),
        password: "12345",
      },
    ],
  });

  await prisma.city.createMany({
    data: [
      {city_name: "New York"},
      {city_name: "Los Angeles"},
      {city_name: "Chicago"},
      {city_name: "Houston"},
      {city_name: "Phoenix"},
      {city_name: "Philadelphia"},
      {city_name: "San Antonio"},
      {city_name: "San Diego"},
      {city_name: "Dallas"},
      {city_name: "San Jose"},
      {city_name: "Austin"},
      {city_name: "Jacksonville"},
      {city_name: "San Francisco"},
      {city_name: "Indianapolis"},
      {city_name: "Seattle"},
      {city_name: "Denver"},
      {city_name: "Washington"},
      {city_name: "Boston"},
      {city_name: "El Paso"},
      {city_name: "Nashville"},
    ],
  });

  await prisma.district.createMany({
    data: [
      {district_name: "Manhattan", city_id: 1},
      {district_name: "Brooklyn", city_id: 1},
      {district_name: "Hollywood", city_id: 2},
      {district_name: "Downtown", city_id: 2},
      {district_name: "Lincoln Park", city_id: 3},
      {district_name: "Hyde Park", city_id: 3},
      {district_name: "Midtown", city_id: 4},
      {district_name: "Uptown", city_id: 4},
      {district_name: "North Mountain", city_id: 5},
      {district_name: "South Mountain", city_id: 5},
      {district_name: "Downtown", city_id: 6},
      {district_name: "Westside", city_id: 6},
      {district_name: "Financial District", city_id: 7},
      {district_name: "East Village", city_id: 7},
      {district_name: "Gaslamp Quarter", city_id: 8},
      {district_name: "Pacific Beach", city_id: 8},
      {district_name: "Downtown", city_id: 9},
      {district_name: "Uptown", city_id: 9},
      {district_name: "Downtown", city_id: 10},
      {district_name: "Willow Glen", city_id: 10},
    ],
  });

  await prisma.category.createMany({
    data: [
      {category_name: "Apartment"},
      {category_name: "House"},
      {category_name: "Condo"},
      {category_name: "Townhouse"},
      {category_name: "Studio"},
      {category_name: "Loft"},
      {category_name: "Villa"},
      {category_name: "Cottage"},
      {category_name: "Duplex"},
      {category_name: "Penthouse"},
      {category_name: "Mansion"},
      {category_name: "Farmhouse"},
      {category_name: "Bungalow"},
      {category_name: "Chalet"},
      {category_name: "Ranch"},
      {category_name: "Mobile Home"},
      {category_name: "Castle"},
      {category_name: "Treehouse"},
      {category_name: "Boat House"},
      {category_name: "Cabin"},
    ],
  });

  await prisma.propertyType.createMany({
    data: [
      {type_name: "Residential"},
      {type_name: "Commercial"},
      {type_name: "Industrial"},
      {type_name: "Land"},
      {type_name: "Mixed Use"},
      {type_name: "Retail"},
      {type_name: "Office"},
      {type_name: "Multi-family"},
      {type_name: "Single-family"},
      {type_name: "Agricultural"},
      {type_name: "Vacant Land"},
      {type_name: "Warehouse"},
      {type_name: "Restaurant"},
      {type_name: "Hotel"},
      {type_name: "Convenience Store"},
      {type_name: "Apartment Complex"},
      {type_name: "Shopping Center"},
      {type_name: "Office Building"},
      {type_name: "Townhome"},
      {type_name: "Farm"},
    ],
  });

  await prisma.property.createMany({
    data: [
      {
        property_name: "Cozy Apartment",
        city_id: 1,
        district_id: 1,
        category_id: 1,
        type_id: 1,
        room_count: 3,
        bed_count: 2,
        price: 1500.0,
        description: "A cozy apartment in the heart of the city.",
      },
      {
        property_name: "Luxury Condo",
        city_id: 2,
        district_id: 3,
        category_id: 3,
        type_id: 2,
        room_count: 4,
        bed_count: 3,
        price: 2500.0,
        description: "A luxury condo with stunning views.",
      },
      {
        property_name: "Spacious House",
        city_id: 3,
        district_id: 5,
        category_id: 2,
        type_id: 1,
        room_count: 5,
        bed_count: 4,
        price: 3500.0,
        description: "A spacious house with a large garden.",
      },
      {
        property_name: "Modern Loft",
        city_id: 4,
        district_id: 7,
        category_id: 6,
        type_id: 2,
        room_count: 2,
        bed_count: 1,
        price: 1800.0,
        description: "A modern loft in the downtown area.",
      },
      {
        property_name: "Beachfront Villa",
        city_id: 5,
        district_id: 9,
        category_id: 7,
        type_id: 1,
        room_count: 6,
        bed_count: 5,
        price: 4500.0,
        description: "A beachfront villa with private access to the beach.",
      },
      {
        property_name: "Charming Cottage",
        city_id: 6,
        district_id: 10,
        category_id: 8,
        type_id: 1,
        room_count: 4,
        bed_count: 3,
        price: 3000.0,
        description: "A charming cottage in a quiet neighborhood.",
      },
      {
        property_name: "Downtown Studio",
        city_id: 7,
        district_id: 8,
        category_id: 5,
        type_id: 2,
        room_count: 1,
        bed_count: 1,
        price: 1200.0,
        description: "A studio apartment in the downtown area.",
      },
      {
        property_name: "Elegant Townhouse",
        city_id: 8,
        district_id: 6,
        category_id: 4,
        type_id: 1,
        room_count: 3,
        bed_count: 2,
        price: 2000.0,
        description: "An elegant townhouse with modern amenities.",
      },
      {
        property_name: "Rustic Duplex",
        city_id: 9,
        district_id: 4,
        category_id: 9,
        type_id: 1,
        room_count: 3,
        bed_count: 2,
        price: 1600.0,
        description: "A rustic duplex with a vintage charm.",
      },
      {
        property_name: "Penthouse Suite",
        city_id: 10,
        district_id: 2,
        category_id: 10,
        type_id: 2,
        room_count: 5,
        bed_count: 4,
        price: 5000.0,
        description: "A penthouse suite with panoramic views.",
      },
      {
        property_name: "Urban Apartment",
        city_id: 1,
        district_id: 2,
        category_id: 1,
        type_id: 1,
        room_count: 2,
        bed_count: 1,
        price: 1300.0,
        description: "An apartment in a bustling urban area.",
      },
      {
        property_name: "Suburban House",
        city_id: 2,
        district_id: 4,
        category_id: 2,
        type_id: 1,
        room_count: 4,
        bed_count: 3,
        price: 2800.0,
        description:
          "A house with a spacious backyard in a suburban neighborhood.",
      },
      {
        property_name: "Beach House",
        city_id: 3,
        district_id: 6,
        category_id: 2,
        type_id: 1,
        room_count: 4,
        bed_count: 3,
        price: 3800.0,
        description: "A beachfront house with direct access to the ocean.",
      },
      {
        property_name: "Historic Loft",
        city_id: 4,
        district_id: 8,
        category_id: 6,
        type_id: 2,
        room_count: 2,
        bed_count: 1,
        price: 1900.0,
        description: "A loft located in a historic building.",
      },
      {
        property_name: "Mountain Retreat",
        city_id: 5,
        district_id: 10,
        category_id: 8,
        type_id: 1,
        room_count: 3,
        bed_count: 2,
        price: 3200.0,
        description: "A cozy cottage nestled in the mountains.",
      },
      {
        property_name: "City Studio",
        city_id: 6,
        district_id: 1,
        category_id: 5,
        type_id: 2,
        room_count: 1,
        bed_count: 1,
        price: 1100.0,
        description: "A studio apartment in the heart of the city.",
      },
      {
        property_name: "Luxury Townhome",
        city_id: 7,
        district_id: 3,
        category_id: 4,
        type_id: 1,
        room_count: 3,
        bed_count: 2,
        price: 2200.0,
        description: "A luxurious townhome with modern architecture.",
      },
      {
        property_name: "Vintage Duplex",
        city_id: 8,
        district_id: 5,
        category_id: 9,
        type_id: 1,
        room_count: 3,
        bed_count: 2,
        price: 1700.0,
        description: "A duplex featuring vintage interior design.",
      },
      {
        property_name: "Skyline Penthouse",
        city_id: 9,
        district_id: 7,
        category_id: 10,
        type_id: 2,
        room_count: 5,
        bed_count: 4,
        price: 5200.0,
        description: "A penthouse offering breathtaking skyline views.",
      },
      {
        property_name: "Coastal Villa",
        city_id: 10,
        district_id: 9,
        category_id: 7,
        type_id: 1,
        room_count: 6,
        bed_count: 5,
        price: 4800.0,
        description: "A villa overlooking the coast with luxurious amenities.",
      },
    ],
  });

  await prisma.booking.createMany({
    data: [
      {
        user_id: 1,
        property_id: 1,
        check_in_date: new Date("2024-07-01T00:00:00"), // Add time part
        check_out_date: new Date("2024-07-07T00:00:00"), // Add time part
        is_approved: true,
      },
      {
        user_id: 2,
        property_id: 2,
        check_in_date: new Date("2024-08-01T00:00:00"), // Add time part
        check_out_date: new Date("2024-08-07T00:00:00"), // Add time part
        is_approved: false,
      },
      {
        user_id: 3,
        property_id: 3,
        check_in_date: new Date("2024-09-01T00:00:00"), // Add time part
        check_out_date: new Date("2024-09-07T00:00:00"), // Add time part
        is_approved: true,
      },
      {
        user_id: 4,
        property_id: 4,
        check_in_date: new Date("2024-10-01T00:00:00"), // Add time part
        check_out_date: new Date("2024-10-07T00:00:00"), // Add time part
        is_approved: false,
      },
      {
        user_id: 5,
        property_id: 5,
        check_in_date: new Date("2024-11-01T00:00:00"), // Add time part
        check_out_date: new Date("2024-11-07T00:00:00"), // Add time part
        is_approved: true,
      },
      {
        user_id: 6,
        property_id: 6,
        check_in_date: new Date("2024-12-01T00:00:00"), // Add time part
        check_out_date: new Date("2024-12-07T00:00:00"), // Add time part
        is_approved: false,
      },
      {
        user_id: 7,
        property_id: 7,
        check_in_date: new Date("2025-01-01T00:00:00"), // Add time part
        check_out_date: new Date("2025-01-07T00:00:00"), // Add time part
        is_approved: true,
      },
      {
        user_id: 8,
        property_id: 8,
        check_in_date: new Date("2025-02-01T00:00:00"), // Add time part
        check_out_date: new Date("2025-02-07T00:00:00"), // Add time part
        is_approved: false,
      },
      {
        user_id: 9,
        property_id: 9,
        check_in_date: new Date("2025-03-01T00:00:00"), // Add time part
        check_out_date: new Date("2025-03-07T00:00:00"), // Add time part
        is_approved: true,
      },
      {
        user_id: 10,
        property_id: 10,
        check_in_date: new Date("2025-04-01T00:00:00"), // Add time part
        check_out_date: new Date("2025-04-07T00:00:00"), // Add time part
        is_approved: false,
      },
      {
        user_id: 11,
        property_id: 11,
        check_in_date: new Date("2025-05-01T00:00:00"), // Add time part
        check_out_date: new Date("2025-05-07T00:00:00"), // Add time part
        is_approved: true,
      },
      {
        user_id: 12,
        property_id: 12,
        check_in_date: new Date("2025-06-01T00:00:00"), // Add time part
        check_out_date: new Date("2025-06-07T00:00:00"), // Add time part
        is_approved: false,
      },
      {
        user_id: 13,
        property_id: 13,
        check_in_date: new Date("2025-07-01T00:00:00"), // Add time part
        check_out_date: new Date("2025-07-07T00:00:00"), // Add time part
        is_approved: true,
      },
      {
        user_id: 14,
        property_id: 14,
        check_in_date: new Date("2025-08-01T00:00:00"), // Add time part
        check_out_date: new Date("2025-08-07T00:00:00"), // Add time part
        is_approved: false,
      },
      {
        user_id: 15,
        property_id: 15,
        check_in_date: new Date("2025-09-01T00:00:00"), // Add time part
        check_out_date: new Date("2025-09-07T00:00:00"), // Add time part
        is_approved: true,
      },
      {
        user_id: 16,
        property_id: 16,
        check_in_date: new Date("2025-10-01T00:00:00"), // Add time part
        check_out_date: new Date("2025-10-07T00:00:00"), // Add time part
        is_approved: false,
      },
      {
        user_id: 17,
        property_id: 17,
        check_in_date: new Date("2025-11-01T00:00:00"), // Add time part
        check_out_date: new Date("2025-11-07T00:00:00"), // Add time part
        is_approved: true,
      },
      {
        user_id: 18,
        property_id: 18,
        check_in_date: new Date("2025-12-01T00:00:00"), // Add time part
        check_out_date: new Date("2025-12-07T00:00:00"), // Add time part
        is_approved: false,
      },
      {
        user_id: 19,
        property_id: 19,
        check_in_date: new Date("2026-01-01T00:00:00"), // Add time part
        check_out_date: new Date("2026-01-07T00:00:00"), // Add time part
        is_approved: true,
      },
      {
        user_id: 20,
        property_id: 20,
        check_in_date: new Date("2026-02-01T00:00:00"), // Add time part
        check_out_date: new Date("2026-02-07T00:00:00"), // Add time part
        is_approved: false,
      },
    ],
  });

  await prisma.favorite.createMany({
    data: [
      {user_id: 1, property_id: 1},
      {user_id: 2, property_id: 2},
      {user_id: 3, property_id: 3},
      {user_id: 4, property_id: 4},
      {user_id: 5, property_id: 5},
      {user_id: 6, property_id: 6},
      {user_id: 7, property_id: 7},
      {user_id: 8, property_id: 8},
      {user_id: 9, property_id: 9},
      {user_id: 10, property_id: 10},
      {user_id: 11, property_id: 11},
      {user_id: 12, property_id: 12},
      {user_id: 13, property_id: 13},
      {user_id: 14, property_id: 14},
      {user_id: 15, property_id: 15},
      {user_id: 16, property_id: 16},
      {user_id: 17, property_id: 17},
      {user_id: 18, property_id: 18},
      {user_id: 19, property_id: 19},
      {user_id: 20, property_id: 20},
    ],
  });

  await prisma.propertyComment.createMany({
    data: [
      // Property 1
      {
        property_id: 1,
        user_id: 1,
        comment_text: "Fantastic place, will definitely come again!",
        rating: 5,
        created_at: new Date(),
      },
      {
        property_id: 1,
        user_id: 2,
        comment_text: "Great location but a bit overpriced.",
        rating: 4,
        created_at: new Date(),
      },
      {
        property_id: 1,
        user_id: 3,
        comment_text: "Very clean and well-maintained.",
        rating: 5,
        created_at: new Date(),
      },
      {
        property_id: 1,
        user_id: 4,
        comment_text: "The room was spacious and comfortable.",
        rating: 5,
        created_at: new Date(),
      },

      // Property 2
      {
        property_id: 2,
        user_id: 5,
        comment_text: "The view was breathtaking!",
        rating: 5,
        created_at: new Date(),
      },
      {
        property_id: 2,
        user_id: 6,
        comment_text: "Good service but a bit noisy.",
        rating: 3,
        created_at: new Date(),
      },
      {
        property_id: 2,
        user_id: 7,
        comment_text: "Perfect for a weekend getaway.",
        rating: 4,
        created_at: new Date(),
      },

      // Property 3
      {
        property_id: 3,
        user_id: 8,
        comment_text: "Spacious and cozy, great for families.",
        rating: 5,
        created_at: new Date(),
      },
      {
        property_id: 3,
        user_id: 9,
        comment_text: "The apartment was nice but the kitchen was too small.",
        rating: 4,
        created_at: new Date(),
      },
      {
        property_id: 3,
        user_id: 10,
        comment_text: "Loved the interior design!",
        rating: 5,
        created_at: new Date(),
      },

      // Property 4
      {
        property_id: 4,
        user_id: 11,
        comment_text: "The loft was modern but a bit noisy at night.",
        rating: 4,
        created_at: new Date(),
      },
      {
        property_id: 4,
        user_id: 12,
        comment_text: "Amazing place, everything was perfect!",
        rating: 5,
        created_at: new Date(),
      },
      {
        property_id: 4,
        user_id: 13,
        comment_text: "Nice place but the WiFi was slow.",
        rating: 3,
        created_at: new Date(),
      },

      // Property 5
      {
        property_id: 5,
        user_id: 14,
        comment_text: "Incredible beachfront experience!",
        rating: 5,
        created_at: new Date(),
      },
      {
        property_id: 5,
        user_id: 15,
        comment_text: "The beach was right in front, loved it!",
        rating: 5,
        created_at: new Date(),
      },
      {
        property_id: 5,
        user_id: 16,
        comment_text: "It was okay, but the rooms need some updates.",
        rating: 3,
        created_at: new Date(),
      },

      // Property 6
      {
        property_id: 6,
        user_id: 17,
        comment_text: "The cottage was charming but needed some maintenance.",
        rating: 3,
        created_at: new Date(),
      },
      {
        property_id: 6,
        user_id: 18,
        comment_text: "Quiet and relaxing atmosphere.",
        rating: 5,
        created_at: new Date(),
      },
      {
        property_id: 6,
        user_id: 19,
        comment_text: "The place was nice but not worth the price.",
        rating: 3,
        created_at: new Date(),
      },

      // Property 7
      {
        property_id: 7,
        user_id: 20,
        comment_text: "Great location for a city trip.",
        rating: 4,
        created_at: new Date(),
      },
      {
        property_id: 7,
        user_id: 21,
        comment_text: "Super convenient and stylish.",
        rating: 5,
        created_at: new Date(),
      },
      {
        property_id: 7,
        user_id: 1,
        comment_text: "The bed was uncomfortable.",
        rating: 2,
        created_at: new Date(),
      },

      // Property 8
      {
        property_id: 8,
        user_id: 2,
        comment_text: "The townhouse was elegant and well-furnished.",
        rating: 5,
        created_at: new Date(),
      },
      {
        property_id: 8,
        user_id: 3,
        comment_text: "Everything was perfect!",
        rating: 5,
        created_at: new Date(),
      },
      {
        property_id: 8,
        user_id: 4,
        comment_text: "Nice place but customer service was slow.",
        rating: 3,
        created_at: new Date(),
      },

      // Property 9
      {
        property_id: 9,
        user_id: 5,
        comment_text: "Great for a family vacation.",
        rating: 5,
        created_at: new Date(),
      },
      {
        property_id: 9,
        user_id: 6,
        comment_text: "The pool was amazing!",
        rating: 5,
        created_at: new Date(),
      },
      {
        property_id: 9,
        user_id: 7,
        comment_text: "It was okay, but the breakfast was disappointing.",
        rating: 3,
        created_at: new Date(),
      },

      // Property 10
      {
        property_id: 10,
        user_id: 8,
        comment_text: "Beautiful surroundings and great facilities.",
        rating: 5,
        created_at: new Date(),
      },
      {
        property_id: 10,
        user_id: 9,
        comment_text: "The staff was really friendly.",
        rating: 5,
        created_at: new Date(),
      },
      {
        property_id: 10,
        user_id: 10,
        comment_text: "A bit far from the city center.",
        rating: 4,
        created_at: new Date(),
      },
      {
        property_id: 11,
        user_id: 11,
        comment_text: "Stylish apartment in a great location!",
        rating: 5,
        created_at: new Date(),
      },
      {
        property_id: 11,
        user_id: 12,
        comment_text: "The host was very accommodating.",
        rating: 4,
        created_at: new Date(),
      },
      {
        property_id: 11,
        user_id: 13,
        comment_text: "A bit noisy at night but overall nice.",
        rating: 3,
        created_at: new Date(),
      },
      {
        property_id: 11,
        user_id: 14,
        comment_text: "Loved the decor!",
        rating: 5,
        created_at: new Date(),
      },

      // Property 12 (3 comments)
      {
        property_id: 12,
        user_id: 15,
        comment_text: "A wonderful retreat in nature.",
        rating: 5,
        created_at: new Date(),
      },
      {
        property_id: 12,
        user_id: 16,
        comment_text: "Perfect getaway, very peaceful.",
        rating: 5,
        created_at: new Date(),
      },
      {
        property_id: 12,
        user_id: 17,
        comment_text: "The road to get here was rough but worth it.",
        rating: 4,
        created_at: new Date(),
      },

      // Property 13 (5 comments)
      {
        property_id: 13,
        user_id: 18,
        comment_text: "The house was spacious and well-equipped.",
        rating: 5,
        created_at: new Date(),
      },
      {
        property_id: 13,
        user_id: 19,
        comment_text: "Great place but check-in was a bit confusing.",
        rating: 3,
        created_at: new Date(),
      },
      {
        property_id: 13,
        user_id: 20,
        comment_text: "Loved the backyard space.",
        rating: 5,
        created_at: new Date(),
      },
      {
        property_id: 13,
        user_id: 21,
        comment_text: "The neighborhood was very friendly.",
        rating: 4,
        created_at: new Date(),
      },
      {
        property_id: 13,
        user_id: 1,
        comment_text: "Would definitely stay again!",
        rating: 5,
        created_at: new Date(),
      },

      // Property 14 (2 comments)
      {
        property_id: 14,
        user_id: 2,
        comment_text: "Super cozy and well-located.",
        rating: 5,
        created_at: new Date(),
      },
      {
        property_id: 14,
        user_id: 3,
        comment_text: "Not bad, but could use some updates.",
        rating: 3,
        created_at: new Date(),
      },

      // Property 15 (6 comments)
      {
        property_id: 15,
        user_id: 4,
        comment_text: "The balcony view was stunning!",
        rating: 5,
        created_at: new Date(),
      },
      {
        property_id: 15,
        user_id: 5,
        comment_text: "The pool area was fantastic.",
        rating: 5,
        created_at: new Date(),
      },
      {
        property_id: 15,
        user_id: 6,
        comment_text: "Too many mosquitoes at night.",
        rating: 3,
        created_at: new Date(),
      },
      {
        property_id: 15,
        user_id: 7,
        comment_text: "Very quiet and relaxing stay.",
        rating: 5,
        created_at: new Date(),
      },
      {
        property_id: 15,
        user_id: 8,
        comment_text: "Check-in was smooth, no complaints.",
        rating: 4,
        created_at: new Date(),
      },
      {
        property_id: 15,
        user_id: 9,
        comment_text: "The bathroom needs some renovation.",
        rating: 3,
        created_at: new Date(),
      },

      // Property 16 (4 comments)
      {
        property_id: 16,
        user_id: 10,
        comment_text: "Great for a long-term stay!",
        rating: 5,
        created_at: new Date(),
      },
      {
        property_id: 16,
        user_id: 11,
        comment_text: "Very well-maintained and clean.",
        rating: 5,
        created_at: new Date(),
      },
      {
        property_id: 16,
        user_id: 12,
        comment_text: "The location is convenient for everything.",
        rating: 5,
        created_at: new Date(),
      },
      {
        property_id: 16,
        user_id: 13,
        comment_text: "A bit expensive but worth it.",
        rating: 4,
        created_at: new Date(),
      },

      // Property 17 (3 comments)
      {
        property_id: 17,
        user_id: 14,
        comment_text: "Perfect spot for a romantic getaway.",
        rating: 5,
        created_at: new Date(),
      },
      {
        property_id: 17,
        user_id: 15,
        comment_text: "The fireplace made it extra cozy.",
        rating: 5,
        created_at: new Date(),
      },
      {
        property_id: 17,
        user_id: 16,
        comment_text: "I wish the WiFi was faster.",
        rating: 3,
        created_at: new Date(),
      },

      // Property 18 (5 comments)
      {
        property_id: 18,
        user_id: 17,
        comment_text: "Loved the modern design!",
        rating: 5,
        created_at: new Date(),
      },
      {
        property_id: 18,
        user_id: 18,
        comment_text: "The beds were super comfortable.",
        rating: 5,
        created_at: new Date(),
      },
      {
        property_id: 18,
        user_id: 19,
        comment_text: "Very well-equipped kitchen.",
        rating: 5,
        created_at: new Date(),
      },
      {
        property_id: 18,
        user_id: 20,
        comment_text: "A great place for remote work.",
        rating: 4,
        created_at: new Date(),
      },
      {
        property_id: 18,
        user_id: 21,
        comment_text: "Nice place but parking was an issue.",
        rating: 3,
        created_at: new Date(),
      },

      // Property 19 (2 comments)
      {
        property_id: 19,
        user_id: 1,
        comment_text: "Simple but comfortable.",
        rating: 4,
        created_at: new Date(),
      },
      {
        property_id: 19,
        user_id: 2,
        comment_text: "Affordable and clean, no complaints.",
        rating: 4,
        created_at: new Date(),
      },

      // Property 20 (6 comments)
      {
        property_id: 20,
        user_id: 3,
        comment_text: "A hidden gem!",
        rating: 5,
        created_at: new Date(),
      },
      {
        property_id: 20,
        user_id: 4,
        comment_text: "Absolutely loved this place.",
        rating: 5,
        created_at: new Date(),
      },
      {
        property_id: 20,
        user_id: 5,
        comment_text: "The host was super friendly and helpful.",
        rating: 5,
        created_at: new Date(),
      },
      {
        property_id: 20,
        user_id: 6,
        comment_text: "The beds were a bit too soft for my taste.",
        rating: 3,
        created_at: new Date(),
      },
      {
        property_id: 20,
        user_id: 7,
        comment_text: "Great value for the price.",
        rating: 4,
        created_at: new Date(),
      },
      {
        property_id: 20,
        user_id: 8,
        comment_text: "Would recommend to anyone visiting the area.",
        rating: 5,
        created_at: new Date(),
      },
    ],
  });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
