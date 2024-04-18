export async function getIds(email, password) {
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