import mongoose, { Schema } from "mongoose";

const OccurrenceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  kind: { type: String, required: true },
  files: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Files"}],
  timeline_id: { type: Schema.Types.ObjectId, ref: 'Timeline'}
},
    { timestamps: true }
);

const OccurrenceModel = mongoose.model("Occurrences", OccurrenceSchema)

export { OccurrenceModel }
