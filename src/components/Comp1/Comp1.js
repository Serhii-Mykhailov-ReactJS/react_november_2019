import React from 'react';


function Comp1 (props) {
    const { name } = props;

    return(
        <h3>Hello { name }! Look what you have today :</h3>
    );
}

export default Comp1;