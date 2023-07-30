import { useState, useCallback, useContext } from "react";
import { AppContext } from "../store/AppContext";
//

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { state, dispatch } = useContext(AppContext);

  const sendRequest = useCallback(
    async (requestConfig: any, applyData: any) => {
      dispatch({ type: "TODO_LOADING", payload: { isLoading: true } });
      dispatch({
        type: "TODO_ERROR",
        payload: { hadError: false, errorMessage: "" },
      });

      try {
        const response = await fetch(requestConfig.url, {
          method: requestConfig.method ? requestConfig.method : "GET",
          headers: requestConfig.headers ? requestConfig.headers : {},
          body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
        });

        if (!response.ok) {
          throw new Error("Request failed!");
        }

        const data = await response.json();
        applyData(data);
        dispatch({ type: "TODO_LOADING", payload: { isLoading: false } });
      } catch (err: any) {
        dispatch({ type: "TODO_LOADING", payload: { isLoading: false } });
        dispatch({
          type: "TODO_ERROR",
          payload: { hadError: true, errorMessage: "Something Went Wrong" },
        });
      }
      setIsLoading(false);
    },
    []
  );
  return {
    isLoading,
    error,
    sendRequest,
  };
};
export default useHttp;
