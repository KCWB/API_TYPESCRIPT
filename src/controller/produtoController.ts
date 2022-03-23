import { Request, Response } from "express";
import { produto } from "../models/produto";
import { ProdutoRepository } from "../respositorio/produtorepository";

const produtoRepository = new ProdutoRepository

export class produtoController{
    create(request:Request, response: Response) : void{
        const produtos = produtoRepository.create(request.body);

        response.status(201).json({message : "produto cadastrado"})
    }

    list(request: Request, response: Response){
        const produtos = produtoRepository.list();
        response.
            status(200).json({message: "LIstagem de Produtos", data : produtos},)
    }

    update(request:Request, response: Response){
        const produtos = produtoRepository.update(request.body);
        response.status(200).json({message : "Produto alterado", data: produtos})
    }
    delete(request: Request, response: Response){
        const nome = request.params.nome;
        const Produtos = produtoRepository.remove(nome);

        response.
            status(200).json({message: "LIstagem de Produtos", data : Produtos});
    }

}