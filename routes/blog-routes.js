const router = require("express").Router();
const { createBlog, getBlogs, DeleteBlog } = require("../controllers/Blogs");
const upload = require("../util/imageUploader");

router.get("/", getBlogs);
router.post("/create", upload, createBlog);
router.delete("/:id", DeleteBlog);

module.exports = router;
