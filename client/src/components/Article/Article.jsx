import { useParams } from "react-router-dom";
import data from "../../articles.json";
import "./Article.scss";

export default () => {
  let { articleId } = useParams();
  const article = data[articleId];
  //   const article = {
  //     title: "test",
  //     text: "test",
  //   };
  return (
    <div className="article-container">
      <h1>{article.title}</h1>
      <p>{article.text}</p>
    </div>
  );
};
