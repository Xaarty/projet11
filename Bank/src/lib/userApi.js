export async function updateUserProfile(token, newData) {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "PUT",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json", // Specify content type as JSON
        },
        body: JSON.stringify(newData), // Stringify the JSON data
    });

    if (!response.ok) {
        throw new Error("Failed to update user profile");
    }

    return await response.json();
}
