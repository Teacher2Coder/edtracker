/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useCallback } from "react";

const useErrorHandler = () => {
  const [error, setError] = useState(null);

  const handleError = useCallback((err) => {
    setError(err)
    console.error(err);
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return { error, handleError, clearError };
}

export default useErrorHandler;