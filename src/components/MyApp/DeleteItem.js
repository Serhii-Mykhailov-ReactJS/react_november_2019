import React from 'react';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import axios from 'axios';

const url = process.env.REACT_APP_URL;

function DeleteItem(props) {

    const {item, forceRender} = props;
    const {id} = item; 


    const deleteOnClick = (ev) => {
        ev.preventDefault();

        axios({
            method: 'DELETE',
            url: url+id,
        })
        .then(function (res) {
            console.log('DELETED '+res);
            forceRender();
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    return(
        <Fab 
            onClick={deleteOnClick} 
            size='small'
            color='secondary'>

            <DeleteIcon fontSize="small" />
        </Fab>
    )
}
export default DeleteItem;
