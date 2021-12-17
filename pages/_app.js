/**
 * Overrides the global App component to get access
 * to some features like persisting state / global layouts.
 */

import "../styles/styles.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
