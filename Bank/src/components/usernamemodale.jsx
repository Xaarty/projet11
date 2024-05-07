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
                dispatch(closeModal())
            } else {
                console.error("Failed to update username:", data.message);
            }
        } catch (error) {
            console.error("Error updating username:", error);
        }
    };

    return (
        <div className="Edit_box">
            <div className="Edit_box_div">
                <h1>Edit user info</h1>
                <div className="Edit"> 
                    <div className="Edit_row">
                        <label className="Edit_row_title" htmlFor="username">User name:</label>
                        <input
                            className="Edit_row_box extra"
                            type="text"
                            id="username"
                            name="username"
                            value={newUsername}
                            onChange={(event) => setNewUsername(event.target.value)}
                            required
                        />
                    </div>
                    <div className="Edit_row">
                        <h2 className="Edit_row_title">First name:</h2>
                        <div className="Edit_row_box"><p>{profile?.firstName}</p></div>
                    </div>
                    <div className="Edit_row">
                        <h2 className="Edit_row_title">Last name:</h2>
                        <div className="Edit_row_box"><p>{profile?.lastName}</p></div>
                    </div>
                </div>
                <div className="Edit_button">
                    <button className="Edit_button_box" type="submit" onClick={handleSubmit}>Save</button>
                    <button className="Edit_button_box" onClick={() => dispatch(closeModal())}>Cancel</button>
                </div>
            </div>
           
        </div>
       
    );
}