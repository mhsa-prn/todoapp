import React from "react";

function Navbar(props){

    return(
        <nav className="col-6 mb-3">
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <a className={`nav-item nav-link font-weight-bold ${props.statusState.statusDone ? '' : 'active'}`}
                   onClick={() => props.statusState.setStatusDone(false)}
                   d="nav-home-tab">undone <span className="badge badge-secondary">
                                            {props.todos.filter(item => item.done === false).length}
                                        </span></a>
                <a className={`nav-item nav-link font-weight-bold ${props.statusState.statusDone ? 'active' : ''}`}
                   onClick={() => props.statusState.setStatusDone(true)}
                   id="nav-profile-tab">done <span className="badge badge-success">
                                            {props.todos.filter(item => item.done === true).length}
                                        </span></a>
            </div>
        </nav>
    )
}

export default Navbar