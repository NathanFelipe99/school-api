import { ICreateStudentDTO } from "@modules/automovel/dtos/ICreateStudentDTO";
import { Student } from "@modules/automovel/infra/typeorm/entities/Student";
import { IStudentRepository } from "@modules/automovel/repositories/IStudentRepository";
import { AppError } from "@shared/errors/AppError";

class CreateStudentUseCase {
    constructor(
        private StudentRepository: IStudentRepository
    ) {}

    async execute({//
        params here
    }: ICreateStudentDTO): Promise<Student> {

    }
}

export { CreateStudentUseCase };