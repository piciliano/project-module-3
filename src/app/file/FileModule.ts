import { FilesModel } from "./entities/Files";
import { FilesRepository } from "./repositories/FilesRepository";

class FileModule {
    static build() {
        const repository = new FilesRepository(FilesModel)
        return { repository }
    }
}

export { FileModule }