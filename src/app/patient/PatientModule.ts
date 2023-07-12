import { UserModule } from "../users/UserModule";
import { PatientControllers } from "./controllers/PatientControllers";
import { PatientModel } from "./entities/Patient";
import { PatientRepository } from "./repositories/PatientRepository";
import { PatientService } from "./services/PatientService";

class PatientModule {
    static build() {
        const repository = new PatientRepository(PatientModel)
        const service = new PatientService(repository, UserModule.build().repository)
        const controller = new PatientControllers(service)

        return { repository, service, controller }
    }
}

export { PatientModule }