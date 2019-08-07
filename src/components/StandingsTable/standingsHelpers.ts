import { IStandingsIndicators } from '../../models/standings';

const blue = '#5555f7';
const orange = '#ffad16';
const green = '#17a017';
const yellow = '#d2b93f';
const red = '#ff1818';

const standingsIndicators: IStandingsIndicators[] = [
  {
    competition: 'Série A',
    topPositions: {
      positions: [1, 2, 3, 4]
    },
    lowerTopPositions: {
      positions: [5, 6]
    },
    midPositions: {
      positions: [7, 8, 9, 10, 11, 12]
    },
    bottomPositions: {
      positions: [17, 18, 19, 20]
    },
    indicators: [
      {
        qualification: 'Copa Libertadores group stage',
        color: blue
      },
      {
        qualification: 'Copa Libertadores second stage',
        color: orange
      },
      {
        qualification: 'Copa Sudamericana first stage',
        color: green
      },
      {
        qualification: 'Relegation',
        color: red
      }
    ]
  },
  {
    competition: 'Premier League',
    topPositions: {
      positions: [1, 2, 3, 4]
    },
    lowerTopPositions: {
      positions: [5]
    },
    bottomPositions: {
      positions: [18, 19, 20]
    },
    indicators: [
      {
        qualification: 'Champions League group stage',
        color: blue
      },
      {
        qualification: 'Europa League group stage',
        color: orange
      },
      {
        qualification: 'Relegation',
        color: red
      }
    ]
  },
  {
    competition: 'Championship',
    topPositions: {
      positions: [1, 2]
    },
    lowerTopPositions: {
      positions: [3, 4, 5, 6]
    },
    bottomPositions: {
      positions: [22, 23, 24]
    },
    indicators: [
      {
        qualification: 'Promotion to Premier League',
        color: blue
      },
      {
        qualification: 'Championship play-offs',
        color: orange
      },
      {
        qualification: 'Relegation',
        color: red
      }
    ]
  },
  {
    competition: 'Ligue 1',
    topPositions: {
      positions: [1, 2]
    },
    lowerTopPositions: {
      positions: [3]
    },
    midPositions: {
      positions: [4]
    },
    upperBottomPositions: {
      positions: [18]
    },
    bottomPositions: {
      positions: [19, 20]
    },
    indicators: [
      {
        qualification: 'Champions League group stage',
        color: blue
      },
      {
        qualification: 'Champions League qualifiers',
        color: orange
      },
      {
        qualification: 'Europa League group stage',
        color: green
      },
      {
        qualification: 'Relegation play-offs',
        color: yellow
      },
      {
        qualification: 'Relegation',
        color: red
      }
    ]
  },
  {
    competition: 'Bundesliga',
    topPositions: {
      positions: [1, 2, 3, 4]
    },
    lowerTopPositions: {
      positions: [5]
    },
    midPositions: {
      positions: [6]
    },
    upperBottomPositions: {
      positions: [16]
    },
    bottomPositions: {
      positions: [17, 18]
    },
    indicators: [
      {
        qualification: 'Champions League group stage',
        color: blue
      },
      {
        qualification: 'Europa League group stage',
        color: orange
      },
      {
        qualification: 'Europa League qualifiers',
        color: green
      },
      {
        qualification: 'Relegation play-offs',
        color: yellow
      },
      {
        qualification: 'Relegation',
        color: red
      }
    ]
  },
  {
    competition: 'Serie A',
    topPositions: {
      positions: [1, 2, 3, 4]
    },
    lowerTopPositions: {
      positions: [5]
    },
    midPositions: {
      positions: [6]
    },
    bottomPositions: {
      positions: [18, 19, 20]
    },
    indicators: [
      {
        qualification: 'Champions League group stage',
        color: blue
      },
      {
        qualification: 'Europa League group stage',
        color: orange
      },
      {
        qualification: 'Europa League qualifiers',
        color: green
      },
      {
        qualification: 'Relegation',
        color: red
      }
    ]
  },
  {
    competition: 'Eredivisie',
    topPositions: {
      positions: [1, 2]
    },
    lowerTopPositions: {
      positions: [3]
    },
    midPositions: {
      positions: [4, 5, 6, 7]
    },
    upperBottomPositions: {
      positions: [16]
    },
    bottomPositions: {
      positions: [17, 18]
    },
    indicators: [
      {
        qualification: 'Champions League qualifiers',
        color: blue
      },
      {
        qualification: 'Europa League qualifiers',
        color: orange
      },
      {
        qualification: 'European competition play-offs',
        color: green
      },
      {
        qualification: 'Relegation play-offs',
        color: yellow
      },
      {
        qualification: 'Relegation',
        color: red
      }
    ]
  },
  {
    competition: 'Primeira Liga',
    topPositions: {
      positions: [1]
    },
    lowerTopPositions: {
      positions: [2]
    },
    midPositions: {
      positions: [3, 4]
    },
    bottomPositions: {
      positions: [17, 18]
    },
    indicators: [
      {
        qualification: 'Champions League group stage',
        color: blue
      },
      {
        qualification: 'Champions League qualifiers',
        color: orange
      },
      {
        qualification: 'Europa League qualifiers',
        color: green
      },
      {
        qualification: 'Relegation',
        color: red
      }
    ]
  },
  {
    competition: 'Primera Division',
    topPositions: {
      positions: [1, 2, 3, 4]
    },
    lowerTopPositions: {
      positions: [5]
    },
    midPositions: {
      positions: [6]
    },
    bottomPositions: {
      positions: [18, 19, 20]
    },
    indicators: [
      {
        qualification: 'Champions League group stage',
        color: blue
      },
      {
        qualification: 'Europa League group stage',
        color: orange
      },
      {
        qualification: 'Europa League qualifiers',
        color: green
      },
      {
        qualification: 'Relegation',
        color: red
      }
    ]
  }
];

export const getStandingIndicatorsForCompetition = (
  competition: string
): IStandingsIndicators =>
  standingsIndicators.find(s => s.competition === competition);

const getPositions = (
  standings: IStandingsIndicators,
  position: number
): number[] => {
  const positions: number[][] = Object.values(standings).map(v => v.positions);
  return positions.find(
    (v: number[]) => v !== undefined && v.includes(position)
  );
};

const getPositionKeyName = (
  standings: IStandingsIndicators,
  position: number
): string =>
  Object.keys(standings).find(
    key =>
      (standings as any)[key].positions === getPositions(standings, position)
  );

export const getPositionIndicatorClass = (
  standings: IStandingsIndicators,
  position: number
): string => {
  const positionKeyName: string = getPositionKeyName(standings, position);
  let className: string = '';

  switch (positionKeyName) {
    case 'topPositions':
      className = 'top-position';
      break;
    case 'lowerTopPositions':
      className = 'lower-top-position';
      break;
    case 'midPositions':
      className = 'mid-position';
      break;
    case 'upperBottomPositions':
      className = 'upper-bottom-position';
      break;
    case 'bottomPositions':
      className = 'bottom-position';
      break;
    default:
      className = 'no-position';
      break;
  }
  return className;
};
