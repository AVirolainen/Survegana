import React from "react"
import "./SurveyLinks.css"
import {Link} from "react-router-dom";

const SurveyLinks =({surveys})=>{
    return(
        <div>
        {
            surveys.map((link, index)=>{
                let address = "/"+link._id
                return(
                    <div className="linkItem" key={link._id}>
                        <Link to={address}>{link.title}</Link>
                    </div>
                )
            })
        }


        </div>
    )
}

export default SurveyLinks