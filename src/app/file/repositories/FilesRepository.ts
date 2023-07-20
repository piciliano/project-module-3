import { CreateFileDto } from "../dtos/CreateFileDto";
import { FilesModel } from "../entities/Files";

class FilesRepository {
    constructor(private model: typeof FilesModel) {}

        async create(files: CreateFileDto) {
            return this.model.create(files)
        }
    
}

export { FilesRepository } 