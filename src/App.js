import { useState } from "react";
import TopBar from "./components/TopBar";
import Entries from "./components/Entries";
import HomePage from "./components/HomePage";
import { Route, Routes } from "react-router-dom";
import { Container } from "reactstrap";
import SUBMISSIONS from "./components/SUBMISSIONS";
import "./App.css";

export default function App() {
  const [content, setContent] = useState([]);

  function addEntry(entry) {
    console.log(entry)
    setContent(content.concat(entry))
  };

  return (
    <>
      <TopBar />
      <Container>
        <Routes>
          <Route path="/" element={<HomePage content={content} addEntry={addEntry} />} />
          {/* <Route path="/entries/:entriesId" element={<Entries content={content} />} /> */}
        </Routes>
      </Container>
    </>
  );
}