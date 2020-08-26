import React from 'react';

const UseFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  const request = React.useCallback(async (url, options) => {
    let res;
    let json;

    try {
      setError(null);
      setLoading(true);

      res = await fetch(url, options);
      json = await res.json();
      if (res.ok === false) throw new Error(json.message);
    } catch (erro) {
      json = null;

      setError(`Ocorreu um erro: ${erro}`);
    } finally {
      setData(json);
      setLoading(false);

      return { res, json };
    }
  }, []);

  return { request, data, error, loading };
};

export default UseFetch;
