import { observer } from "mobx-react";
import { useEffect } from "react";
import { Home } from "./home";
import { HeaderController } from "../../ui/header/header_controller";
import { ArticleProvider } from "../../ui/article_provider/article_provider";
import { HomePresenter, HomeStore } from "./home_presenter";

export function createHome({
  headerController,
  articleProvider
}: {
  headerController: HeaderController,
  articleProvider: ArticleProvider
}) {

  const store = new HomeStore();
  const presenter = new HomePresenter({ articleProvider, store });

  const HomePage = observer(() => {

    useEffect(() => {
      headerController.setTitle('Home Page');
      const setArticlesAsync = async () => {
        await presenter.setArticles();
      };
      setArticlesAsync();
    }, [])

    return (
      <Home articles={store.articles} />
    )
  })

  return { HomePage }
}