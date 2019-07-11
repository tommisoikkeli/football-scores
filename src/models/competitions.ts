export interface ICompetition {
  id: number;
  name: string;
  code?: string;
  area?: IArea;
}

export interface IArea {
  id: number;
  name: string;
}

export interface ICompetitions {
  count: number;
  competitions: ICompetition[];
}

export interface ICompetitionsQuery {
  competitions: ICompetitions;
}
