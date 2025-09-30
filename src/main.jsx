import ReactDOM from "react-dom/client";
// 1. Import HttpLink
import {
  ApolloClient,
  InMemoryCache,
  HttpLink, // <-- Import this
} from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react"; // <-- Change this line
import { ThemeProvider } from "@mui/material";
import theme from "./mui/theme";
import App from "./App";

// import "./styles/index.css";
import "./styles/fonts.css";
import HomePage from "./components/home/HomePage";
import { BrowserRouter } from "react-router-dom";

// 2. Create the link
const link = new HttpLink({
  uri: import.meta.env.VITE_APP_GRAPGCMS_URI,
});

// 3. Use the 'link' property in the client constructor
const client = new ApolloClient({
  link: link, // <-- Use 'link' here instead of 'uri'
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </ApolloProvider>
);
