import { Article } from "../../ui/article_provider/article_provider"

export const ArticleComponent = ({
  article
}: {
  article: Article
}) => {
  return (
    <div>
      <h3>{ article.title }</h3>
      <div>
        { article.body.map((node, idx) => <ArticleNode key={idx} type={node.type} content={node.content} />) }
      </div>
    </div>
  )
}

const ArticleNode = ({
  type,
  content
}: {
  type: string,
  content: string
}) => {
  switch (type) {
    case 'paragraph':
      return <p>{ content }</p>;
    default:
      return undefined;
  }
}
