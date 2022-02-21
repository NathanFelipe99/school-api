import { ICreateCourseDTO } from "../dtos/ICreateCourseDTO";
import { Course } from "../infra/typeorm/entities/Course";

interface ICourseRepository {
    create(data: ICreateCourseDTO): Promise<Course>;
    findAll(): Promise<Course[]>;
}

export { ICourseRepository };