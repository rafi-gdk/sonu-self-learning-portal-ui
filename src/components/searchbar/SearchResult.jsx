import "./Searchbar.css";
import { useNavigate } from "react-router-dom";

export const SearchResult = ({ result }) => {

  const navigate = useNavigate();
  const baseURL = "http://localhost:1001/tutorial-service/search/subtopics/" + result;

  const fetchData = () => {
    fetch(baseURL)
      .then((response) => response.json())
      .then((json) => {
        navigate('/subtopic/' + json.subTopicId + '/' + json.topicId);
      });
  };

  return (
    <>
      <div className="search-result" onClick={fetchData}>
        {result}
      </div>
    </>
  );
};
