import React, {useContext, useState, useCallback, useEffect} from "react"
import {AuthContext} from "../context/AuthContext";
import {useHttp} from "../hooks/http.hook";
import "./Card.css"
import * as Survey from "survey-react";

Survey.StylesManager.applyTheme("modern");

// var json = {
//
//     surveyId: '5af48e08-a0a5-44a5-83f4-1c90e8e98de1'
// };


export const Card = ()=>{
    const auth = useContext(AuthContext)
    // const survey = new Survey.Model(json);
    const {loading, request} = useHttp()

    const [surveys, setSurveys] = useState({})

    const logoutHandler = (event) =>{
        event.preventDefault()
        auth.logout()
    }

    const [links, setLinks] = useState([])
    const {token} = useContext(AuthContext)

    const fetchLinks = useCallback(async () => {
        try {
            const fetched = await request('/api/survey', 'GET', null, )
            console.log(fetched)
            setLinks(fetched)
        } catch (e) {}
    }, [token, request])

    useEffect(() => {
        fetchLinks()
    }, [fetchLinks])



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
                {/*<Survey.Survey model={survey}/>*/}
            </div>
        </div>
    )
}

export default Card

