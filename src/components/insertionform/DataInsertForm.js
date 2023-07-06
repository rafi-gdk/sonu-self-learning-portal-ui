import React, { useState } from 'react';
import "./DataInsertForm.css";

const DataInsertForm = () => {

    const [topic, setTopic] = useState('');
    const [subTopic, setSubTopic] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState('');
    const [response, setResponse] = useState('');
    var textArea = content;

    const handleTopicChange = (e) => {
        setTopic(e.target.value);
    }

    const handleSubTopicChange = (e) => {
        setSubTopic(e.target.value);
    }

    const handleContentChange = (e) => {
        setContent(e.target.value);
    }

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    }

    const addPrefix = () => {

        try {
            var i = 0;
            var textArray = textArea.split("\n");
            var prefix = "";
            var suffix = "<br/>";
            if (textArray === null) {
                textArea += prefix + suffix;
            } else {
                for (i = 0; i < textArray.length; i++) {
                    textArray[i] = prefix + textArray[i] + suffix;
                }
                textArea = textArray.join("\n");
            }
            textArea = suffix + textArea;
        } catch (err) { }
    }

    const HandleSubmit = (e) => {

        addPrefix();

        const formData = new FormData();
        formData.append('topicName', topic);
        formData.append('subTopicName', subTopic);
        formData.append('content', textArea);
        formData.append('image', image);

        const requestOptions = {
            method: 'POST',
            // headers: { 'content-type': 'multipart/form-data' },
            body: formData
        };

        fetch('http://localhost:1001/tutorial-service/add-topic-ui', requestOptions)
            .then((res) => {
                setResponse(res)
            })

        if (response != null) {
            alert("Data Insertion Success!");
        }

        e.preventDefault();
    };

    return (
        <div className="insert-form">
            <form onSubmit={(e) => { HandleSubmit(e) }}>
                <label > Topic : </label><br />
                <input type="text" id="topic" value={topic} required onChange={(e) => { handleTopicChange(e) }} /><br />
                <label > Sub-Topic : </label><br />
                <input type="text" id="subTopic" value={subTopic} required onChange={(e) => { handleSubTopicChange(e) }} /><br />
                <label > Image : </label><br />
                <input type="file" id="file" required onChange={(e) => { handleImageChange(e) }} /><br />
                <label > Content : </label><br />
                <textarea id="content" name="content" placeholder="Write something.." value={content} required onChange={(e) => { handleContentChange(e) }} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default DataInsertForm;