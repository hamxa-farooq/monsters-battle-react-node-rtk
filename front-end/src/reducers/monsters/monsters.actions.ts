import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Monster } from '../../models/interfaces/monster.interface';
import { MonsterService } from './monsters.service';
import { BattleWinnerDataParams } from '../../models/interfaces/battle-params.interface';


export const fetchMonstersData = createAsyncThunk<Monster[]>(
  'monsters/fetchMonstersData',
  MonsterService.getAll,
);

export const fetchBattleWinner = createAsyncThunk<Monster, BattleWinnerDataParams>(
  'monsters/fetchBattleWinner',
  MonsterService.startBattle,
);

export const setSelectedMonster = createAction<Monster | null>(
  'monsters/setSelectedMonster',
);

export const setComputerMonster = createAction<Monster | null>(
  'monsters/setComputerMonster',
);

export const removeWinnerMonster = createAction(
  'monsters/removeWinnerMonster',
);
