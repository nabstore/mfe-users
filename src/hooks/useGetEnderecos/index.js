import { useEffect, useState } from "react";
import apiMethods from "../../services/api";

const useGetEnderecos = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(undefined);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    apiMethods
      .fetchEnderecos()
      .then((resp) => {
        setData(resp);
        setError(undefined);
        setIsLoading(false);
      })
      .catch((err) => {
        setData(undefined);
        setIsLoading(false);
        setError(err);
        console.error("Erro ao criar usuário.", err);
      });
  }, []);

  return { data, isLoading, error };
};

export default useGetEnderecos;
