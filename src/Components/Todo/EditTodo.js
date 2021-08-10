import React, {useState} from "react";

function EditTodo(props) {
    const [text, setText] = useState(props.text)

    let inputHandler = e => setText(e.target.value)

    return (
        <div className="col-6 mb-2">
            <div className="d-flex justify-content-between align-items-center border rounded p-3">
                <div>
                    <input value={text}
                           onChange={inputHandler}/>
                </div>
                <div>
                    <button type="button" className="btn btn-danger btn-sm ml-1" onClick={()=>props.edit(text)}>edit</button>
                </div>
            </div>
        </div>
    )
}

export default EditTodo