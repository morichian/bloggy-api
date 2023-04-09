const router = require("express").Router();
const { createBlog, getBlogs } = require("../controllers/Blogs");
const upload = require("../util/imageUploader");

router.get("/", getBlogs);
router.post("/create", upload, createBlog);

module.exports = router;
