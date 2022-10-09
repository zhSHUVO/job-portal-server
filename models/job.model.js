const mongoose = require("mongoose");
const validator = require("validator");
const { objectId } = mongoose.Schema.Types;

const jobSchema = mongoose.Schema(
    {
        title: {
            type: String,
            trim: true,
            required: [true, "Job title is required"],
        },
        description: {
            type: String,
            trim: true,
            required: [true, "Please provide job description"],
        },
        type: {
            type: String,
            lowercase: true,
            required: [true, "Provide what type of job is this"],
            enum: {
                values: ["full-time", "part-time"],
                message: "Type value must be full-time or part-time",
            },
        },
        location: {
            type: String,
            trim: true,
            required: [true, "Job location is necessary"],
        },
        salary: {
            type: String,
            required: [true, "Provide salary range"],
        },
        applyLink: {
            type: String,
            validate: [validator.isURL, "Please provide a apply link"],
        },
        companyName: {
            type: String,
            trim: true,
            required: [true, "Please mention your company name"],
        },
    },
    { timestamp: true }
);

const Job = mongoose.model("Job", jobSchema);
module.exports = Job;
