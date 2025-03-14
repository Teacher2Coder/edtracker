// Import dependencies
import { Outlet, useLocation } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { useEffect, useState } from 'react';

// Import components
import Header from './components/Header';
// import Footer from './components/Footer';

// Import styles
import './App.css';

// Create GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Set up authentication link
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

// Create a new instance of ApolloClient
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// Define the main App component
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("id_token");
    setIsLoggedIn(!!token);
  }, []);

  return (
    <ApolloProvider client={client}>
      <div className="app-container">
        {/* Only render header if not on home, login or signup pages */}
        {
          location.pathname !== '/teacher/login'
          && location.pathname !== '/teacher/signup'
          && location.pathname !== '/'
          && location.pathname !== '/student/login'
          && location.pathname !== '/student/signup'
          && ( <Header />)
        }
        <main>
          <Outlet />
        </main>
        {/* <Footer /> */}
      </div>
    </ApolloProvider>
  )
}

// Export the App component as the default export
export default App;