const Course = require("../models/Course");

class SiteController {
	// [GET] /
	index(req, res) {
		// find gửi yêu cầu đến model.
		Course.find({}).lean()
			.then((courses) =>
				res.render("home", {
					courses,
				})
			)
			.catch((err) => res.status(500).json({ error: err.message }));
	}
	// [GET] /search
	search(req, res) {
		res.render("search");
	}
}

module.exports = new SiteController();
