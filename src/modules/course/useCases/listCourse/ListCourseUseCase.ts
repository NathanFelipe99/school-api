import { Course } from "@modules/automovel/infra/typeorm/entities/Course";
import { ICourseRepository } from "@modules/automovel/repositories/ICourseRepository";
import { AppError } from "@shared/errors/AppError";

class ListCourseUseCase {
    constructor(
        private CourseRepository: ICourseRepository
    ) { }
    
    async execute(): Promise<Course[]> {

    }
}

export { ListCourseUseCase };