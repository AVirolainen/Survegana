import React, {useState, useEffect} from "react"
import {useHttp} from "../../hooks/http.hook"
import * as SurveyEngine from "survey-react";
import 'survey-knockout/modern.css'

// SurveyEngine.defaultBootstrapMaterialCss.navigationButton = "btn btn-green";
// SurveyEngine.defaultBootstrapMaterialCss.rating.item = "btn btn-default my-rating";
SurveyEngine
    .StylesManager
    .applyTheme("modern");


const Survey = ({survey})=>{
    const surveyModel = new SurveyEngine.Model(survey);
    const [surveyResult, setSurveyResult] = useState({})

    const {loading, request} = useHttp()

    surveyModel
        .onComplete
        .add(function (result) {
            let temp = JSON.parse(JSON.stringify(result.data))
            temp["id"] = survey._id
            setSurveyResult(temp)
          
            console.log(temp)
            
        });
    
    useEffect(() => {
        const pressHandler = async event =>{
            try{
               await request('/api/survey/test', "POST", {info: surveyResult})
            }
            catch (e) {
                
            }
        }
        pressHandler()
        
    }, [surveyResult]);

    return(
        <SurveyEngine.Survey model={surveyModel} />
    )
}

export default Survey