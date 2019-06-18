import * as React from 'react';
import './App.css';
import { ApolloProvider } from 'react-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { Home } from './Views/Home/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Standings } from './Views/Standings/Standings';
import { Header } from './components/Header/Header';
import { Team } from './Views/Team/Team';

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
  cache: new InMemoryCache()
});

const App: React.FC = () => {
  return (
    <Router>
      <ApolloProvider client={client}>
        <div className='app'>
          <Header />
          <Route exact path='/' component={Home} />
          <Route path='/competition/:id' component={Standings} />
          <Route path='/team/:id' component={Team} />
        </div>
      </ApolloProvider>
    </Router>
  );
};

export default App;
