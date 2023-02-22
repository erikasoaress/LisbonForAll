const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middleware/isLoggedIn");
const Places = require("../models/Places.model");
const User = require("../models/User.model");
const fileUploader = require("../config/cloudinary.config");
const Review = require("../models/Places.model");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/private", isLoggedIn, (req, res, next) => {
  let user = req.session.currentUser;
  res.render("auth/private", user);
});

router.get("/profile", isLoggedIn, (req, res, next) => {
  res.render("profile");
});

// Create places view
router.get("/places", async (req, res) => {
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
router.get("/places/edit/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    //get a single place by id
    const placesDet = await Places.findById(id);
    //render the view with the book
    res.render("places-edit", placesDet);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

//
router.post("/places/edit/:id", isLoggedIn, async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, location, website, accessibility, description } = req.body;

    await Places.findByIdAndUpdate(id, {
      name,
      location,
      website,
      accessibility,
      description,
    });
    res.redirect(`/places-edit/${id}`);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.post("review/create/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { content, user } = req.body;

    const newReview = await Review.create({ content, user });

    await User.findByIdAndUpdate(user, { $push: { reviews: newReview._id } });
    await Places.findByIdAndUpdate(id, { $push: { reviews: newReview._id } });

    res.redirect("/places-createreview");
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get("reviews/list", async (req, res, next) => {
  try {
    let reviews = await Review.find();
    res.render("places-reviews", { reviews });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.post("reviews/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const reviews = await Review.findById(id);

    res.render("places-reviews", reviews);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.post("/reviews/:id/delete", async (req, res, next) => {
  try {
    const { id } = req.params;

    await Review.findByIdAndDelete(id);
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
