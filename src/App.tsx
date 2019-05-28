import * as React from 'react';
import './App.css';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import { Home } from './Views/Home/Home';

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql'
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <div className="app">
        <Home/>
      </div>
    </ApolloProvider>
  );
};

export default App;
