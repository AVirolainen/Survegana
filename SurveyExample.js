import React from "react"
import "./SurveyLinks.css"
import {Link} from "react-router-dom";
import { Card } from 'antd';

const SurveyLinks =({surveys})=>{
    return(
        <div>
            {
                surveys.map((link, index)=>{
                    let address = "/"+link._id
                    return(
                        <Card title={"Тест: " + link._id} style={{ width: 400 }}>
                            <div className="linkItem" key={link._id}>
                                <Link to={address}>{link.title}</Link>
                            </div>
                        </Card>
                    )
                })
            }


        </div>
    )
}

export default SurveyLinks