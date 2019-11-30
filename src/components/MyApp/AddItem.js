import React, {useRef} from 'react';
import axios from 'axios';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const url = process.env.REACT_APP_URL;

function AddItem(props) {
  const inputRef = useRef(null);
  const {forceRender} = props;

  const saveIt = () =>{
    const obj ={
      body : inputRef.current.value,
      active : true
    }

    if(obj) {
      axios({
        method: 'POST',
        url: url,
        data: obj
      })
      .then(function (res) {
        console.log('ADDED '+res);
        inputRef.current.value = '';
        forceRender();
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }

  const formSubmit = (ev) => {
    ev.preventDefault();
    saveIt();        
  };

    return(
      <div>
        <form onSubmit={formSubmit} >
          <input type='text' ref={inputRef} />
          <Fab size='small' type='submit' color='secondary'>
            <AddIcon />
          </Fab>
        </form>
      </div>
    )
}

export default AddItem;