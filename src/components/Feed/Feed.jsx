import { Link } from "react-router-dom";
import data from "../../articles.json";
import "./Feed.scss";

export default () => {
  return (
    <main>
      {data.map((item, index) => (
        <ArticleItem article={item} articleId={index} key={index} />
      ))}
    </main>
  );
};

const ArticleItem = ({ article, articleId }) => {
  return (
    <div className="article-item">
      <Link to={"/article/" + articleId}>
        <h1>{article.title}</h1>
      </Link>
      <p className="description">{article.annotation}</p>
      <p>{article.creationDate}</p>
      <div></div>
    </div>
  );
};
