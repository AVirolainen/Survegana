import React from "react"
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

    surveyModel
        .onComplete
        .add(function (result) {
            console.log(JSON.stringify(result.data, null, 3))
        });

    return(
        <SurveyEngine.Survey model={surveyModel} />
    )
}

export default Survey