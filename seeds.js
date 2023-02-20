// Iteration #1
const mongoose = require ("mongoose")

const Places = require("./models/Places.model")
const Reviews = require("./models/Reviews.model")
const User = require("./models/User.model")

const MONGO_URI = process.env.MONGODB_URI || "mongodb+srv://mariana:12345678Qq@cluster0.3f2m5tq.mongodb.net/NOTYET"

const restaurants = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
]

async function restaurants() {
    try {
        
        await mongoose.connect(MONGO_URI)

        let dbrestaurants = await Places.create(restaurants) 
        // console.log(`Created ${dbDrones.length} drones on the DB`)

    mongoose.connection.close()

    } catch (error) {
        console.log(error);
        
    }
}

restaurants();


const tours = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
]

async function tours() {
    try {
        
        await mongoose.connect(MONGO_URI)

        let dbtours = await Places.create(tours) 
        // console.log(`Created ${dbDrones.length} drones on the DB`)

    mongoose.connection.close()

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
        
        await mongoose.connect(MONGO_URI)

        let dbculture = await Places.create(culture) 
        // console.log(`Created ${dbDrones.length} drones on the DB`)

    mongoose.connection.close()

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
        
        await mongoose.connect(MONGO_URI)

        let dbconcerts = await Places.create(concerts) 
        // console.log(`Created ${dbDrones.length} drones on the DB`)

    mongoose.connection.close()

    } catch (error) {
        console.log(error);
        
    }
}

concerts();