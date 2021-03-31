import React, { useEffect, useState, useContext } from "react"
import {useHttp} from "../hooks/http.hook"
import { useMessage } from "../hooks/message.hook"
import "./AuthPages.css"
import {AuthContext} from "../context/AuthContext";
import {Form, Input, Button, Checkbox} from "antd"
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import logo from "../img/logo.png"
import building from "../img/building.jpg";

export const AuthPages = ()  =>{
	const message = useMessage()
	const auth = useContext(AuthContext)
	const {loading, request, error, clearError} = useHttp()
	const [form, setForm] = useState({
		email: "", password: ""
	})

	useEffect(()=>{
		message(error)
		clearError()	
	}, [error, message, clearError])

	const changeHandler = event =>{
		setForm({...form, [event.target.name]: event.target.value })
	}

	const registerHandler = async () =>{
		try{
			const data = await request('/api/auth/register', 'POST', {...form})
			console.log("Data", data)
		}
		catch(e){
		}
	}

	const loginHandler = async () =>{
		try{
			const data = await request('/api/auth/login', 'POST', {...form})
			auth.login(data.token, data.userId)
		}
		catch(e){
		}
	}


	return(
		<div className="form-wrapper">
				<img src={logo} className="logo-image"/>
			<Form
				name="normal_login"
				className="login-form"
				initialValues={{
					remember: true,
				}}
			>
				<Form.Item
					name="username"
					rules={[
						{
							required: true,
							message: 'Please input your Username!',
						},
					]}
				>
					<Input id = "email" type="text" name="email" onChange={changeHandler} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
				</Form.Item>
				<Form.Item
					name="password"
					rules={[
						{
							required: true,
							message: 'Please input your Password!',
						},
					]}
				>
					<Input
						id = "password" type="password" name="password" onChange={changeHandler}  prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password"
					/>
				</Form.Item>
				<Form.Item>
					<Form.Item name="remember" valuePropName="checked" noStyle>
						<Checkbox>Remember me</Checkbox>
					</Form.Item>

					<a className="login-form-forgot" href="">
						Forgot password
					</a>
				</Form.Item>

				<Form.Item>
					<Button type="primary" htmlType="submit" className="login-form-button" value="Log in" onClick={loginHandler} disabled={loading}>
						Log in
					</Button>
					<Button type="primary" htmlType="submit" className="register-button" value="Register " onClick={registerHandler} disabled={loading}>
						Register
					</Button>
				</Form.Item>
			</Form>
		</div>
	)
}