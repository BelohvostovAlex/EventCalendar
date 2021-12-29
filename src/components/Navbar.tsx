import React from 'react'

import { useTypedSelector } from '../hooks/useTypedSelector';
import { useDispatch } from 'react-redux'

import { Layout, Menu } from 'antd';
import { useNavigate  } from 'react-router-dom'
import { RouteNames } from '../router';
import { AuthActionCreators } from '../store/reducers/auth/action-creators';
import { useActions } from '../hooks/useActions';


const Navbar: React.FC = () => {
    const navigate = useNavigate()
    const {logout} = useActions()
    const {isAuth, user} = useTypedSelector(state => state.authReducer)

    return (
        <Layout.Header>
            
            {isAuth ?
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} selectable={false} style={{justifyContent: 'flex-end'}}>
              <Menu.Item key={1}>{user.username}</Menu.Item>
              <Menu.Item key={2} onClick={logout} >Logout</Menu.Item>
            </Menu>
            :
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} selectable={false} style={{justifyContent: 'flex-end'}}>
            <Menu.Item key={3} onClick={() => navigate(RouteNames.LOGIN)}>Login</Menu.Item>
          </Menu>}

        </Layout.Header>
    )
}

export default Navbar
