import Custom404 from "../404";

// Higher order function to determine whether we load the data
// or change page.
export default function loadingAPI(loadingError, router) {
  try {
    if (loadingError) {
      // Redirect to 404 page.
      try {
        router.push("/404");
      } catch {
        return <Custom404 />;
      }
    }
  } catch {
    return <p>Loading...</p>;
  }
}
