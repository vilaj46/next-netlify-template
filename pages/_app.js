import "../styles/globals.css";

/**
 * Overrides the global App component to get access
 * to some features like persisting state / global layouts.
 */
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
