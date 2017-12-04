import React from 'react';

import { withRouter } from 'react-router-dom';
import { Form, Icon, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import { redirectLoginPage } from '../utils/auth';

class Products extends React.Component {
    componentWillMount() {
        console.log("Hello");
        redirectLoginPage();
    }

    render() {
        return <h2>Title</h2>
    }
}
export default Products;