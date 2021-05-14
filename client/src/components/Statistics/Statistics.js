import React, {useState, useCallback, useEffect} from "react"
import "./Statistics.css"
import { TreeSelect } from 'antd';
import {useHttp} from "../../hooks/http.hook";

const Statistics = () =>{
    const { TreeNode } = TreeSelect;
    const [value, setValue] = useState(undefined);

    const {loading, request} = useHttp()
    const [surveys, setSurveys] = useState([])

    const onChange = () => {
        setValue(value);
    };

    const fetchSurveys = useCallback(async () => {
        try {
            const fetched = await request('/api/survey', 'GET', null, )
            setSurveys(fetched)
        } catch (e) {}
    }, [request])

    useEffect(() => {
        fetchSurveys()
    }, [fetchSurveys])

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
        </div>

    )
}

export default Statistics