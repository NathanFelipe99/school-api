import { ICreateCourseDTO } from "@modules/automovel/dtos/ICreateCourseDTO";
import { Course } from "@modules/automovel/infra/typeorm/entities/Course";
import { ICourseRepository } from "@modules/automovel/repositories/ICourseRepository";
import { AppError } from "@shared/errors/AppError";

class CreateCourseUseCase {
    constructor(
        private CourseRepository: ICourseRepository
    ) {}

    async execute({//
        params here
    }: ICreateCourseDTO): Promise<Course> {

    }
}

export { CreateCourseUseCase };