import { Character } from "../../models"

interface CharacterItemProps {
  characterInfo: Character;
  className?: string;
};

const CharacterItem: React.FC<CharacterItemProps> = ({ characterInfo, className }) => {
  return(
    <div className={"flex align-items-center border-solid border-primary-500 p-2 cursor-pointer " + className}>
      <span className="mr-2 text-yellow-500 border-solid border-primary border-round p-1">{characterInfo.level}</span>
      <span>{characterInfo.name}</span>
      <span className="ml-2">({characterInfo.race})</span>
    </div>
  )
}

export { CharacterItem }