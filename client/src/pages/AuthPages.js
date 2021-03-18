import React, { useEffect, useState, useContext } from "react"
import {useHttp} from "../hooks/http.hook"
import { useMessage } from "../hooks/message.hook"
import "./AuthPages.css"
import {AuthContext} from "../context/AuthContext";

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
		<div className="AuthPage">

			<div className="valign-wrapper">
				<div className="row">
				<div className="col s12 m12">
				<div className="card #ef6c00 orange darken-3 darken-5 ">
					<div className="card-content white-text">
						<span className="card-title center">Survegana</span>
							email:
							<input id = "email" type="text" name="email" onChange={changeHandler}/>
							password:
							<input id = "password" type="password" name="password" onChange={changeHandler}/>
					</div>
					<div className="card-action">
							<input className = "waves-effect waves-light btn #ff9100 orange accent-31" type="submit" value="Log in" onClick={loginHandler} disabled={loading} />
							<input className = "waves-effect waves-light btn #ff9100 orange accent-3" type="submit" value="Sign up" onClick={registerHandler} disabled={loading}/>
					</div>
				</div>
				</div>
				</div>
			</div>
		</div>
	)
}