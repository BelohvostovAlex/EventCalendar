import React from "react";

import { Form, Input, Button } from "antd";

import {useDispatch} from 'react-redux'
import { rules } from "../utils/rules";
import { AuthActionCreators } from "../store/reducers/auth/action-creators";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

const LoginForm: React.FC = () => {
    const {error, isLoading} = useTypedSelector(state => state.authReducer)
    const [username, setUserName] = React.useState('')
    const [password, setUserPassword] = React.useState('')
    const {login} = useActions()

    const submit = () => {
        login(username, password)
    }

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      autoComplete="off"
      onFinish={submit}
    >
        {error && <div style={{color: 'red'}}>{error}</div>}
      <Form.Item
        label="Username"
        name="username"
        rules={[rules.required("Please input your username!")]}
      >
        <Input value={username} onChange={e => setUserName(e.target.value)}/>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[rules.required("Please input your password!")]}
      >
        <Input.Password value={password} onChange={e => setUserPassword(e.target.value)}/>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
