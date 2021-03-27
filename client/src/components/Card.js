import React, {useContext, useState, useCallback, useEffect} from "react"
import {AuthContext} from "../context/AuthContext";
import {useHttp} from "../hooks/http.hook";
import SurveyLinks from "./Survey/SurveyLinks";
import "./Card.css"
import building from "../img/building.jpg"


export const Card = ()=>{
    const auth = useContext(AuthContext)

    const {loading, request} = useHttp()

    const [surveys, setSurveys] = useState([])

    const logoutHandler = (event) =>{
        event.preventDefault()
        auth.logout()
    }

    const [links, setLinks] = useState([])
    const {token} = useContext(AuthContext)

    let surveyList
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
        <div className="Card">
            <nav>
                <div className="nav-wrapper #757575 grey darken-1 text-lighten-5">
                    <a href="#" className="brand-logo right">Survegana </a>
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li><a href="#">Особистий кабінет</a></li>
                        <li><a href="#">Створити опитування</a></li>
                        <li><a href="#">Підтримка</a></li>
                        <li><a href="#" onClick={logoutHandler}>Вийти</a></li>
                    </ul>
                </div>
            </nav>
            <div className="cardBody">
                <div>
                    <div className="header">Доступні опитування</div>
                    <SurveyLinks surveys={surveys} />
                </div>
                <img src={building} className="cardImage"/>
                </div>
        </div>
    )
}

export default Card

