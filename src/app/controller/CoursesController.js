const Course = require("../models/Course");

class NewsController {
	// [GET] /courses/:slug
	show(req, res) {
		Course.findOne({ slug: req.params.slug })
			// .lean() giúp chuyển kết quả từ Mongoose Documents thành plain JavaScript objects.
			.lean()
			.then((course) => {
				res.render("courses/show", { course });
			})
			.catch((err) => res.status(500).json({ error: err.message }));
	}
	// [GET] /courses/create
	create(req, res) {
		Course.findOne({ slug: req.params.slug })
			// .lean() giúp chuyển kết quả từ Mongoose Documents thành plain JavaScript objects.
			.lean();
		res.render("courses/create");
	}
	// [POST] /courses/store => handle data
	store(req, res) {
		// Tạo một instance mới từ model Course
		const course = new Course(req.body);

		// Lưu vào MongoDB
		course
			.save()
			.then(() => res.redirect("/"))
			.catch((err) => {
				console.error("Lỗi khi lưu khóa học:", err);
				res.status(500).send("Lỗi server");
			});
	}
	// [GET] /course/:id/edit
	edit(req, res, next) {
		Course.findById(req.params.id)
			.lean()
			.then((course) =>
				res.render("courses/edit", {
					course,
				})
			)
			.catch(next);
	}
	// [PUT] /course/:id
	updated(req, res, next) {
		Course.updateOne({ _id: req.params.id }, req.body)
			.then(() => res.redirect("/me/stored/courses"))
			.catch(next);
	}
	// [DELETE /course/:id]
	destroy(req, res, next) {
		Course.deleteOne({ _id: req.params.id })
			.then(() => res.redirect("back"))
			.catch(next);
	}
}

module.exports = new NewsController();
