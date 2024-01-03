import { useEffect } from "react"
import { ArticleComponent } from "./article"
import { HeaderController } from "../../ui/header/header_controller"
import { observer } from "mobx-react"
import { ArticlePresenter, ArticleStore } from "./article_presenter"
import { ArticleProvider } from "../../ui/article_provider/article_provider"

export function createArticle({
  headerController,
  articleProvider
}: {
  headerController: HeaderController,
  articleProvider: ArticleProvider
}) {

  const store = new ArticleStore();
  const presenter = new ArticlePresenter({ articleProvider, store });

  const ArticlePage = observer(({
    slug
  }: {
    slug: string
  }) => {
    
    useEffect(() => {
      headerController.setTitle('Article Page');
      presenter.setSlug(slug);
    }, [slug])

    return (
      store.article?.exists ? <ArticleComponent article={store.article.content}/> : <h1>Article not found</h1>
    )
  })

  return { ArticlePage };
}