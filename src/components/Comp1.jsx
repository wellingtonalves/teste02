import React from 'react';

const Comp1 = props => {
    console.log(props)
    return <div>Valor minimo {props.nome} e valor maximo {props.max}</div>
}

export default Comp1;