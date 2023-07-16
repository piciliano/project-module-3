import mongoose, { Schema } from "mongoose"

const TimelineSchema: Schema = new mongoose.Schema ({
    name: { type: String, required: true },
    ocurrences: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Occurrences'}],
    patientId: { type: Schema.Types.ObjectId, ref: 'Patient' },
},
    { timestamps: true }
)

const TimelineModel = mongoose.model("Timeline", TimelineSchema)

export { TimelineModel }