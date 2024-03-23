import { useEffect, useState } from "react"
import { getCharacters } from "./characters.service";
import { Character } from "../../models";
import { getLoginFromStorage } from "../../tools/general.tools";

const CharactersPage: React.FC = (props: any) => {

  useEffect(() => {
    getCharactersList();
  }, [])
  
  const [loading, setLoading] = useState<boolean>(false);
  const [characters, setCharacters] = useState<Character[]>([]);

  const getCharactersList = (): void => {
    setLoading(true);
    getCharacters(getLoginFromStorage()!)
      .then((characters: Character[]) => {
        console.log('asd')
        setCharacters(characters);
      })
      .catch((error) => {})
      .finally(() => setLoading(false))
  }

  return(
    <div className="w-full h-full flex justify-content-center align-items-center">
      <div>asd</div>
    </div>
  )
}

export { CharactersPage }