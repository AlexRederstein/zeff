import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main>
        <div className="article-item">
          <h1>title</h1>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
            dolorem ipsa atque possimus, eum itaque cum consequuntur, beatae
            quidem repudiandae esse totam, et molestias exercitationem. Quis
            autem et illum quibusdam!
          </span>
        </div>
        <div className="article-item">
          <h1>title</h1>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
            dolorem ipsa atque possimus, eum itaque cum consequuntur, beatae
            quidem repudiandae esse totam, et molestias exercitationem. Quis
            autem et illum quibusdam!
          </span>
        </div>
        <div className="article-item">
          <h1>title</h1>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
            dolorem ipsa atque possimus, eum itaque cum consequuntur, beatae
            quidem repudiandae esse totam, et molestias exercitationem. Quis
            autem et illum quibusdam!
          </span>
        </div>
        <div className="article-item">
          <h1>title</h1>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
            dolorem ipsa atque possimus, eum itaque cum consequuntur, beatae
            quidem repudiandae esse totam, et molestias exercitationem. Quis
            autem et illum quibusdam!
          </span>
        </div>
        <div className="article-item">
          <h1>title</h1>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
            dolorem ipsa atque possimus, eum itaque cum consequuntur, beatae
            quidem repudiandae esse totam, et molestias exercitationem. Quis
            autem et illum quibusdam!
          </span>
        </div>
      </main>
    </>
  );
}

export default App;
