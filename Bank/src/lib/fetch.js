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



export async function fetchUserProfile(token) {
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({}),
      });
      const data = await response.json();
      if (response.ok) {
        return data.body;
      } else {
        throw new Error(data.message || "Failed to fetch profile");
      }
    } catch (error) {
      throw new Error("Error fetching profile:", error);
    }
  }