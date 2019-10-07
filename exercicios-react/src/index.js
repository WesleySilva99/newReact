import React from 'react'
import ReactDOM from 'react-dom'

//import PrimeiroComponente from './componentes/PrimeiroComponente'
import {CompA, Compb as B} from './componentes/DoisComponentes'

const elemento = document.getElementById("root")
//ReactDOM.render('Olá React', elemento)
ReactDOM.render(
    <div>

        <CompA nome="Wesley Silva" />
        <B cpf="119.320.934-00" />

    </div>
    , elemento)