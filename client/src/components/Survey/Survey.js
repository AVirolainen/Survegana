import React, {useState} from "react"
import {useHttp} from "../../hooks/http.hook"
import * as SurveyEngine from "survey-react";

var defaultThemeColors = SurveyEngine
    .StylesManager
    .ThemeColors["default"];
defaultThemeColors["$main-color"] = "#7ff07f";
defaultThemeColors["$main-hover-color"] = "#6fe06f";
defaultThemeColors["$text-color"] = "#4a4a4a";
defaultThemeColors["$header-color"] = "#7ff07f";

defaultThemeColors["$header-background-color"] = "#4a4a4a";
defaultThemeColors["$body-container-background-color"] = "#f8f8f8";

SurveyEngine.StylesManager.applyTheme();




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
            pressHandler()
            
        });
    
    const pressHandler = async event =>{
        try{
           await request('/api/survey/', "POST", {info: surveyResult})
        }
        catch (e) {
            
        }
    }

    return(
        <SurveyEngine.Survey model={surveyModel} />
    )
}

export default Survey