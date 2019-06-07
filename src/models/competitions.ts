export interface ICompetition {
  id: number;
  name: string;
  code: string;
  area: IArea;
}

interface IArea {
  id: string;
  name: string;
}

export interface ICompetitions {
  count: number;
  competitions: ICompetition[];
}

export interface ICompetitionsQuery {
  competitions: ICompetitions;
}
