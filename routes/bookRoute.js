const { fetchBooks, createBooks, deleteBooks, updateBooks, singlefetchBook } = require("../controllers/bookController")

const router = require("express").Router()

router.route("/").get(fetchBooks).post(createBooks)
router.route("/:id").delete(deleteBooks).patch(updateBooks).get(singlefetchBook)



module.exports = router