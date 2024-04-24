import Modale from "../components/modale";
import { getIds } from "../lib/fetch";
import { redirect } from "react-router-dom";
import { loginSuccess, loginFailure } from '../actions/log.actions';

import { connect } from 'react-redux';


function SignIn() {
    return (
        <Modale />
    );
}

const mapDispatchToProps = {
    loginFailure,
    loginSuccess,
}


const ConnectedSignIn = connect(null, mapDispatchToProps)(SignIn);

export async function action({ request, loginFailure, loginSuccess }) {
    console.log(request);
    let id = null;
    

    try {
        const formData = await request.formData();
        const data = Object.fromEntries(formData.entries());
        id = await getIds(data.username, data.password);
        console.log(id);
        if (id?.status === 200) {
            
            return redirect ("/user");
        } else {
            loginFailure({ message: "Invalid credentials" }); 
        }
        
    } catch (error) {
        console.error('Error during login:', error.message);
        loginFailure("An error occurred during login");
    }

    
}

export default ConnectedSignIn; // Export the connected component

