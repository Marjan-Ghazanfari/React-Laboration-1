import React from 'react'

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-light bg-secondary shadow">
            <div className="container">
                <span className="navbar-brand mb-0 fst-italic"><i className="fab fa-react me-1"></i>React Laboration 1</span>
                {
                    props.logIn ? <span className="h5 ms-auto me-2 mb-0 fst-italic">Hello Marjan!</span> : ''
                }
                <button className="btn btn-success" type="submit" onClick={ props.handleLogIn }>{props.logIn ? 'Log Out' : 'Please Log in'}</button>
            </div>
        </nav>
    )
}

export default Navbar
