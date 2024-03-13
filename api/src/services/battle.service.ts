import { MonsterDto } from "../dto/monster.dto";

class BattleService {
  calculatebattleWinner = (contestantA: MonsterDto, contestantB: MonsterDto): MonsterDto => {
    let currentAttacker = contestantA;
    let currentDefender = contestantB;

    while(contestantA.hp > 0 && contestantB.hp > 0) {
      let attacker, defender;
      if(currentAttacker.speed > currentDefender.speed || currentAttacker.speed === currentDefender.speed && currentAttacker.attack > currentDefender.attack) {
        attacker = currentAttacker;
        defender = currentDefender;
      } else {
        attacker = currentDefender;
        defender = currentAttacker;
      }

      const damage =Math.max(1, attacker.attack - defender.defense);
      defender.hp = Math.max(0, defender.hp - damage);
      [currentAttacker, currentDefender] = [currentDefender, currentAttacker];
    }
    return contestantA.hp <= 0 ? contestantB : contestantA;
  }

}
export default new BattleService();
