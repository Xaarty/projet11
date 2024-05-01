import { useState } from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../features/userSlice";

// export default function UsernameModale() {
//     const dispatch = useDispatch();
//     const [newUsername, setNewUsername] = useState(""); // Define newUsername state

//     const handleCloseModal = () => {
//         dispatch(closeModal());
//     };

//     return (
//         <UsernameModaleForm
//             newUsername={newUsername}
//             setNewUsername={setNewUsername}
//             handleCloseModal={handleCloseModal}
//         />
//     );
// }

// function UsernameModaleForm({ newUsername, setNewUsername, handleCloseModal }) {
//     return (
//         <section className="modale_user">
//             <button className="modale_user_button" onClick={handleCloseModal}></button>
//             <p>Set your new username</p>
//             <UsernameForm
//                 newUsername={newUsername}
//                 setNewUsername={setNewUsername}
//                 handleCloseModal={handleCloseModal}
//             />
//         </section>
//     );
// }

// function UsernameForm({ newUsername, setNewUsername, handleCloseModal }) {;
//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         try {
//             const formData = new FormData();
//             formData.append("userName", newUsername);

//             const token = window.localStorage.getItem('token'); // Retrieve the token
//             if (!token) {
//                 console.error("Token is missing"); // Handle missing token
//                 return;
//             }

//             const response = await fetch("http://localhost:3001/api/v1/user/profile", {
//                 method: "PUT",
//                 headers: {
//                     "Authorization": `Bearer ${token}`, // Add the token to the Authorization header
//                 },
//                 body: formData,
//             });
//             const data = await response.json();
//             if (response.ok) {
//                 // Handle successful update
//                 console.log("Username updated successfully:", data);
//                 handleCloseModal(); // Close the modal after successful update
//             } else {
//                 console.error("Failed to update username:", data.message);
//             }
//         } catch (error) {
//             console.error("Error updating username:", error);
//         }
//     };

//     const handleChange = (event) => {
//         setNewUsername(event.target.value);
//     };


//     return (
//         <form id="form" onSubmit={handleSubmit}>
//             <label htmlFor="username">New Username:</label>
//             <input
//                 type="text"
//                 id="username"
//                 name="username"
//                 value={newUsername}
//                 onChange={handleChange}
//                 required
//             />
//             <button type="submit">Save</button>
//         </form>
//     );
// }

export default function UsernameModal() {
    const [newUsername, setNewUsername] = useState("");

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
    
            const response = await fetch("http://localhost:3001/api/v1/user/profile", {
                method: "PUT",
                headers: {
                    "Authorization": `Bearer ${token}`,
                },
                body: formData,
            });
            const data = await response.json();
            if (response.ok) {
                console.log("Username updated successfully:", data);
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