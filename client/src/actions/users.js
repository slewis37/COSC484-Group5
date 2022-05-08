import * as api from '../api';

export const getUsers = () => async (dispatch) => {
    try {
        const { data } = await api.fetchUsers();
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch(e) {
        console.log(e.message);
    }

}

export const createUser = (user) => async (dispatch) => {
    try {
        const { data } = await api.createUser(user)
        dispatch({ type: 'CREATE', payload: data })
    } catch (e) {
        console.log(e.message);
    }
}

export const updateUser = (user) => async (dispatch) => {
    try {
        const { data } = await api.updateUser(user.email,user)
        dispatch({ type: 'UPDATE', payload: data })
    } catch (e) {
        console.log(e.message);
    }
}

export const loginUser = (user) => async (dispatch) => {
    try {
        const { data } = await api.loginUser(user.email,user)
        dispatch({ type: 'UPDATE', payload: data })
    } catch (e) {
        console.log(e.message);
    }
}