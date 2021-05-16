import React from "react"
import {Switch, Route, Redirect} from "react-router-dom"
import {MainPage} from "./pages/MainPage"
import {AuthPages} from "./pages/AuthPages"

/** Route that forwards user if authorized
 * @function
 * @param {bool} isAuthorized - Flag, if the user authorized
*/
export const useRoutes = (isAuthorized) =>{
	if (isAuthorized){
		return(
			<Switch>
				<Route path="/main" exact>
					<MainPage />
				</Route>
				<Redirect to="/main" />
			</Switch>
		)
	}
	
	return(
			<Switch>
				<Route path="/" exact>
					<AuthPages />
				</Route>	
				<Redirect to="/" />
			</Switch>
	)
}