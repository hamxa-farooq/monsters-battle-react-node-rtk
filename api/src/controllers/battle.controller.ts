import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Battle } from '../models';
import battleService from '../services/battle.service';

const list = async (req: Request, res: Response): Promise<Response> => {
  const battles = await Battle.query();
  return res.status(StatusCodes.OK).json(battles);
};

const startBattle = async (req: Request, res: Response) => {
  console.log(req.body)
  const contestantA = req.body.contenstants[0];
  const contestantB = req.body.contenstants[1];
  console.log(req.body)
  const winnerMonster = battleService.calculatebattleWinner(contestantA, contestantB);
  return res.status(StatusCodes.OK).json(winnerMonster);
};

export const BattleController = {
  list,
  startBattle
};
