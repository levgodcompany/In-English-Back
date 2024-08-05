export interface CURD<T>{
    findOne(id: number): Promise<T>
    findAll():Promise<T[]>
    create(data: T): Promise<T>
    update(id:number, data:T): Promise<T>
    delete(id: number): Promise<T>
}