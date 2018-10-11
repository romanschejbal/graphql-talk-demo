import React from 'react';
import gql from 'graphql-tag';

import './Article.css';

const Article = ({ title, lead, thumbnail }) => (
  <div className="Article">
    <h4>{title}</h4>
    <div className="ArticlePreview">
      <div>
        <img src={thumbnail} />
      </div>
      <p>{lead}</p>
    </div>
  </div>
);

Article.fragments = {
  entry: gql`
    fragment ArticleFragment on Article {
      title
      lead
      thumbnail(size: 64)
    }
  `
};

export default Article;
