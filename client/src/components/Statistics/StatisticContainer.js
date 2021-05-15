import React, { Component } from "react";
import $ from "jquery";

import * as SurveyAnalytics from "survey-analytics";
import "survey-analytics/survey.analytics.css";

import * as SurveyAnalyticsTabulator from "survey-analytics/survey.analytics.tabulator";
import "tabulator-tables/dist/css/tabulator.css";
import "survey-analytics/survey.analytics.tabulator.css";

import * as Survey from "survey-react";




class StatisticContainer extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        console.log(this.props.survey)
        console.log(this.props.answer)

        this.temp = this.props.answer.map(item=>{return(item.answers)})
        console.log(this.temp)
   
        var survey = new Survey.Model(this.props.survey);
        var allQuestions = survey.getAllQuestions();

        var visPanel = new SurveyAnalytics.VisualizationPanel(
            allQuestions,
            this.temp,
            {labelTruncateLength: 27, survey: survey}
        );
        visPanel.showHeader = true;
        visPanel.render(document.getElementById("surveyResult"));
    }

    render() {
        return (
            <div id="surveyResult"></div>
        );
    }
    }

export default StatisticContainer;
