import React, {useContext, useState, useCallback, useEffect} from "react"
import {AuthContext} from "../context/AuthContext";
import {useHttp} from "../hooks/http.hook";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import SurveyLinks from "./Survey/SurveyLinks";
import "./Main.css"
import building from "../img/building.jpg"
import Survey from "./Survey/Survey";
import { Layout, Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';


export const Main = ()=>{
    const { Header, Sider, Content } = Layout;
    const auth = useContext(AuthContext)
    const {loading, request} = useHttp()
    const [surveys, setSurveys] = useState([])
    const [state, setState] = useState({collapsed: false})


    const logoutHandler = (event) =>{
        event.preventDefault()
        auth.logout()
    }

    const {token} = useContext(AuthContext)


    const fetchSurveys = useCallback(async () => {
        try {
            const fetched = await request('/api/survey', 'GET', null, )
            setSurveys(fetched)
        } catch (e) {}
    }, [token, request])

    useEffect(() => {
        fetchSurveys()
    }, [fetchSurveys])

    const toggle = ()=>{
        setState({collapsed: !state.collapsed})
    }

    return(
        <Router>
            <Layout>
                <Sider trigger={null} collapsible collapsed={state.collapsed}>
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" icon={<UserOutlined />}>
                            Особистий кабінет
                        </Menu.Item>
                        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                            Створити опитування
                        </Menu.Item>
                        <Menu.Item key="3" icon={<UploadOutlined />}>
                            Підтримка
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        {React.createElement(state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: toggle,
                        })}
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        <Switch>
                            <Route exact path="/main">
                                <div className="cardBody">
                                    <div>
                                        <div className="header">Доступні опитування</div>
                                        <SurveyLinks surveys={surveys} />
                                    </div>
                                    <img src={building} className="cardImage"/>
                                </div>
                            </Route>
                            {
                                surveys.map((link, index)=>{
                                    let address = "/"+link._id
                                    return(
                                        <Route path={address}>
                                            <Survey survey={link}/>
                                        </Route>
                                    )
                                })
                            }
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        </Router>
    )
}

export default Main
