"use client";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

function Error({ error, reset }: ErrorProps) {
  return (
    <div>
      <h1>{error.message}</h1>
      <button onClick={() => window.location.reload()}>Reload</button>
      <button onClick={() => reset()}>Reset</button>
    </div>
  );
}

export default Error;
