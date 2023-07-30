export interface Item {
  id: string;
  todo: string;
  status: string;
}

export interface State {
  isLoading: boolean;
  error: { hasError: boolean; errorMessage: string };
  method: Method;
  filter: Filter;
}

export type Filter = "ALL" | "COMPLETED" | "ACTIVE";
export type Method = "POST" | "GET" | "PATCH" | "DELETE" | undefined;
