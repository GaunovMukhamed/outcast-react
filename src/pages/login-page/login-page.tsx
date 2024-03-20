import { Button } from 'primereact/button'; 
import { InputText } from 'primereact/inputtext';
import { useRef, useState } from 'react';
import { loginUser } from './login.service';
import { SuccessResponse } from '../../models';
import { Spinner } from '../../components/spinner';
import { Toast } from 'primereact/toast';
        
const LoginPage: React.FC = (props: any) => {

  const [login, setLogin] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const toast = useRef<Toast>(null);

  const onSubmit = (event: any): void => {
    event.preventDefault();
    setLoading(true);
    loginUser(login)
      .then((response: SuccessResponse) => {
        toast.current!.show({ severity: 'success', summary: 'Успешно', detail: response.message });
      })
      .catch((error: any) => {
        toast.current!.show({ severity: 'error', summary: 'Ошибка', detail: error.message });
      })
      .finally(() => setLoading(false))
  }

  return(
    <div className='w-full h-full flex justify-content-center align-items-center'>
      <form className='flex flex-column gap-2' onSubmit={(event: any) => onSubmit(event)}>
        <InputText
          placeholder='Логин...'
          required
          value={login}
          onInvalid={(event: any) => event.target.setCustomValidity('Введите логин')}
          onInput={(event: any) => { event.target.setCustomValidity('') }}
          onChange={(e) => setLogin(e.target.value)} />
        <Button label="Войти" type='submit' />
      </form>
      { loading ? <Spinner  /> : '' }
      <Toast ref={toast} />
    </div>
  )
}

export { LoginPage };