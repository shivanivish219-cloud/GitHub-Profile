// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import { ThemeProvider } from "./context/ThemeContext";
// // import "./index.css";
// import App from "./App.jsx";

// createRoot(document.getElementById("root")).render(
//   <ThemeProvider>
//     <StrictMode>
//       <App />
//     </StrictMode>
//   </ThemeProvider>,
// );

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import AppRouter from "./Routes/AppRouter.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  </StrictMode>,
);
