import React from 'react'
import ReactDOM from 'react-dom'

//import PrimeiroComponente from './componentes/PrimeiroComponente'
//import CompA, {Compb as B, maisUm as M} from './componentes/DoisComponentes'
import FamiliaSilva from './componentes/FamiliaSilva'

//import MultiElemento from './componentes/MultElemento'

const elemento = document.getElementById("root")
//ReactDOM.render('Olá React', elemento)
ReactDOM.render(
    <div>

       { /* <MultiElemento /> */}
        {/*
        <CompA nome="Wesley Silva" />
        <B cpf="119.320.934-00" />
        <M texto="Chegou o textã0"/>
        */}
        
        <FamiliaSilva />
    
    </div>
    , elemento)