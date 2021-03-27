import React from "react"
import "./SurveyLinks.css"
import {Card} from "react-router-dom"

const SurveyLinks =({surveys})=>{
    return(
        <div>
        {
            surveys.map((link, index)=>{
                return(
                    <div key={link._id}>
                        <div className="linkItem">{link.title}</div>
                    </div>
                )
            })
        }
        </div>
    )
}

export default SurveyLinks