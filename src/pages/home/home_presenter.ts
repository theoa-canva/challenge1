import { action, makeAutoObservable, observable, runInAction } from "mobx";
import { ArticleProvider, ArticleSummary } from "../../ui/article_provider/article_provider";

export class HomeStore {
  @observable.ref
  articles: ArticleSummary[] = [];

  constructor () { makeAutoObservable(this); }
}

export class HomePresenter {
  constructor (private readonly opts: {
    articleProvider: ArticleProvider,
    store: HomeStore
  }) {}

  @action
  async setArticles() {
    if (this.opts.store.articles.length > 0) return;
    const articles = await this.opts.articleProvider.getAllArticles();
    runInAction(() => { this.opts.store.articles = articles; });
  }
}