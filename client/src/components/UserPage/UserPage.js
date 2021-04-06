import React from "react"
import "./UserPage.css"
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Table, Tag, Space } from 'antd';

const UserPage = () =>{
    const { Column, ColumnGroup } = Table;


    return(
        <div className="userPage">
            <Avatar size={254} icon={<UserOutlined />} />
            <div className="userName">User name</div>
            <Table>
                <Column title="Surveys passed" dataIndex="age" key="age" />
                <Column title="Surveys created" dataIndex="address" key="address" />
            </Table>
        </div>
    )
}

export default UserPage