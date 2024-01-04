import { action, makeAutoObservable, observable, runInAction } from "mobx";
import { Article, ArticleProvider } from "../../ui/article_provider/article_provider";

export class ArticleStore {
  @observable.ref
  slug?: string

  @observable.ref
  article?: { exists: false } | { exists: true, content: Article }

  constructor () { makeAutoObservable(this); }
}

export class ArticlePresenter {
  constructor (private readonly opts: {
    articleProvider: ArticleProvider,
    store: ArticleStore
  }) {}

  @action
  setSlug(slug: string) {
    this.opts.store.slug = slug;
    this.setArticle(slug);
  }

  @action
  private async setArticle(slug: string) {
    try {
      const article = await this.opts.articleProvider.getArticleBySlug(slug);
      runInAction(() => { this.opts.store.article = { exists: true, content: article }; });
    } catch (e) {
      runInAction(() => { this.opts.store.article = { exists: false }; });
    }
  }
}