const PORT = 3111;

const express = require("express");
const app = express();
const path = require("path");

//rút gọn đường dẫn đến thư mục
app.set("views", path.join(__dirname, "views"));
//lựa chọn cách kết xuất file (quên rồi, để search lại)
app.set("view engine", "ejs");
// lấy thông tin từ form (req.body)
app.use(express.urlencoded({ extended: true }));
//phải serve các file tĩnh như css như thế này thì mới được
// app.use('/public', express.static('public'));
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});

app.get("/news/show", (req, res) => {
  res.render("show");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get('/need_support', (req, res) => {
  res.render('need_support')
})

app.get("/supporter", (req, res) => {
  res.render("supporter");
});

app.get('/map', (req, res) => {
  res.render('map')
})

app.listen(PORT, () => {
  console.log("server is listening on port", PORT);
});
