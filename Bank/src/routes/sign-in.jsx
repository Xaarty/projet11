import Modale from "../components/modale";
import { getIds } from "../lib/fetch";
import { useActionData, redirect } from "react-router-dom";

export default function SignIn() {
  const actionData = useActionData();

  return (
    <Modale error={actionData?.error} />
  );
}


// Si il y a une erreur, récupérer cette erreur dans error puis la passer en prop

export async function action({ request }) {
    console.log(request)
    let id = null
    

    try {
        const formData = await request.formData();
        const data = Object.fromEntries(formData.entries())
        id = await getIds(data.username, data.password)
        console.log(id)
        if (id?.status === 200) {
            window.localStorage.setItem('token', id.body.token)
            return redirect ("/user");
            
           
        } else {
            return { error: "Invalid credentials" };
        }
        
    } catch (error) {
        console.error('Error during login:', error.message)
        return { error: "Invalid credentials" };
    }  
}


