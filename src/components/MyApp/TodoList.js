import React, {useState, useEffect} from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';
import DeleteItem from './DeleteItem';
import AddItem from './AddItem';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const url = process.env.REACT_APP_URL;

function TodoList(props) {
    console.log("TodoList loaded! filter "+props.filter);

    const [hook, setHook] = useState(false);
    const [filter, setFilter] = useState(props.filter);

    const forceRender = () => {
        setHook(!hook);
    }

    const [list, setList] = useState([]);
    const [isLoading, changeIsloading] = useState(true);

    const sort = ( arr ) => {
        return arr.filter( function(item) {
            if(filter==='ALL')
                return item;
            if(filter==='ACTIVE')
                return item.active;
            if(filter==='COMPLETED')
                return !item.active;
        });
    }
    
    useEffect(() => {
        axios.get(url).then(response => response.data)
            .then((data) => {
                setList(sort(data));
                changeIsloading(false);
                console.log("request in TodoList: "+data);
            })
    },[hook,filter]
    );

    function showOnlyActive() {
        setFilter('ACTIVE');
    }

    function showOnlyDone() {
        setFilter('COMPLETED');
    }

    function showAll() {
        setFilter('ALL');
    }
    
    return(

    <div>
        {isLoading?"Loading...":""}

        Show 
        <Button color='secondary' onClick={showAll}>
            All
        </Button>
        <Button color='secondary' onClick={showOnlyActive}>
            Active
        </Button>
        <Button color='secondary' onClick={showOnlyDone}>
            Completed
        </Button>

        <AddItem forceRender={forceRender} />
        <br/>
        <Box boxShadow={3}> 
            <table>
            <tbody>
                
            {list.map((item)=> ( 

                 <tr key={item.id}>
                    <td><TodoItem  item={item} forceRender={forceRender} /></td>
                    <td><DeleteItem item={item} forceRender={forceRender} /></td>
                 </tr>

            ))
            }
            </tbody>
            </table>
        </Box>
    </div>

    )
}
export default TodoList;

TodoList.defaultProps = {
    filter: 'ALL',
}