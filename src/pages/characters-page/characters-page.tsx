import { useEffect, useState } from "react"
import { getCharacters } from "./characters.service";
import { Character } from "../../models";
import { getLoginFromStorage } from "../../tools/general.tools";
import { Spinner } from "../../components/spinner";
import { http } from "../../tools/axios.interceptor";

const CharactersPage: React.FC = (props: any) => {

  useEffect(() => {
    getCharactersList();
  }, [])
  
  const [loading, setLoading] = useState<boolean>(false);
  const [characters, setCharacters] = useState<Character[]>([]);

  const getCharactersList = (): void => {
    setLoading(true);
    getCharacters(getLoginFromStorage()!)
      .then((charactersList: Character[]) => {
        setCharacters(charactersList);
      })
      .catch((error) => {})
      .finally(() => setLoading(false))
  }

  return(
    <div className="w-full h-full flex justify-content-center align-items-center">
      <div>
        {characters.map((character: Character) => {
          return <div key={character._id}>{character.login}</div>
        })}
      </div>
      {loading ? <Spinner /> : ''}
    </div>
  )
}

export { CharactersPage }