const { Feedback, addSchema } = require("../../models/feedback");

const add = async (req, res, next) => {
	console.log("add working..");
	try {
		const { error } = addSchema.validate(req.body);
		if (error) throw new Error(error);
		const feedback = await Feedback.create(req.body);
		res.status(201).json(feedback);
	} catch (error) {
		next(error);
	}
};

module.exports = add;
