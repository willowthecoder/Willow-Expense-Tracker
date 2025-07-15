import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import GridBackground from "./components/ui/GridBackground.jsx";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import App from "./App.jsx";

const client = new ApolloClient({
  uri: "https://willow-expense-tracker.onrender.com/graphql",
  cache: new InMemoryCache(),
  credentials: "include",
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <GridBackground>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </GridBackground>
    </BrowserRouter>
  </StrictMode>
);
