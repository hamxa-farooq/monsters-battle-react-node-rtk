import { createReducer } from '@reduxjs/toolkit';
import { Monster } from '../../models/interfaces/monster.interface';
import { fetchMonstersData, setComputerMonster, setSelectedMonster, fetchBattleWinner, removeWinnerMonster } from './monsters.actions';

interface MonsterState {
  monsters: Monster[];
  selectedMonster: Monster | null;
  computerMonster: Monster | null;
  winnerMonster: Monster | null;
}

const initialState: MonsterState = {
  monsters: [],
  selectedMonster: null,
  computerMonster: null,
  winnerMonster: null,
};

export const monstersReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchMonstersData.pending, (state) => ({
    ...state,
    monsters: [],
  }));

  builder.addCase(fetchMonstersData.rejected, (state) => ({
    ...state,
    monsters: [],
  }));

  builder.addCase(fetchMonstersData.fulfilled, (state, action) => ({
    ...state,
    monsters: action.payload,
  }));

  builder.addCase(fetchBattleWinner.fulfilled, (state, action) => ({
    ...state,
    winnerMonster: action.payload,
  }));

  builder.addCase(removeWinnerMonster, (state, action) => ({
    ...state,
    winnerMonster: null,
  }));

  builder.addCase(setSelectedMonster, (state, action) => ({
    ...state,
    selectedMonster: action.payload,
  }));

  builder.addCase(setComputerMonster, (state, action) => ({
    ...state,
    computerMonster: action.payload,
  }));
});
