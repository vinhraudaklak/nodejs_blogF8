const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");

mongoose.plugin(slug);
// Mongoose, Schema giúp định nghĩa cấu trúc dữ liệu trong MongoDB,
const Schema = mongoose.Schema;

const Course = new Schema(
	{
		name: { type: String, required: true },
		description: { type: String },
		videoId: { type: String, required: true  },
		image: { type: String, required: true }, 
		level: { type: String },
		slug: { type: String, slug: "name"}, // unique => chỉ tồn tại duy nhất
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Course", Course);
