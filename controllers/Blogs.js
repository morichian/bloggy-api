const Blogs = require("../models/blogs");
const createBlog = async (req, res) => {
  const { title, content } = req.body;
  const image = req.file.filename;

  const newBlog = new Blogs({
    title: title,
    content: content,
    image: image,
  });
  const Blog = newBlog.save();
  res.status(201).json({ message: "Blog has been created !", details: Blog });
};

const getBlogs = async (req, res) => {
  try {
    const response = await Blogs.find().exec();
    res.json({ response });
  } catch (error) {
    console.log(error.message);
  }
};

const DeleteBlog = async (req, res) => {
  await Blogs.findByIdAndDelete(req.params.id);
  res.json("Deleted!");
};
module.exports = { createBlog, getBlogs, DeleteBlog };
