export interface MonsterDto {
  id: string;
  name: string;
  attack: number;
  defense: number;
  hp: number;
  speed: number;
  imageUrl: string;
  battles?: string[];
}
