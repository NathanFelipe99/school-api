import { ICreateCourseDTO } from "@modules/automovel/dtos/ICreateCourseDTO";
import { Course } from "@modules/automovel/infra/typeorm/entities/Course";
import { ICourseRepository } from "../ICourseRepository";

class CourseRepositoryInMemory implements ICourseRepository {
    variable_list: Course[] = [];

    async create({
        //params here
    }: ICreateCourseDTO): Promise<Course> {
        const variable = new Course();

        Object.assign(variable, {
            //params
        });

        this.variable_list.push(variable);
        return variable;
    }

    async findAll(): Promise<Course[]> {
        return this.variable_list;
    }

}

export { CourseRepositoryInMemory };