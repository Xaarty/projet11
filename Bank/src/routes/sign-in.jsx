import Modale from "../components/modale";
import { getIds } from "../lib/fetch";
import { redirect } from "react-router-dom";
import { loginSuccess, loginFailure } from '../actions/log.actions';

import { useDispatch } from "react-redux";
import { connect } from 'react-redux';
import { authenticationReducer } from "../features/userSlice";

export default function SignIn() {
    return (
        <Modale />
    )
}


export async function action({ request, loginFailure, loginSuccess }) {
    console.log(request)
    let id = null
    

    try {
        const formData = await request.formData();
        const data = Object.fromEntries(formData.entries())
        id = await getIds(data.username, data.password)
        console.log(id)
        if (id?.status === 200) {
            window.localStorage.setItem('token', id.body.token)
            setTimeout(() => {}, 100)
            // return redirect ("/user");
            
           
        } else {
            loginFailure({ message: "Invalid credentials" });
        }
        
    } catch (error) {
        console.error('Error during login:', error.message)
    }  
    window.localStorage.setItem('token', id.body.token)
    return redirect ("/user") 
}



