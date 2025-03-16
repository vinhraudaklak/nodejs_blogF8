const Course = require("../models/Course");

class NewsController {
	// [GET] /courses/:slug
	show(req, res) {
		// req.params chứa các tham số (parameters) từ URL.
		// req.body chứa dữ liệu được gửi từ form hoặc API request
		// req.query chứa các tham số truy vấn (query parameters) từ URL khi người dùng gửi yêu cầu (GET request).
		Course.findOne({ slug: req.params.slug })
			// .lean() giúp chuyển kết quả từ Mongoose Documents thành plain JavaScript objects.
			.lean()
			.then((course) => {
				res.render("courses/show", { course });
			})
			.catch((err) => res.status(500).json({ error: err.message }));
	}
}

module.exports = new NewsController();
