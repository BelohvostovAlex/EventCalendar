import React from "react";
import { Layout } from "antd";

import "./App.css";

import Navbar from "./components/Navbar";
import AppRouter from "./components/AppRouter";
import { useActions } from "./hooks/useActions";
import { IUser } from "./models/IUser";
import { useTypedSelector } from "./hooks/useTypedSelector";

const App: React.FC = () => {
  const state = useTypedSelector(state => state)
  const {setUser, setIsAuth} = useActions()
  React.useEffect(() => {
    if(localStorage.getItem('auth')) {
      setUser({username: localStorage.getItem('username' || '')} as IUser)
      setIsAuth(true)
    }
  }, [])

  return (
    <Layout>
      <Navbar />
      <Layout.Content>
        <AppRouter />
      </Layout.Content>
    </Layout>
  );
};

export default App;
