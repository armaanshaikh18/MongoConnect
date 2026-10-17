let mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/courses_db")
  .then(() => {
    console.log("Connected To db");
  })
  .catch((error) => {
    console.log("Something Went Wrong", error.message);
  });

let schema = mongoose.Schema({
  author: { type: String },
  courses: [String],
  price: { type: Number },
  isAvailable: { type: Boolean },
  isPublished: { type: Date, default: Date.now() },
});

let Model = mongoose.model("courses", schema);

async function Courses() {
  let Data = new Model({
    author: "Armaan",
    courses: ["Angular", "Java", "Python"],
    price: 100,
    isAvailable: true,
  });

  let a = await Data.save();
  console.log("Data", a);
}

Courses();

