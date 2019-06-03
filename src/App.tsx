import * as React from 'react';
import './App.css';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import { Home } from './Views/Home/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Teams } from './components/Teams/Teams';

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql'
});

const App: React.FC = () => {
  return (
    <Router>
      <ApolloProvider client={client}>
        <div className='app'>
          <Route exact path='/' component={Home} />
          <Route path='/competition/:id' component={Teams} />
        </div>
      </ApolloProvider>
    </Router>
  );
};

export default App;
