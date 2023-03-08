import "./App.css";
import ReactMarkdown from "react-markdown";

function App() {
  return (
    <div className="App">
      <ReactMarkdown># Markdown Preview</ReactMarkdown>
      <ReactMarkdown># This is header 1</ReactMarkdown>
      <ReactMarkdown>## This is header 2</ReactMarkdown>
      <ReactMarkdown>### This is header 3</ReactMarkdown>
      <ReactMarkdown>`this is some code`</ReactMarkdown>
      <ReactMarkdown>
        ![alt](https://gratisography.com/wp-content/uploads/2023/02/gratisography-colorful-boots-free-stock-photo-800x525.jpg)
      </ReactMarkdown>
      this is some image
      <ReactMarkdown>- list 1</ReactMarkdown>
      <ReactMarkdown>- list 2</ReactMarkdown>
      <ReactMarkdown>- list 3</ReactMarkdown>
    </div>
  );
}

export default App;
