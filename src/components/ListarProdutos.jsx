import React from "react";

export default function ListarProdutos({ produtos}) {
    return(
        <div className="produtos-container">
        {produtos.map(produto => (
    <div key={produto.id} className="produto">
        <img src={produto.imagem} alt={produto.nome} />
        <h1>{produto.nome}</h1>
        <p>Preço: R${produto.preco.toFixed(2)}</p>
        </div>
        ))}
        </div>
    );
}