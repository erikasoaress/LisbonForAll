const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middleware/isLoggedIn");
const Places = require("../models/Places.model");
const User = require("../models/User.model");
const fileUploader = require("../config/cloudinary.config");
const Reviews = require("../models/Reviews.model");

/* GET home page */
router.get("/", (req, res, next) => {
  const logged = req.session.currentUser;
  res.render("index", { logged });
});

router.get("/private", isLoggedIn, (req, res, next) => {
  let user = req.session.currentUser;
  res.render("auth/private", user);
});

router.get("/profile", isLoggedIn, (req, res, next) => {
  let user = req.session.currentUser;
  res.render("profile", user);
});

// Create places view
router.get("/places", isLoggedIn, async (req, res) => {
  try {
    const places = await Places.find();
    res.render("places", { places });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get("/places/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    //get a single book by id
    //Single populate
    const places = await Book.findById(id).populate("reviews");

    console.log(places);
    //render the view with the book
    const users = await User.find();

    res.render("places-reviews", { places });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

//Post route to recive the information and create the places on the db
router.post(
  "/profile",
  fileUploader.single("image"),
  async (req, res, next) => {
    try {
      //extract info from req.body
      const { name, location, website, accessibility, description, reviews } =
        req.body;

      let image;

      if (req.file) {
        image = req.file.path;
      } else {
        image = "https://i.ibb.co/zxRZ9FC/pub-5537449-1280.jpg";
      }
      //create the places in the db
      await Places.create({
        name,
        image,
        location,
        website,
        accessibility,
        description,
        reviews,
      });

      //redirect to the list again
      res.redirect("/places");
      //await Book.create(req.body)
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
);

//Get Details
router.get("/places/edit/:id", isLoggedIn, async (req, res, next) => {
  try {
    const { id } = req.params;
    //get a single place by id
    const placesDet = await Places.findById(id);
    console.log(placesDet);
    //render the view with the book
    res.render("places-edit", placesDet);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

//
router.post("/places/edit/:id", isLoggedIn, async (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  const { name, location, website, accessibility, description } = req.body;
  try {
    const place = await Places.findById(id);
    console.log(place);
    await Places.findByIdAndUpdate(
      place._id,

      { name, location, website, accessibility, description },

      { new: true }
    );

    res.redirect(`/places`);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get("/reviews/create/:id", isLoggedIn, async (req, res, next) => {
  const { id } = req.params;
  let user = req.session.currentUser;

  try {
    const myPlaces = await Places.findById(id);
    const myUser = await User.findById(user);
    console.log(myPlaces);
    console.log(myUser);
    res.render("places-createreviews", { user, placeId: myPlaces });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.post(
  "/reviews/create/:id/:placeId",
  isLoggedIn,
  async (req, res, next) => {
    const { id } = req.params;
    const placeId = req.params.placeId;
    let myUserId = req.session.currentUser;
    const { content, user } = req.body;
    try {
      const placesDet = await Places.findById(id);

      const newReview = await Reviews.create({ content, user });
      await User.findByIdAndUpdate(myUserId, {
        $push: { reviews: newReview._id },
      });
      console.log(myUserId);

      await Places.findByIdAndUpdate(placeId, {
        $push: { reviews: newReview._id },
      });
      console.log(placesDet);
      res.redirect("/places");
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
);

router.get("/reviews/list/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    let reviews = await Reviews.findById(id).populate("user");
    res.render("places-reviews", { reviews });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.post("/reviews/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const reviews = await Reviews.findById(id);

    res.render("places-reviews", reviews);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.post("/reviews/:id/delete", async (req, res, next) => {
  try {
    const { id } = req.params;

    await Reviews.findByIdAndDelete(id);
    res.redirect("/places-reviews");
  } catch (error) {
    console.log(error);
    next(error);
  }
});

//Edit form
/* router.get('/reviews/:id/edit', async (req, res, next) => {
  try {
    const { id } = req.params;
    const reviews = await Reviews.findById(id);
    res.render('reviews/reviews-edit', reviews);
  } catch (error) {
    console.log(error);
    next(error);
  }
});  */

/* router.post('/reviews/:id/edit', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { content, user } = req.body;

    await Reviews.findByIdAndUpdate(id, { content, user });

    res.redirect(`/reviews/${id}`);
  } catch (error) {
    console.log(error);
    next(error);
  }
}); */

//delete a review

/* router.post('/reviews/:id/delete', async (req, res, next) => {
  try {
    const { id } = req.params;

    await Reviews.findByIdAndDelete(id);
    res.redirect('/reviews');
  } catch (error) {
    console.log(error);
    next(error);
  }
});
*/
module.exports = router;
