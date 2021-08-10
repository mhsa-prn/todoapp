import React, {useState} from "react";
import Todo from "./Todo";
import Navbar from "../Layouts/Navbar";

function TodoList(props) {

    const [statusDone, setStatusDone] = useState(false)

    let todos = props.todos
    let filterTodos = todos.filter(item => item.done === statusDone)
    // console.log(filterTodos)

    return (
        <>
            <Navbar todos={props.todos}
                    statusState={{statusDone, setStatusDone}}/>
            {
                todos.length === 0
                    ? <p>There is no todos</p>
                    : filterTodos.map(item => <Todo item={item}
                                                    delete={props.delete}
                                                    done={props.done}
                                                    edit={props.edit}/>)
            }
        </>
    )
}

export default TodoList