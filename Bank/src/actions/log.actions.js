
export const loginSuccess = (userId) => ({
    type: 'LOGIN_SUCCESS',
    payload: userId
});

export const loginFailure = (error) => ({
    type: 'LOGIN_FAILURE',
    payload: error
});