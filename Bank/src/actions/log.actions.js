
export const loginSuccess = (userId) => ({
    type: 'LOGIN_SUCCESS',
    payload: userId
});

export const loginFailure = (error) => ({
    type: 'LOGIN_FAILURE',
    payload: error
});

export const logout = () => ({
    type: 'LOGOUT'
});

export const setToken = (token) => ({
    type: 'SET_TOKEN',
    payload: token,
  });