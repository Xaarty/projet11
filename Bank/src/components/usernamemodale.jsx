import { useState } from "react";
import { useDispatch,  } from "react-redux";
import { closeModal, setProfile } from "../features/userSlice";



export default function UsernameModal({profile}) {
    
    const [newUsername, setNewUsername] = useState(profile.firstName);
    const dispatch = useDispatch()
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const formData = new FormData();
            formData.append("userName", newUsername);
    
            const token = window.localStorage.getItem('token'); 
            if (!token) {
                console.error("Token is missing");
                return;

            }
            console.log(formData.get("userName"))
            const response = await fetch("http://localhost:3001/api/v1/user/profile", {
                method: "PUT",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: 
                    JSON.stringify({
                        userName: formData.get("userName"),
                      }),
                
            });
            const data = await response.json();
            if (response.ok) {
                console.log("Username updated successfully:", data);
                dispatch(setProfile(data.body))
            } else {
                console.error("Failed to update username:", data.message);
            }
        } catch (error) {
            console.error("Error updating username:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">New Username:</label>
            <input
                type="text"
                id="username"
                name="username"
                value={newUsername}
                onChange={(event) => setNewUsername(event.target.value)}
                required
            />
            <button type="submit">Save</button>
        </form>
    );
}