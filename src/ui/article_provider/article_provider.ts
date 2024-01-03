import { AppService } from "../../services/app_service";

export interface Node {
  type: string,
  content: string
}

export interface Article {
  id: string,
  slug: string,
  title: string,
  body: Node[]
}

export interface ArticleSummary {
  id: string,
  slug: string,
  title: string,
  summary: string
}

interface Cache {
  [key: string]: {
    article?: Article,
    summary?: ArticleSummary
  }
}

/*
  Assumes all existing articles are available in articles.json
  Infer the filename to fetch from based on the id's given in articles.json
*/

export class ArticleProvider {
  private readonly articlesCache: Cache = {}
  constructor(private readonly appService: AppService) {}

  async getAllArticles(): Promise<ArticleSummary[]> {
    const { articles } = await this.appService.getAllArticles();
    articles.forEach((summary) => {
      this.articlesCache[summary.slug] = { summary };
    })
    return articles;
  }

  async getArticleBySlug(slug: string): Promise<Article> {
    if (this.articlesCache[slug] && this.articlesCache[slug].article) {
      console.log(`${slug} is cached!`)
      return this.articlesCache[slug].article!;
    }
    const id = this.articlesCache[slug].summary?.id;
    const { article } = await this.appService.getArticleById({ id: id! });
    this.articlesCache[slug].article = article;
    return article;
  }
}