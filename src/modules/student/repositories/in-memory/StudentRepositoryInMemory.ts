import { ICreateStudentDTO } from "@modules/automovel/dtos/ICreateStudentDTO";
import { Student } from "@modules/automovel/infra/typeorm/entities/Student";
import { IStudentRepository } from "../IStudentRepository";

class StudentRepositoryInMemory implements IStudentRepository {
    variable_list: Student[] = [];

    async create({
        //params here
    }: ICreateStudentDTO): Promise<Student> {
        const variable = new Student();

        Object.assign(variable, {
            //params
        });

        this.variable_list.push(variable);
        return variable;
    }

    async findAll(): Promise<Student[]> {
        return this.variable_list;
    }

}

export { StudentRepositoryInMemory };