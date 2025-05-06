// Import dependencies
import { Outlet } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

// Import styles
import "./App.css";

// Create GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
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
  
  return (
    <ApolloProvider client={client}>
      <div className="app-container">
        <main>
          <Outlet />
        </main>
      </div>
    </ApolloProvider>
  );
};

// Export the App component as the default export
export default App;
