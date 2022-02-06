
import "./todo.css";
import { useState } from 'react';

const Todo=()=>{

    const[text, setText]=useState("");
    const [list,setList]=useState("");
    
    const handleAdd=()=>{
        let allTodos=[...list];
        allTodos.push(text);
        setList(allTodos);
    };

    const handelText=(e)=>{
        setText(e.target.value);
    };

    return (
        <div classNam="todo-page">
            <h4>My Shopping List</h4>

            <input onChange={handleText} type="text" />
            <button onClick={handleAdd} className="btn btn-sm btn-primary">Add</button>

            <div className="todo-list">
            {list.map((todo) => (
            <h6 key={todo}>{todo}</h6>
            ))}
            </div>
        </div>
    );
};

export default Todo;

/* create a list of state variable ([])
on handleAdd, you poush the text into the variable
on on "todo-list" map the list into h6
*/

