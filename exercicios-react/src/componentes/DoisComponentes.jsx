import React from 'react'

const CompA = props =>
    <h1>Nome completo: {props.nome}</h1>

const Compb = props =>
    <h1>Cpf: {props.cpf}</h1>

const maisUm = props =>
    <div>
        <h1>Vem outro componente</h1>
        <p>{props.texto}</p>
    </div>

export {maisUm, Compb}
export default CompA