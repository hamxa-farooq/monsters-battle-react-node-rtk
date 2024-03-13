import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useAppDispatch } from "../../app/hooks"
import { MonsterBattleCard } from "../../components/monster-battle-card/MonsterBattleCard"
import { MonstersList } from "../../components/monsters-list/MonstersList"
import { Title } from "../../components/title/Title"
import { fetchMonstersData, fetchBattleWinner } from "../../reducers/monsters/monsters.actions"
import { selectMonsters, selectSelectedMonster, selectComputerMonster, selectWinnerMonster } from "../../reducers/monsters/monsters.selectors"
import { BattleSection, PageContainer, StartBattleButton } from "./BattleOfMonsters.styled"
import { WinnerDisplay } from "../../components/winner-display/WinnerDisplay"

const BattleOfMonsters = () => {
    const dispatch = useAppDispatch()

    const monsters = useSelector(selectMonsters)
    const selectedMonster = useSelector(selectSelectedMonster)
    const computerMonster = useSelector(selectComputerMonster)
    const winnerMonster = useSelector(selectWinnerMonster)

    useEffect(() => {
        dispatch(fetchMonstersData())
    }, [dispatch]);

    const handleStartBattleClick = () => {
        if(!selectedMonster || !computerMonster) {
            return;
        }
        const contenstants = [selectedMonster, computerMonster];
        dispatch(fetchBattleWinner({contenstants}))
    }

    return (
        <PageContainer>
            <Title>Battle of Monsters</Title>

            <MonstersList monsters={monsters} />

            {winnerMonster && <WinnerDisplay text={winnerMonster?.name}></WinnerDisplay>}

            <BattleSection>
                <MonsterBattleCard monster={selectedMonster} title={selectedMonster?.name || "Player"}></MonsterBattleCard>
                <StartBattleButton data-testid="start-battle-button"  disabled={selectedMonster === null} onClick={handleStartBattleClick}>Start Battle</StartBattleButton>
                <MonsterBattleCard monster={computerMonster} title="Computer"></MonsterBattleCard>
            </BattleSection>
        </PageContainer>
    )
}

export { BattleOfMonsters }
