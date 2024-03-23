import { useEffect } from "react"
import { getCharacterFromStorage } from "../../tools/general.tools";
import { Outlet, useNavigate } from "react-router-dom";

const GamePage: React.FC<any> = (props) => {

  const navigate = useNavigate();

  useEffect(() => {
    checkSelectedCharacter();
  }, [])

  const checkSelectedCharacter = (): void => {
    if(!getCharacterFromStorage()) navigate('/game/characters');
  }

  return(
    <Outlet />
  )
}

export { GamePage }