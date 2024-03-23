import axios, { AxiosError, AxiosResponse } from 'axios';
import { Toast } from 'primereact/toast';
import { useEffect, useRef } from 'react';

interface AxiosProps {
  children: any;
}

const AxiosInterceptor: React.FC<AxiosProps> = ({children}) => {

  useEffect(() => {
    setAxiosInterceptors();
  }, [])

  const toast = useRef<Toast>(null);

  const setAxiosInterceptors = (): void => {
    const address: string = process.env.REACT_APP_API_ADDRESS!;
    axios.defaults.baseURL = address;
    axios.interceptors.response.use(
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
        return Promise.reject(error);
      }
    );
  }

  return (
    <>
      <Toast ref={toast} />
      {children}
    </>
  );
}

export {AxiosInterceptor}