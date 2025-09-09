import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallback";
import OnBoardingForm from "./components/OnBoardingForm";

function App() {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <OnBoardingForm />
      </ErrorBoundary>
    </>
  );
}

export default App;

// for errorBoundary to work we need to Extract form into component. because we need to catch the error. and error will only occur when that component is called or rendered.
