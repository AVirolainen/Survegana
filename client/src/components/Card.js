import React, {useContext, useState, useCallback, useEffect} from "react"
import {AuthContext} from "../context/AuthContext";
import {useHttp} from "../hooks/http.hook";
import "./Card.css"
import SurveyLink from "./Survey/SurveyLink";

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

            surveyList = surveys.map(item=>{
                    <SurveyLink obj={item} />
                })
        } catch (e) {}
    }, [token, request])

    useEffect(() => {
        fetchSurveys()
    }, [fetchSurveys])

    return(
        <div className="Card">
            <nav>
                <div className="nav-wrapper #fbe9e7 deep-orange text-lighten-5">
                    <a href="#" className="brand-logo right">Survegana </a>
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li><a href="#">Особистий кабінет</a></li>
                        <li><a href="#">Створити опитування</a></li>
                        <li><a href="#">Підтримка</a></li>
                        <li><a href="#" onClick={logoutHandler}>Вийти</a></li>
                    </ul>
                </div>
            </nav>
            <div className="header">Доступні опитування</div>
            <div>
                <button onClick={() => console.log(surveys)}>nbr</button>
            </div>
            {surveyList}
        </div>
    )
}

export default Card

