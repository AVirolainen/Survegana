import React, {useContext, useState, useCallback, useEffect} from "react"
import {AuthContext} from "../context/AuthContext";
import {useHttp} from "../hooks/http.hook";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import SurveyLinks from "./Survey/SurveyLinks";
import "./Card.css"
import building from "../img/building.jpg"
import Survey from "./Survey/Survey";


export const Card = ()=>{
    const auth = useContext(AuthContext)

    const {loading, request} = useHttp()

    const [surveys, setSurveys] = useState([])

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

    return(
        <Router>
            <div className="Card">
                <nav>
                    <div className="">
                        <a href="#">Survegana </a>
                        <ul>
                            <li><a href="#">Особистий кабінет</a></li>
                            <li><a href="#">Створити опитування</a></li>
                            <li><a href="#">Підтримка</a></li>
                            <li><a href="#" onClick={logoutHandler}>Вийти</a></li>
                        </ul>
                    </div>
                </nav>
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
            </div>
        </Router>
    )
}

export default Card

