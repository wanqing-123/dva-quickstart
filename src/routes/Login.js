import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import { redirectLoginPage } from '../utils/auth';

class Products extends React.Component {
    componentWillMount() {
        console.log("Hello");
        redirectLoginPage();
    }

    render() {
        return <div>
                <Link to="/products">Products</Link>
            </div>
    }
}

export default Products;