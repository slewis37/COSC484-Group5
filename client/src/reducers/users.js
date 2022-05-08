export default (users = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'LOGIN':
            return action.payload;
        case 'CREATE':
            return users;
        case 'UPDATE':
            return users;
        default:
            return users;
    }
}