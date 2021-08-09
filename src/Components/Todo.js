import React from "react";
import 'bootstrap/dist/css/bootstrap.css'

function Todo(props){
    return(
        <div className="col-6 mb-2">
            <div
                className="d-flex justify-content-between align-items-center border rounded p-3">
                <div>
                    {props.item.text}
                </div>
                <div>
                    <button type="button" className="btn btn-success btn-sm ml-1">done</button>
                    <button type="button" className="btn btn-info btn-sm ml-1">edit</button>
                    <button type="button" className="btn btn-danger btn-sm ml-1" onClick={() => props.delete(props.item.key)}>delete</button>
                </div>
            </div>
        </div>
    )
}
export default Todo