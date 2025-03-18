const mongoose = require("mongoose");

async function connect() {
	try {
		await mongoose.connect(
			"mongodb://localhost:27017/learn_F8_education_dev"
		);
		console.log("✅ MongoDB connected successfully!");
	} catch (error) {
		console.error("❌ MongoDB connection failed:", error.message);
		process.exit(1); // Dừng app nếu kết nối thất bại
	}
}

module.exports = { connect };
