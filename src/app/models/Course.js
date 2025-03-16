const mongoose = require("mongoose");
var slug = require("mongoose-slug-generator");

mongoose.plugin(slug);
// Mongoose, Schema giúp định nghĩa cấu trúc dữ liệu trong MongoDB,
const Schema = mongoose.Schema;

const Course = new Schema(
	{
		name: { type: String, required: true },
		description: { type: String, trim: true, default: "" },
		videoId: { type: String },
		level: { type: String },
		image: { type: String, required: true },
		slug: { type: String, slug: "name", unique: true }, // unique => chỉ tồn tại duy nhất
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Course", Course);
