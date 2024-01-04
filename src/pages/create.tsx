import { Route, Routes, useParams } from "react-router-dom";
import { createHome } from "./home/create";
import { createArticle } from "./article/create";
import { HeaderController } from "../ui/header/header_controller";
import { ArticleProvider } from "../ui/article_provider/article_provider";

export function createApp({
  headerController,
  articleProvider
}: {
  headerController: HeaderController,
  articleProvider: ArticleProvider
}) {

  const { HomePage } = createHome({ headerController, articleProvider });
  const { ArticlePage } = createArticle({ headerController, articleProvider });
  const ArticleImpl = () => {
    const params = useParams();
    const slug = params.slug;
    if (slug)
      return <ArticlePage slug={slug}/>
    return <h1>No slug provided</h1>
  }

  const App = () => {
    return (
      // Routes
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/article/:slug" element={<ArticleImpl />} />
      </Routes>
    )
  }

  return { App }
}