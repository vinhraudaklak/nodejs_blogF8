const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars"); // Fix require handlebars

const app = express();
const port = 3000;

// HTTP logger
app.use(morgan("combined"));

// Template Engine (Handlebars)
app.engine("hbs", engine({ extname: ".hbs" })); // Chỉ định đuôi file `.hbs`
app.set("view engine", "hbs"); // Không cần dấu `.`
app.set("views", path.join(__dirname, "resources/views")); // Đảm bảo đường dẫn đúng

// Định nghĩa Route
app.get("/", (req, res) => {
	res.render("home");
});

app.get("/news", (req, res) => {
	res.render("news");
});

// Chạy server
app.listen(port, () => {
	console.log(`Server chạy tại http://localhost:${port}`);
});
