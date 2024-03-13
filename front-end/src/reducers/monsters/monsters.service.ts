import { API_URL } from '../../constants/env';
import { BattleWinnerDataParams } from '../../models/interfaces/battle-params.interface';
import { Monster } from '../../models/interfaces/monster.interface';

const getAll = async (): Promise<Monster[]> =>
  await fetch(`${API_URL}/monsters`).then((response) => response.json());

  const startBattle = async (params: BattleWinnerDataParams ): Promise<Monster> =>
  await fetch(`${API_URL}/battle/start`, {
    method: 'POST',
    body: JSON.stringify(params),
    headers: {
      "content-type": "application/json",
    }
  }).then(response => response.json())

export const MonsterService = {
  getAll,
  startBattle,
};
