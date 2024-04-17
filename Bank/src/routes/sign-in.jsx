import Modale from "../components/modale";
import { useEffect } from "react";

export default function SignIn() {
    useEffect(() => {
        const emailInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');
        console.log(passwordInput);
        console.log(emailInput);
        
        // Event listener to remove error visual when clicking on password input
        const removeErrorVisual = () => {
            passwordInput.style.border = 'none';
        };
        passwordInput.addEventListener("click", removeErrorVisual);

         // Function to fetch user IDs from the server
         async function getIds(email, password) {
            const response = await fetch("http://localhost:3001/api/v1/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password })
            });
            if (!response.ok) {
                throw Error('Error in email or password');
            }
            const ids = await response.json();
            return ids;
        }
        
        // Function to handle login submission
        const login = async () => {
            const email = emailInput.value;
            const password = passwordInput.value;
            console.log(email);
            console.log(password);

            try {
                const id = await getIds(email, password);
                console.log(id);
                localStorage.setItem('loggedIn', 'true');
                localStorage.setItem('userId', id.userId);
                localStorage.setItem('token', id.token);
                window.location.href = 'index.html';
            } catch (error) {
                console.error('Error during login:', error.message);
                // Display error message visually where the user enters the password
                passwordInput.placeholder = 'Error in email or password';
                passwordInput.value = '';
                passwordInput.style.border = "1px solid red";
            }
        };

        // Event listener for login form submission
        const loginForm = document.getElementById('form');
        const handleFormSubmit = async (event) => {
            // Prevent page refresh
            event.preventDefault();
            console.log("Form submitted");
            login();
        };
        loginForm.addEventListener("submit", handleFormSubmit);

        // Cleanup function for removing event listeners
        return () => {
            passwordInput.removeEventListener("click", removeErrorVisual);
            loginForm.removeEventListener("submit", handleFormSubmit);
        };
    }, []);

    return (
        <Modale />
    );
}