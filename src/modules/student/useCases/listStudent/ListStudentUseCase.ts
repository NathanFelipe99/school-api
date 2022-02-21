import { Student } from "@modules/automovel/infra/typeorm/entities/Student";
import { IStudentRepository } from "@modules/automovel/repositories/IStudentRepository";
import { AppError } from "@shared/errors/AppError";

class ListStudentUseCase {
    constructor(
        private StudentRepository: IStudentRepository
    ) { }
    
    async execute(): Promise<Student[]> {

    }
}

export { ListStudentUseCase };