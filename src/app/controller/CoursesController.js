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
		// 	course.save() => lưu dữ liệu vào MongoDB bằng Mongoose
		const course = new Course(req.body);
		course
			.save()
			.then(() => res.redirect("/"))
			.catch((err) => {});
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
}

module.exports = new NewsController();
