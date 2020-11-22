import React, { ReactNode, useRef } from 'react';
import HttpApi from '../api/http';

interface ApiContext {
  httpClient: HttpApi;
}

export const HttpApiContext = React.createContext<ApiContext | null>(null);
export const useHttpApi = () => React.useContext(HttpApiContext);

interface HttpApiProviderProps {
  idToken: string;
  baseUrl: string;
  children: ReactNode;
}

const HttpApiProvider = ({
  idToken,
  baseUrl,
  children,
}: HttpApiProviderProps) => {
  const httpClient = useRef<HttpApi>();
  httpClient.current = new HttpApi(idToken, baseUrl);
  const contextValue = { httpClient: httpClient.current };
  if (httpClient.current) {
    return (
      <HttpApiContext.Provider value={contextValue}>
        {children}
      </HttpApiContext.Provider>
    );
  }
  return <></>;
};

export default HttpApiProvider;
