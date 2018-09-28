import React, { Component } from 'react';
import axios from 'axios';


class Test extends Component {
    async componentDidMount() {
        const user = {
            email: 'test@mail.com',
            password: 'helloworld'
        }

        const resp = await axios.post('/api/login', user);

        console.log('Login Response:', resp)


        // const resp = await axios.get('/api/test');
        // console.log('Test response:', resp);
        // const user = await axios.get('/api/user');
        // console.log('User data:', user);
    }
    render() {
        return <h1>API Testing Component</h1>;
    }
}

export default Test;

