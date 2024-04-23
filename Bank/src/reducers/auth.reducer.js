
const initialState = {
    isLoggedIn: false,
    error: null,
    // Other authentication-related state
};

const authenticationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isLoggedIn: true,
                // Other authentication-related state updates
                error: null, // Clear any previous errors on successful login
            };
        case 'LOGIN_FAILURE':
            return {
                ...state,
                isLoggedIn: false,
                error: action.payload, // Set the error message in case of login failure
            };
        case 'LOGOUT':
            return {
                ...state,
                isLoggedIn: false,
                // Reset other authentication-related state
                error: null, // Clear any previous errors on logout
            };
        default:
            return state;
    }
};

export default authenticationReducer;