import React from 'react';
import './App.scss';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { Home } from './Views/Home/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Team } from './Views/Team/Team';
import { Competition } from './Views/Competition/Competition';
import { Footer } from './components/Footer/Footer';

const client = new ApolloClient({
  uri: 'https://fierce-cove-13214.herokuapp.com/graphql',
  cache: new InMemoryCache()
});

const App: React.FC = () => {
  return (
    <Router>
      <ApolloProvider client={client}>
        <div className='app'>
          <Header />
          <Route exact path='/' component={Home} />
          <Route path='/competition/:id' component={Competition} />
          <Route path='/team/:id' component={Team} />
          <Footer />
        </div>
      </ApolloProvider>
    </Router>
  );
};

export default App;
