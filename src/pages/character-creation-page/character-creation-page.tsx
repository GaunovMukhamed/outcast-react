import { Button } from "primereact/button"
import { Scroller } from "../../components/scroller"
import { Panel } from "primereact/panel"
import { useEffect, useState } from "react"
import { Gender, Race } from "../../models"
import { Dropdown } from 'primereact/dropdown';
import { Spinner } from "../../components/spinner"
import { getRaces } from "./character-creation.service"
        
const CharacterCreationPage: React.FC = (props: any) => {

  const [loading, setLoading] = useState<boolean>(false);

  const genders: Gender[] = ['мужчина', 'женщина'];
  const [gender, setGender] = useState<string>('мужчина');

  const [races, setRaces] = useState<Race[]>([]);
  const [race, setRace] = useState<Race>();

  useEffect(() => {
    getCreationInfo();
  }, [])

  const getCreationInfo = (): void => {
    setLoading(true);
    getRaces()
      .then((result: Race[]) => {
        setRaces(result);
        setRace(result[0]);
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }

  return(
    <div className="w-full h-full p-3 flex flex-column">
      <Panel header="Создание персонажа" className="w-full h-full">
        <div className="h-full flex flex-column">
          <Scroller className="flex-1 flex flex-column">
            <div>Пол:</div>
            <Dropdown
              value={gender}
              onChange={(e) => setGender(e.value)}
              options={genders}
              className="w-full md:w-14rem">
            </Dropdown>
            <div className="mt-2">Раса:</div>
            <Dropdown
              value={race}
              onChange={(e) => setRace(e.value)}
              options={races}
              optionLabel="name"
              className="w-full md:w-14rem">
            </Dropdown>
          </Scroller>
          <Button label="Создать" className="w-full mt-2" />
          <Button label="Отмена" className="w-full mt-2" severity="danger" />
        </div>
      </Panel>
      { loading ? <Spinner /> : '' }
    </div>
  )
}

export { CharacterCreationPage }