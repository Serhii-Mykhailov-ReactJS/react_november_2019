import React from 'react';
import axios from 'axios';
import Checkbox from '@material-ui/core/Checkbox';

const url = process.env.REACT_APP_URL;

function TodoItem(props) {

    const { item, forceRender } = props;
    const {id, body, active} = item;

    const updateItem = (ev) => {
        ev.preventDefault();
        
        let obj ={
            active : !active
        }
        
        if(obj) {
            axios({
                method: 'PATCH',
                url: url+id,
                data: obj
            })
            .then(function (res) {
                console.log('UPDATED '+res);
                forceRender();
            })
            .catch(function (error) {
                console.log(error);
            });

        }
        else {
            console.log("obj is empty");
        }

    }
    
    return(
        <>     
            <Checkbox onChange={updateItem} checked={!active} />
            <span className={!active?"Crossed":""}>
                {body}&nbsp;
            </span>
        </>
    )
}

export default TodoItem;





