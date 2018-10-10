import jsonOfArticles from './articles.json';

export default {
  Article: {
    thumbnail: (article, args) =>
      article.thumbnail + `${args.size}x${args.size}`,
    relatedArticles: article =>
      jsonOfArticles.filter(a => a.relatedArticles.includes(article.id)),
    body: article => article.content
  },

  Query: {
    articles: (_, args) =>
      jsonOfArticles.filter(article => !args.activeOnly || article.isActive),
    article: () => null
  }
};
