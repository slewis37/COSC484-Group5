import axios from 'axios';

const url = 'http://localhost:5000/users'

export const fetchUsers = () => axios.get(url)
export const loginUser = (credentials) => axios.post(url+'/login',credentials)
export const createUser = (newUser) => axios.post(url+'/add', newUser)
export const updateUser = (email, user) => axios.post(url+'/update/email/'+email, user)
