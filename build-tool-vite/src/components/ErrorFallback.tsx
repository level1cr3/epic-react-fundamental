import type { FallbackProps } from "react-error-boundary";

const ErrorFallback = ({ error }: FallbackProps) => {
  return (
    <div role="alert">
      <p>something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
};

export default ErrorFallback;

// we could use onErrorProp to report to error reporting server
