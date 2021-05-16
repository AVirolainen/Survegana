import React from "react"
import "./SurveyLinks.css"
import {Link} from "react-router-dom";
import { Card } from 'antd';
import surveyImage from "../../img/surveyImage.jpeg"

/** Function that generate survey link
 * @function
 * @param {object} surveys - survey in the format of json
*/
const SurveyLinks =({surveys})=>{
    return(
        <div>
            {
                surveys.map((link, index)=>{
                    let address = "/"+link._id
                    return(
                        <Card title={"Тест: " + (index+1)} style={{
                                                                    width: 800,
                                                                    textAlign: "center" }}>
                            <div className="linkItem" key={link._id}>
                                    <Link to={address}>{link.title}</Link>
                            </div>

                            <img src={surveyImage} className="surveyImage" />
                            <div className="surveyText">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor volutpat purus ac ultrices. Morbi ultricies, lorem sodales pulvinar lacinia,
                                massa risus aliquam ex, vel scelerisque nulla ipsum eget libero.
                            </div>

                        </Card>
                    )
                })
            }


        </div>
    )
}

export default SurveyLinks