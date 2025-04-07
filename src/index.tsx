import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";

import App from "./App";

const rootElement = document.getElementById("root");
const root = rootElement && ReactDOMClient.createRoot(rootElement);

const cache = createCache({ key: "css" });

root?.render(
  <StrictMode>
    <CacheProvider value={cache}>
      <App />
    </CacheProvider>
  </StrictMode>
);
