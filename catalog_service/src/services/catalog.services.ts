import type { ICatalogRepository } from "../interface/catalogRepository.interface.js";

export class CatalogService {

  private _repository : ICatalogRepository
  constructor(repository: ICatalogRepository) {
    this._repository = repository
  }

  createProduct(input : any) {

  }

  updateProduct (input : any) {

  }

  getProducts (limit:number, offset: number) {

  }

  getProductById(id:number) {

  }

  deleteProduct (id : number) {

  }
}