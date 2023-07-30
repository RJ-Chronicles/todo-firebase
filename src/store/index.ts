import { State, Method, Filter } from "../type/index";

type Action =
  | { type: "TODO_ERROR"; payload: { hadError: boolean; errorMessage: string } }
  | { type: "TODO_LOADING"; payload: { isLoading: boolean } }
  | { type: "TODO_METHOD"; payload: Method }
  | { type: "TODO_FILTER"; payload: Filter };

export type Dispatch = (action: Action) => void;

const AppReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "TODO_ERROR":
      return {
        ...state,
        error: {
          hasError: action.payload.hadError,
          errorMessage: action.payload.errorMessage,
        },
      };

    case "TODO_LOADING":
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };

    case "TODO_METHOD":
      return {
        ...state,
        method: action.payload,
      };
    case "TODO_FILTER":
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};
export default AppReducer;
