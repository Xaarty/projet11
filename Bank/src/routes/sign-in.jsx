import Modale from "../components/modale";
import { getIds } from "../lib/fetch";
import { redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { loginSuccess, loginFailure } from '../actions/log.actions';


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

// Pass the loginSuccess and loginFailure functions to the action function
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
            loginFailure({ message: "Invalid credentials" }); // Dispatch login failure action
        }
        
    } catch (error) {
        console.error('Error during login:', error.message);
        // Display error message visually where the user enters the password
        loginFailure("An error occurred during login");
    }

    
}

export default ConnectedSignIn; // Export the connected component

