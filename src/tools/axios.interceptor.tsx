import axios, { AxiosError, AxiosResponse } from 'axios';
import { Divider } from 'primereact/divider';
import { Toast } from 'primereact/toast';
import { useEffect, useRef } from 'react';

// let instance: AxiosInstance = axios.create({
//   baseURL: "https://example.com"
// }) 

interface AxiosProps {
  children: any;
}

const AxiosInterceptor: React.FC<AxiosProps> = ({children}) => {

  useEffect(() => {
    setAxiosInterceptors();
  }, [])

  const toast = useRef<Toast>(null);

  const setAxiosInterceptors = (): void => {
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
        return Promise.reject(error.response?.data);
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