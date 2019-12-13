import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Laptops from './components/Laptops/Laptops';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
// import Error from './pages/Error';
// import AddProduct from './pages/AddProduct';
import Navbar from "./components/Navbar/Navbar";

//apollo setup
const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql/laptops',
})

function App() {
  return (    
    <ApolloProvider client={client}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Laptops} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        {/* <Route exact path="/product/add" component={AddProduct} /> */}
        {/* <Route component={Error} /> */}
      </Switch>
    </ApolloProvider>    
  );
}

export default App;