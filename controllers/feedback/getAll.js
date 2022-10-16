const { Feedback } = require("../../models/feedback");

const getAll = async (req, res, next) => {
	try {
		const feedback = await Feedback.find();
		res.json(feedback);
	} catch (error) {
		next(error);
	}
};

module.exports = getAll;
