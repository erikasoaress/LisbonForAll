// Iteration #1
const mongoose = require("mongoose");

const Places = require("./models/Places.model");
const Reviews = require("./models/Reviews.model");
const User = require("./models/User.model");

const MONGO_URI =
  process.env.MONGODB_URI ||
  "mongodb+srv://mariana:12345678Qq@cluster0.3f2m5tq.mongodb.net/lisbonforall";

const restaurants = [
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

const concerts = [
  {
    name: "Festival Nos Alive",
    location: "Passeio Marítimo de Algés",
    accessibility: "Accessible",
    description:
      "The festival has an area reserved for people with reduced mobility and access to special toilets.",
    website: "https://nosalive.com/acesso_especial/",
  },
];

const culture = [
  {
    name: "Cinema São Jorge",
    location: "Av. da Liberdade 175, 1250-144 Lisboa",
    accessibility: "Accessible",
    description: "The cinema has an access ramp to the main entrance.",
    website: "https://cinemasaojorge.pt/",
  },
];


async function create() {
  try {
    await mongoose.connect(MONGO_URI);

    let dbrestaurants = await Places.create(restaurants);
    let dbtours = await Places.create(tours);
    let dbculture = await Places.create(culture);
    let dbconcerts = await Places.create(concerts);
  
    console.log(
      `Created ${dbrestaurants.length} restaurants + ${dbtours.length} tours + ${dbculture.length} culture + ${dbconcerts.length} concerts on the DB`
    );

    mongoose.connection.close();
  } catch (error) {
    console.log(error);
  }
}



create();

/* async function createTours() {
  try {
    await mongoose.connect(MONGO_URI);

    let dbtours = await Places.create(tours);
    // console.log(`Created ${dbDrones.length} drones on the DB`)

    mongoose.connection.close();
  } catch (error) {
    console.log(error);
  }
}

createTours();

async function createCulture() {
  try {
    await mongoose.connect(MONGO_URI);
    let dbculture = await Places.create(culture);
    // console.log(`Created ${dbDrones.length} drones on the DB`)
    mongoose.connection.close();
  } catch (error) {
    console.log(error);
  }
}
createCulture();

async function createConcerts() {
  try {
    await mongoose.connect(MONGO_URI);
    let dbconcerts = await Places.create(concerts);
    // console.log(`Created ${dbDrones.length} drones on the DB`)
    mongoose.connection.close();
  } catch (error) {
    console.log(error);
  }
}
createConcerts();
 */
