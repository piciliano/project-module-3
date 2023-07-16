import mongoose, { Schema } from "mongoose";

const PatientSchema = new mongoose.Schema({
    name: { type: String, required: true},
    birthdate: { type: Date, require: true},
    contact: { type: String, required: true},
    demands: { type: String, required: true},
    personalAnnotations: { type: String, required: true},
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    timelines: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Timeline"}]
},
    { timestamps: true}
);

const PatientModel = mongoose.model("Patient", PatientSchema)

export { PatientModel }