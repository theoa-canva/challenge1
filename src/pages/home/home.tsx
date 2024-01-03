import { Link } from "react-router-dom"
import { ArticleSummary } from "../../ui/article_provider/article_provider"
import styles from "./home.module.css"

export const Home = ({
  articles
}: {
  articles: ArticleSummary[]
}) => {
  return (
    <div className={styles.homeContainer}>
      { articles.map((article) => <ArticleCard key={article.id} article={article} />) }
    </div>
  )
}

const ArticleCard = ({
  article
}: {
  article: ArticleSummary
}) => {
  return (
    <Link to={`article/${article.slug}`} className={styles.articleCard}>
      <h3>{ article.title }</h3>
      <p>{ article.summary }</p>
    </Link>
  )
}
