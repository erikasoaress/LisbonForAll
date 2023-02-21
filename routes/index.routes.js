const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middleware/isLoggedIn");
const Places = require("../models/Places.model");
const fileUploader = require("../config/cloudinary.config");

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
router.get("/places", (req, res) => res.render("places"));

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
}); */

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
// Get Details
/* router.get('/books/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    //get a single book by id
    const book = await Book.findById(id);
    //render the view with the book
    res.render('books/book-details', book);
  } catch (error) {
    console.log(error);
    next(error);
  }
}); */
module.exports = router;
