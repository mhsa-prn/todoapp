import React , {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css'
import axios from "axios";
import {resetFirstInputPolyfill} from "web-vitals/dist/modules/lib/polyfills/firstInputPolyfill";

function FormAddTodo(props) {
    //set state
    const [text , setText] = useState('')
    const [key , setKey] = useState('')

    let formHandler = e => {
        e.preventDefault()
        props.add(text);

        //send data to database - ajax
        // 'todos.json' ro khodemoon ezafe kardim b onvane esme api
        //promise
        axios.post(`https://todoapp-2cb3e-default-rtdb.firebaseio.com/todos.json`, {text: text , done:false} )
            .then(response => console.log(response.data.name))
            .catch(err=>console.log(err))


        setText('')
    }

    //json handler
    let jsonHandler=data=>{
        return Object
            .entries(data)
            .map((value)=> console.log(...value))
    }

    //get data
    axios.get(`https://todoapp-2cb3e-default-rtdb.firebaseio.com/todos.json`)
        .then(response=>jsonHandler(response.data))
        .catch(err=>console.log(err))


    let inputHandler = e => setText(e.target.value)

    return (
        <form className="form-inline" onSubmit={formHandler}>
            <div className="form-group">
                <input type="text" className="form-control mx-sm-3" placeholder="i want to do ..."
                       value={text}
                       onChange={inputHandler}/>
                <button type="submit" className="btn btn-primary">add</button>
            </div>
        </form>
    )
}

export default FormAddTodo