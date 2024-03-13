import { Box } from "@mui/material";
import { Monster } from "../../models/interfaces/monster.interface"
import { BattleMonsterCard, BattleMonsterTitle, Image, BattleMonsterName, ProgressBar, CharacteristicName } from './MonsterBattleCard.styled';

type MonsterCardProps = {
    monster?: Monster | null
    title?: string
}

const MonsterBattleCard: React.FC<MonsterCardProps> = ({ title, monster }) => {
    return (
        <BattleMonsterCard centralized={monster ? false : true}>
            {monster && <Image src={monster?.imageUrl} />}
            {monster ? <BattleMonsterName>{title!}</BattleMonsterName> : <BattleMonsterTitle>{title!}</BattleMonsterTitle>}
           {monster && <Box>
                <CharacteristicName>HP</CharacteristicName>
                <ProgressBar value={monster?.hp} variant="determinate"/>
                <CharacteristicName>Attack</CharacteristicName>
                <ProgressBar value={monster?.attack} variant="determinate"/>
                <CharacteristicName>Defense</CharacteristicName>
                <ProgressBar value={monster?.defense} variant="determinate"/>
                <CharacteristicName>Speed</CharacteristicName>
                <ProgressBar value={monster?.speed} variant="determinate"/>
            </Box>}
        </BattleMonsterCard>
    )
}

export { MonsterBattleCard }
