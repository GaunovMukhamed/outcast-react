import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { Toast } from 'primereact/toast';
import { useRef } from 'react';

const address: string = process.env.REACT_APP_API_ADDRESS!;
export const http: AxiosInstance = axios.create({
  baseURL: address
});

interface AxiosProps {
  children: any;
}

const AxiosInterceptor: React.FC<AxiosProps> = ({children}) => {

  const toast = useRef<Toast>(null);

  console.log('intercept')

  http.interceptors.response.use(
    (response: AxiosResponse) => {
      if(Object.keys(response.data).length === 1 && response.data.message)
        toast.current!.show({ severity: 'success', summary: 'Успешно', detail: response.data.message });
      return response.data;
    }, 
    (error: AxiosError) => {
      toast.current!.show({ severity: 'error', summary: 'Ошибка', detail: 
        error.response ?
          (error.response.data! as any).message :
          'Ошибка подключения к серверу' });
      console.log(error)
      return Promise.reject(error);
    }
  );

  return (
    <>
      <Toast ref={toast} />
      {children}
    </>
  );
}

export {AxiosInterceptor}