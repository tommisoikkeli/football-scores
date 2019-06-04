import * as React from 'react';

interface ITeamCrestProps {
  crestUrl: string;
}

const FALLBACK_CREST = '/images/crest.png';

export const TeamCrest: React.FC<ITeamCrestProps> = ({ crestUrl }) => {
  function getTeamCrest(crestUrl: string): string {
    if (!crestUrl) {
      return FALLBACK_CREST;
    }
    return crestUrl;
  }

  function addDefaultCrest(event: React.ChangeEvent<HTMLImageElement>) {
    event.target.src = FALLBACK_CREST;
  }

  return <img src={getTeamCrest(crestUrl)} alt='crest' onError={addDefaultCrest} />;
};
