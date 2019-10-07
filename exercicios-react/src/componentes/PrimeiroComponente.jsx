import React from 'react'

//da pra chamar funções javascript qdo a linha estiver entre chaves

export default (props) => 
    <div>
        <h1>{props.valor}</h1>
        <h2>{props.param2}</h2>
        <p>{Math.random()}</p>
    </div>
