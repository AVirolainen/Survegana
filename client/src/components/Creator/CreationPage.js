import React, { Component } from "react";
import * as SurveyKo from "survey-knockout";
import * as SurveyJSCreator from "survey-creator";
import "survey-creator/survey-creator.css";

import "jquery-ui/themes/base/all.css";
import "nouislider/distribute/nouislider.css";
import "select2/dist/css/select2.css";


import "jquery-bar-rating/dist/themes/css-stars.css";
import "jquery-bar-rating/dist/themes/fontawesome-stars.css";

import $ from "jquery";
import "jquery-ui/ui/widgets/datepicker.js";
import "select2/dist/js/select2.js";
import "jquery-bar-rating";

//import "icheck/skins/square/blue.css";
import "pretty-checkbox/dist/pretty-checkbox.css";

import * as widgets from "surveyjs-widgets";

import CreateHandler from "./CreateHandler"

import {useHttp} from "../../hooks/http.hook"


SurveyJSCreator.StylesManager.applyTheme("default");

//widgets.icheck(SurveyKo, $);
widgets.prettycheckbox(SurveyKo);
widgets.select2(SurveyKo, $);
widgets.inputmask(SurveyKo);
widgets.jquerybarrating(SurveyKo, $);
widgets.jqueryuidatepicker(SurveyKo, $);
widgets.nouislider(SurveyKo);
widgets.select2tagbox(SurveyKo, $);
//widgets.signaturepad(SurveyKo);
widgets.sortablejs(SurveyKo);
widgets.ckeditor(SurveyKo);
widgets.autocomplete(SurveyKo, $);

function withMyHook(Component) {
    return function WrappedComponent(props) {
      const {loading, request} = useHttp();
      return <Component {...props} loading={loading} request={request}/>;
    }
  }


class CreationPage extends Component{
    surveyCreator;
    constructor(props) {
        super(props);
        this.state = {};  
        this.request = props.request
        this.loading = props.loading
    
        
    }

    componentDidMount() {
        let options = { showEmbededSurveyTab: true };
        this.surveyCreator = new SurveyJSCreator.SurveyCreator(
            null,
            options
        );
        this.surveyCreator.saveSurveyFunc = this.saveMySurvey;
        this.surveyCreator.tabs().push({
            name: "survey-templates",
            title: "My Custom Tab",
            template: "custom-tab-survey-templates",
            action: () => {
                this.surveyCreator.makeNewViewActive("survey-templates");
            },
            data: {},
        });
        this.surveyCreator.render("surveyCreatorContainer");
    }
    render() {

        return (<div>
            <script type="text/html" id="custom-tab-survey-templates">
                {`<div id="test">TEST</div>`}
            </script>
            <div id="surveyCreatorContainer" />

        </div>);
    }

    saveMySurvey = async event =>{
        try{
            console.log(JSON.parse(this.surveyCreator.text))
           await this.request('/api/create/create', "POST", {info: JSON.parse(this.surveyCreator.text)})
        }
        catch (e) {
            
        }
    }
}

export default withMyHook(CreationPage)