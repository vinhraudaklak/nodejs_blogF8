const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars"); // Fix require handlebars

const app = express();
const port = 3000;

const route = require("./routes");

// Middleware phục vụ file tĩnh (CSS, JS, Images)
app.use(express.static(path.join(__dirname, "public")));

// XMLHttpRequest, fetch, axios,
app.use(
	express.urlencoded({
		extended: true,
	})
);
app.use(express.json());

// HTTP logger
app.use(morgan("combined"));

// Template Engine (Handlebars)
app.engine("hbs", engine({ extname: ".hbs" })); // Chỉ định đuôi file `.hbs`
app.set("view engine", "hbs"); // Không cần dấu `.`
app.set("views", path.join(__dirname, "resources/views")); // Đảm bảo đường dẫn đúng

// Home, Search, Contact
// Routes init
route(app);

// Chạy server
app.listen(port, () => {
	console.log(`Server chạy tại http://localhost:${port}`);
});
