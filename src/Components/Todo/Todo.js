import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css'
import EditTodo from "./EditTodo";

function Todo(props) {
    const {item} = props
    const [edit, setEdit] = useState(false)

    let editHandler=text =>{
        props.edit(item.key,text)
        setEdit(false)
    }

    return (
        <>
            {
                edit === false
                    ? (
                        <div className="col-6 mb-2">
                            <div
                                className="d-flex justify-content-between align-items-center border rounded p-3">
                                <div>
                                    {item.text}
                                </div>
                                <div>
                                    <button type="button"
                                            className={`btn btn-sm ml-1 ${item.done ? 'btn-warning' : 'btn-success'}`}
                                            onClick={() => props.done(item.key)}>
                                        {item.done ? 'undone' : 'done'}
                                    </button>
                                    <button type="button" className="btn btn-info btn-sm ml-1"
                                            onClick={()=>setEdit(true)}>edit</button>
                                    <button type="button" className="btn btn-danger btn-sm ml-1"
                                            onClick={() => props.delete(item.key)}>delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                    : <EditTodo text={item.text} edit={editHandler}/>
            }
        </>
    )
}

export default Todo