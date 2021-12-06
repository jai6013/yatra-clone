import axios from 'axios';

function fetchUser({email, password}) {
    if (!email || !password) {
        console.log("No value is entered");
        return;
    }

    const config = {
        method: 'get',
        url: "https://yaaatra-backend.herokuapp.com/users"
    };

    return axios(config);
}

export { fetchUser };