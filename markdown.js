import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./style.css";

const Markdown = () => {
  const [markdown, setMarkDown] = useState("markdown Here we come");
  return (
    <>
      <div className="center-div">
        <textarea
          className="left-side"
          value={markdown}
          onChange={(e) => setMarkDown(e.target.value)}></textarea>

        <div className="right-side">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      </div>
    </>
  );
};

export default Markdown;
