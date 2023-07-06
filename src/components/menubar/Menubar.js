import React, { useState, useEffect } from 'react';
import "./Menubar.css"
import { MenubarDiv, MenubarLink, MenuDiv } from './MenubarStyles';

const Menubar = () => {

    //Set Data in Constants
    const [topics, setTopics] = useState([]);

    //Async Call
    useEffect(() => {
        const getTopics = async () => {
            try {
                const reqData = await fetch('http://localhost:1001/tutorial-service/topics');
                const resData = await reqData.json();
                setTopics(resData);
            }
            catch (error) {
                console.log(error);
            }
        }
        getTopics();
    }, []);

    return (
        <>
            <MenubarDiv>
                <MenuDiv>
                    <ul className="menubarstyle">
                        <li>
                            <MenubarLink to={`/`}>
                                Home
                            </MenubarLink>
                        </li>
                    </ul>
                    <ul className="menubarstyle">
                        {
                            topics.map((topic, index) => (
                                <li>
                                    <MenubarLink to={`/topic/${topic.topicId}`}>
                                        {topic.topicName}
                                    </MenubarLink>
                                </li>
                            ))}
                    </ul>
                    <ul className="menubarstyle">
                        <li>
                            <MenubarLink to={`/insert`}>
                                Insert-Data
                            </MenubarLink>
                        </li>
                    </ul>
                </MenuDiv>
            </MenubarDiv>
        </>
    );
}
export default Menubar;