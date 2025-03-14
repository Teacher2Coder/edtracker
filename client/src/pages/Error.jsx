// Import dependency
import { useRouteError } from 'react-router-dom';

// Create and export ErrorPage
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i style={{color: 'black'}} >{error.statusText || error.message}</i>
      </p>
    </div>
  );
}