import mongoose from "mongoose"

const FilesSchema = new mongoose.Schema({
    filename: { type: String },
    mimetype: { type: String }
},
    {timestamps: true}
)

const FilesModel = mongoose.model("Files", FilesSchema)

export { FilesModel }