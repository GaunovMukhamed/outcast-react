import { useEffect } from "react"

const GamePage: React.FC = (props: any) => {

  useEffect(() => {
    checkSelectedCharacter();
  }, [])

  const checkSelectedCharacter = (): void => {
    console.log('asd');
  }

  return(
    <div>game</div>
  )
}

export { GamePage }