import React from 'react'

import LoginForm from '../components/LoginForm'

import {Layout, Row} from 'antd'

const Login:React.FC = () => {
    return (
        <Layout>
            <Row className='loginH100' justify='center' align='middle'>
                <LoginForm />
            </Row>
        </Layout>
    )
}

export default Login
