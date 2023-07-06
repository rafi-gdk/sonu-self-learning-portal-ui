import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menubar from "./components/menubar/Menubar"
import Sidebar from "./components/sidebar/Sidebar"
import Searchbar from "./components/searchbar/Searchbar.js"
import Content from "./components/pages/Content.js"
import SidebarIndication from "./components/sidebar/SidebarIndication"
import DataInsertForm from "./components/insertionform/DataInsertForm"

function App() {

  return (
    <>
      <Router >
        <Menubar />
        <Routes>
          <Route path="/" element={<Searchbar />} />
          <Route path="/insert" element={<><DataInsertForm /></>} />
          <Route path="/topic/:topicId" element={<><Sidebar /><SidebarIndication /></>} />
          <Route path="/subtopic/:subTopicId/:topicId" element={<><Sidebar /><Content /></>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;