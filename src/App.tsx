import * as React from 'react';
import './App.css';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import { Home } from './Views/Home/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Standings } from './Views/Standings/Standings';
import { Header } from './components/Header/Header';

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql'
});

const App: React.FC = () => {
  return (
    <Router>
      <ApolloProvider client={client}>
        <div className='app'>
          <Header />
          <Route exact path='/' component={Home} />
          <Route path='/competition/:id' component={Standings} />
        </div>
      </ApolloProvider>
    </Router>
  );
};

export default App;
