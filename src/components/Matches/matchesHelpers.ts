import { IMatch } from "../../models/matches";

export const isHomeTeamWin = (match: IMatch): boolean => match.score.winner === 'HOME_TEAM';
export const isAwayTeamWin = (match: IMatch): boolean => match.score.winner === 'AWAY_TEAM';
export const isDraw = (match: IMatch): boolean => match.score.winner === 'DRAW';

export const isHomeTeamActiveTeam = (match: IMatch, activeTeam: string) => match.homeTeam.name === activeTeam;
export const isAwayTeamActiveTeam = (match: IMatch, activeTeam: string) => match.awayTeam.name === activeTeam;
