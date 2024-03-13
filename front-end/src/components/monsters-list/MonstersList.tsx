import { useState } from "react"
import { useAppDispatch } from "../../app/hooks"
import { Monster } from "../../models/interfaces/monster.interface"
import { setSelectedMonster, setComputerMonster, removeWinnerMonster } from "../../reducers/monsters/monsters.actions"
import { Image, ListTitle, MonsterCard, MonsterName, MonstersSection } from "./MonstersList.styled"

type MonstersListProps = {
    monsters: Monster[]
}

const MonstersList: React.FC<MonstersListProps> = ({ monsters }) => {
    const dispatch = useAppDispatch();

    const [selectedMonsterId, setSelectedMonsterId] = useState<string | null>(null);

    const handleMonsterClick = (monster: Monster) => {
        dispatch(removeWinnerMonster())
        const value = selectedMonsterId === monster.id ? null : monster.id
        setSelectedMonsterId(value)
        dispatch(setSelectedMonster(!value ? null : monster));
        selectOpponent(monster);

    }

    const selectOpponent = (alreadySelectedMonster: Monster) => {
        let randomId = '0';
        do {
            randomId = generateRandomNumber(1, monsters.length);
        } while (randomId === alreadySelectedMonster.id)
        const computerMonster = monsters.filter((monster) => monster.id === randomId);
        dispatch(setComputerMonster(computerMonster[0]));
    }

    const generateRandomNumber = (min: number, max: number): string => {
        return Math.floor(Math.floor(Math.random() * (max -min + 1) + min)) as unknown as string;
    }

    return (
        <div>
            <ListTitle>{monsters.length > 0 ? 'Select your monster': 'No monsters available'}</ListTitle>

            <MonstersSection data-testid="monsters-list-section">
                {monsters.map(monster => (
                    <MonsterCard key={monster.id} onClick={() => handleMonsterClick(monster)} selected={monster.id === selectedMonsterId} data-testid={monster.id}>
                        <Image src={monster.imageUrl} />
                        <MonsterName>
                            {monster.name}
                        </MonsterName>
                    </MonsterCard>
                ))}
            </MonstersSection>
        </div>
    )
}

export { MonstersList }
