import React from 'react'
import {filhosComProps} from '../ultils/ultil'

export default props =>
    <div>
        <h1>Família</h1>
        {filhosComProps(props)}


        {/* React.cloneElement(props.children, 
            { ...props}) */}
            {/* RESOLUÇÕES PARA LISTA DE TAMANHO 1*/}
            {/*  ...props}) */}
            { /* props) */}
            {/*  sobrenome: props}) */}
        {/* React.cloneElement(props.children, 
            { sobrenome: props.sobrenome}) */}
    </div>