import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import './App.css';
import Article from './Article';

const GET_ARTICLES = gql`
  query {
    articles {
      id
      ...ArticleFragment
    }
  }
  ${Article.fragments.entry}
`;

const ArticleList = () => (
  <Query query={GET_ARTICLES}>
    {({ loading, error, data }) => {
      if (loading) return <h2>Loading articles...</h2>;
      if (error) return error.toString();
      return (
        <div>
          <h2>Article List</h2>
          {data.articles.map(article => (
            <Article key={article.id} {...article} />
          ))}
        </div>
      );
    }}
  </Query>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <ArticleList />
      </div>
    );
  }
}

export default App;
