import React from "react";

export const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const request = React.useCallback(async (url, options) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Something went wrong");
      }
      const json = await response.json();
      setData(json);
    } catch (err) {
      setError(err.message || "An error occurred");
      setData(null);
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, error, request, loading };
};
