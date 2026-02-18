import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Feed from "./components/Feed/Feed";
import Profile from "./components/Profile/Profile";
import Article from "./components/Article/Article";
import Login from "./components/Auth/Login";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/article/:articleId" element={<Article />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={"Не найдено"} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
