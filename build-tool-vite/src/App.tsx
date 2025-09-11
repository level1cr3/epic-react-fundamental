import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallback";
import ArrayList from "./components/ArrayList";

function App() {
  return (
    <>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={(details) => {
          console.log(details); // reset state of your app so error doesn't happen again.
          // and then we could load form input if any in local storage.
        }}
      >
        <ArrayList />
      </ErrorBoundary>
    </>
  );
}

export default App;

// for errorBoundary to work we need to Extract form into component. because we need to catch the error. and error will only occur when that component is called or rendered.
