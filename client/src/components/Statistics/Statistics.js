import React, {useState, useCallback, useEffect} from "react"
import ReactDOM from 'react-dom';
import "./Statistics.css"
import { TreeSelect } from 'antd';
import {useHttp} from "../../hooks/http.hook";

import * as SurveyAnalytics from "survey-analytics";
import * as SurveyEngine from "survey-react";
import "survey-analytics/survey.analytics.css"

import 'antd/dist/antd.css';
import { Button } from 'antd';
import StatisticContainer from "./StatisticContainer"

const Statistics = () =>{
    const { TreeNode } = TreeSelect;
    const [value, setValue] = useState(undefined);

    const {loading, request} = useHttp()
    const [surveys, setSurveys] = useState([])
    const [answers, setAnswers] = useState([])

    const [currentSurvey, setCurrentSurvey] = useState({})
    const [currentAnswers, setCurrentAnswers] = useState([])

    const onChange = (a) => {
        setValue(a);
    };

    const fetchSurveys = useCallback(async () => {
        try {
            const fetched = await request('/api/survey', 'GET', null, )
            setSurveys(fetched)
        } catch (e) {}
    }, [request])

    const fetchAnswers = useCallback(async () => {
        try {
            const fetched = await request('/api/answers', 'GET', null, )
            setAnswers(fetched)
        } catch (e) {}
    }, [request])

    useEffect(() => {
        fetchSurveys()
        fetchAnswers()
    }, [fetchSurveys])

    console.log(answers)

    const handleClick =()=>{
        let result = surveys.filter(item=> value == item.title)
        setCurrentSurvey(result[0])
        let resultAnswers = answers.filter(item=> item.surveyId == result[0]._id)
        setCurrentAnswers(resultAnswers)
    }

    let container 
    if(Object.keys(currentSurvey).length>0){
        container = <StatisticContainer survey={currentSurvey} answer={currentAnswers}/>
    }
    return(
        <div className="statisticBody">
            <div className="statisticHeader">Please, choose your survey</div>
            <TreeSelect
                showSearch
                style={{ width: '100%' }}
                value={value}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                placeholder="Please select"
                allowClear
                treeDefaultExpandAll
                onChange={onChange}
            >
                {
                    surveys.map(item=>{
                        return(
                        <TreeNode value={item.title} title={item.title}></TreeNode>)
                    })
                }
            </TreeSelect>
            <div className="buttonAnalyse">
                <Button onClick={handleClick}>Make analysis</Button>
            </div>
            {container}
        </div>

    )
}

export default Statistics