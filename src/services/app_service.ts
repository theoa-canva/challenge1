import { Article, ArticleSummary } from "../ui/article_provider/article_provider";

export interface GetAllArticlesResponse {
  articles: ArticleSummary[]
}

export interface GetArticleByIdRequest {
  id: string
}

export interface GetArticleByIdResponse {
  article: Article
}

export class AppService {

  async getAllArticles(): Promise<GetAllArticlesResponse> {

    let articles: ArticleSummary[] = [];

    try {
      const res = await fetch('/articles.json');
      articles = await res.json();
    } catch (e) {
      console.log(e);
    }

    return { articles }
  }

  async getArticleById({ id }: GetArticleByIdRequest): Promise<GetArticleByIdResponse> {

    let article: Article;

    try {
      const res = await fetch(`/${id}.json`);
      article = await res.json();
    } catch (e) {
      throw new Error(`Article with Id: "${id}" not found`);
    }

    return { article }
  }
}
