import { ICreateStudentDTO } from "../dtos/ICreateStudentDTO";
import { Student } from "../infra/typeorm/entities/Student";

interface IStudentRepository {
    create(data: ICreateStudentDTO): Promise<Student>;
    findAll(): Promise<Student[]>;
}

export { IStudentRepository };