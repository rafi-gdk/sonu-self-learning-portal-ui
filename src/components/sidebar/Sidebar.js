import React, { useState, useEffect } from 'react';
import "./Sidebar.css";
import { SidebarDiv, SidebarWrap, SidebarLink } from './SidebarStyles';
import { useParams } from "react-router-dom";

const Sidebar = () => {

    const { topicId } = useParams();
    const [subTopics, setSubTopics] = useState([]);
    useEffect(() => {
        const getSubTopics = async () => {
            const baseURL = "http://localhost:1001/tutorial-service/topics/" + topicId;
            const reqData = await fetch(baseURL);
            const resData = await reqData.json();
            setSubTopics(resData);
        }
        getSubTopics();
    }, [topicId]);

    return (
        <>
            <SidebarDiv>
                <SidebarWrap>
                    <ul className='ulstyle'>
                        {
                            subTopics.map((subTopics, index) => (
                                <li>
                                    <SidebarLink to={`/subtopic/${subTopics.subTopicId}/${topicId}`}>
                                        {subTopics.subTopicName}
                                    </SidebarLink>
                                </li>
                            ))}
                    </ul>
                </SidebarWrap>
            </SidebarDiv>
        </>
    );
}

export default Sidebar;