import React, { useState } from 'react';
import "./Content.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const Content = () => {

  const { subTopicId } = useParams();
  const [subTopicContent, setSubTopicContent] = useState(null);
  const theObj = { __html: subTopicContent };

  const baseURL = "http://localhost:1001/tutorial-service/subtopics/" + subTopicId;
  async function getUserData() {
    try {
      const response = await axios.get(baseURL);
      setSubTopicContent(response.data.subTopicContent);
    }
    catch (error) {
      console.log(error);
    }
  }
  getUserData();

  return (
    <>
      <div className="display-content" dangerouslySetInnerHTML={theObj} />
    </>
  )
}
export default Content;