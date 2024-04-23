export async function fetchAuthStatus() {
    try {
        // Make a request to your backend or wherever your authentication data resides
        const response = await fetch('/api/auth/status');
        if (!response.ok) {
            throw new Error('Failed to fetch authentication status');
        }
        // Parse the response JSON
        const data = await response.json();
        // Return whether the user is authenticated or not
        return data.isAuthenticated;
    } catch (error) {
        console.error('Error fetching authentication status:', error.message);
        // Return false if an error occurs
        return false;
    }
}