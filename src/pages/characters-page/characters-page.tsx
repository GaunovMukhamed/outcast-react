import { useEffect, useState } from "react"
import { getCharacters } from "./characters.service";
import { Character } from "../../models";
import { getLoginFromStorage } from "../../tools/general.tools";
import { Spinner } from "../../components/spinner";
import { CharacterItem } from "./character-item";
import { Panel } from 'primereact/panel';
import { Button } from 'primereact/button';
import { ScrollPanel } from 'primereact/scrollpanel';
        
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
      <Panel header="Персонажи" className="w-8 max-h-20rem">
        <ScrollPanel style={{ width: '100%', height: '10rem' }}>
          {characters.map((character: Character) => {
            return <CharacterItem key={character._id} characterInfo={character} className="mb-2" />
          })}
        </ScrollPanel>
        <Button label="Создать" className="w-full mt-2" />
      </Panel>
      {loading ? <Spinner /> : ''}
    </div>
  )
}

export { CharactersPage }