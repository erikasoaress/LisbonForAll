// Iteration #1
const mongoose = require("mongoose");

const Places = require("./models/Places.model");
const Reviews = require("./models/Reviews.model");
const User = require("./models/User.model");

const MONGO_URI =
  process.env.MONGODB_URI ||
  "mongodb+srv://mariana:12345678Qq@cluster0.3f2m5tq.mongodb.net/NOTYET";

const restaurants = [
  /*  name: String,
  image: String,
  location: String,
  accessibility: String, */
  {
    name: "Honorato Oriente",
    image: "../lisbonforall/public/images/honorato_oriente.jpg",
    location:
      "Alameda dos Oceanos, lote 2.11.01F/G Fracções H, i, 1990-225 Lisboa",
    website: "https://www.thefork.pt/restaurante/honorato-rio-r316775",
    accessibility: "Accessible",
    description: "Easy access through a ramp",
  },
  {
    name: "ZeroZero",
    image: "../lisbonforall/public/images/zerozero.jpg",
    location: "Lote 2.11.01H, Alameda dos Oceanos, 1990-225 Lisboa",
    website: "https://www.pizzeriazerozero.pt/",
    accessibility: "Accessible",
    description: "Easy access through a ramp",
  },
  {
    name: "Honest Greens",
    image: "../lisbonforall/public/images/honestgreens.jpg",
    location: "Alameda dos Oceanos 21101F, 1990-225 Lisboa",
    website: "https://honestgreens.com/en/",
    accessibility: "Accessible",
    description: "Easy access through a ramp",
  },
];

async function restaurants() {
  try {
    await mongoose.connect(MONGO_URI);

    let dbrestaurants = await Places.create(restaurants);
    // console.log(`Created ${dbDrones.length} drones on the DB`)

    mongoose.connection.close();
  } catch (error) {
    console.log(error);
  }
}

restaurants();

const tours = [
  {
    name: "Lisbon Tour",
    image: "../lisbonforall/public/images/lisbon-tour.jpg",
    location: "Lisbon",
    website: "https://www.adaptedtoursportugal.com/tours/lisbon/",
    accessibility: "Accessible",
    description:
      "Adapted vehicles with easy access for seniors and wheelchair users",
  },
  {
    name: "Fátima Tour",
    image: "../lisbonforall/public/images/fatima-tour.jpg",
    location: "Meeting in Lisbon",
    website: "https://www.adaptedtoursportugal.com/tours/fatima/",
    accessibility: "Accessible",
    description:
      "Adapted vehicles with easy access for seniors and wheelchair users",
  },
  {
    name: "Óbidos & Nazaré",
    image: "../lisbonforall/public/images/nazare.jpg",
    location: "Meeting in Lisbon",
    website:
      "https://www.adaptedtoursportugal.com/tours/tour-obidos-nazare-alcobaca/",
    accessibility: "Accessible",
    description:
      "Adapted vehicles with easy access for seniors and wheelchair users",
  },
];

async function tours() {
  try {
    await mongoose.connect(MONGO_URI);

    let dbtours = await Places.create(tours);
    // console.log(`Created ${dbDrones.length} drones on the DB`)

    mongoose.connection.close();
  } catch (error) {
    console.log(error);
  }
}

tours();

const culture = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
]

async function culture() {
  try {
    await mongoose.connect(MONGO_URI);

    let dbculture = await Places.create(culture);
    // console.log(`Created ${dbDrones.length} drones on the DB`)

    mongoose.connection.close();
  } catch (error) {
    console.log(error);
  }
}

culture();

const concerts = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
]

async function concerts() {
  try {
    await mongoose.connect(MONGO_URI);

    let dbconcerts = await Places.create(concerts);
    // console.log(`Created ${dbDrones.length} drones on the DB`)

    mongoose.connection.close();
  } catch (error) {
    console.log(error);
  }
}

concerts();
