import { ArticleProvider } from "../ui/article_provider/article_provider";
import { AppService } from "./app_service";

export async function installServices () {
  const appService = new AppService();
  const articleProvider = new ArticleProvider(appService);
  await articleProvider.getAllArticles();
  return { articleProvider };
}