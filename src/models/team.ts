export interface ITeam {
  id: number;
  name: string;
  crestUrl: string;
  tla?: string;
  founded?: number;
  venue?: string;
  clubColors?: string;
  squad?: IPlayer[];
}

export interface IPlayer {
  id: number;
  name: string;
  position: string;
  role: string;
}

export interface ITeamQuery {
  team: ITeam;
}

export interface ITeamQueryVariables {
  id: number;
}