import Modale from "../components/modale";
import { getIds } from "../lib/fetch";
import { redirect } from "react-router-dom";


// FormData

export async function action({request}) {
    console.log(request)
    let id = null;
    const formData = await request.formData();
    console.log(FormData)

    const data = Object.fromEntries(formData.entries());
    try {
        id = await getIds (data.username, data.password);
        console.log(id)
        
    } catch (error) {
        console.error('Error during login:', error.message);
        // Display error message visually where the user enters the password
      
    }

    if (id?.status === 200) {
        return redirect ('/user')
    }
    return null
  }

export default function SignIn() {

    return (
        <Modale />
    );
}

