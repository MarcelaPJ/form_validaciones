import { useState } from "react";
import UserData from "./UserData";


const UserForm = () => {
    const [ state, setState ] = useState({
        firstName: '',
        lastName: '',
        email: '',
        pass: '',
        confirmPass: '',
    })

    const changeUser = (e) => {
        setState({
            ...state, 
            [e.name] : e.value
        })
    }

    const addUser = (e) => {
        e.preventDefault();
            
        setState("");
    }

    return (
        <div>
            <form className="formulario" onSubmit={addUser}>
                <div className="data">
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" name="firstName" value={state.firstName} onChange={ (e) => changeUser(e.target) }/>
                    { state.firstName.length < 2 && state.firstName.length > 0 ? 
                    <p className="errorMsg">First Name must be at least 2 characters</p> 
                    : ""}
                </div>
                <div className="data">
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" name="lastName" value={state.lastName} onChange= { (e) => changeUser(e.target) } />
                    { state.lastName.length < 2 && state.lastName.length > 0 ?
                    <p className="errorMsg">Last Name must be at least 2 characters</p>
                    : ""}
                </div>
                <div className="data">
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" value={state.email} onChange={(e) => changeUser(e.target)}/>
                    { state.email.length < 5 && state.email.length > 0 ?
                    <p className="errorMsg">Email must be at least 5 characters</p>
                    : ""}
                </div>
                <div className="data">
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="pass" value={state.pass} onChange={(e) => changeUser(e.target)}/>
                    { state.pass.length < 8 && state.pass.length > 0 ?
                    <p className="errorMsg">Password must be at least 8 characters</p>
                    : ""}
                </div>
                <div className="data">
                    <label htmlFor="confirmPassword">Confirm Password: </label>
                    <input type="password" name="confirmPass" value={state.confirmPass} onChange={(e) => changeUser(e.target)}/>
                    { state.confirmPass.length < 8 && state.confirmPass.length > 0 ?
                    <p className="errorMsg">Password must be at least 8 characters</p>
                    : ""}
                    { state.pass !== state.confirmPass && state.confirmPass.length > 0 ?
                    <p className="errorMsg">Passwords must match</p>
                    : ""}
                </div>
            </form>
            <hr/>
            <div>
                <UserData datos={state}/>
            </div>
        </div>
    )
}

export default UserForm;