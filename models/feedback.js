const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleSaveErrors } = require("../utils");

const feedbackSchema = new Schema(
	{
		name: {
			type: String,
			required: [true, "Set name for feedback"],
		},
		email: {
			type: String,
			required: [true, "Set email for feedback"],
		},
		message: {
			type: String,
			required: [true, "Set feedback"],
		},
	},
	{ versionKey: false, timestamps: true }
);

feedbackSchema.post("save", handleSaveErrors);

const addSchema = Joi.object({
	name: Joi.string().required(),
	email: Joi.string().required(),
	message: Joi.string().required(),
});

const Feedback = model("feedbacks", feedbackSchema);

module.exports = { Feedback, addSchema };
