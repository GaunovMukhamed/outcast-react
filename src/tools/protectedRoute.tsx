import { Navigate } from 'react-router-dom'
import { getLoginFromStorage } from './general.tools'

//@ts-ignore
const Protected = ({ children }) => {
  const signedIn: boolean = !!(getLoginFromStorage())
  if (!signedIn) {
    return <Navigate to="/" replace />
  }
  return children
}

export default Protected;