import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Feed from "./components/Feed/Feed";
import Article from "./components/Article/Article";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/article/:articleId" element={<Article />} />
      </Routes>
    </Router>
  );
}

export default App;
