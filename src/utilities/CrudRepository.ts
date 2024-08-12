export interface ICrudRepository<T> {
  create(data: T): Promise<T>;
  findOne(id: number): Promise<T | null>;
  findAll(): Promise<T[]>;
  update(id: number, data: T): Promise<T>;
  delete(id: number): Promise<T>;
}
