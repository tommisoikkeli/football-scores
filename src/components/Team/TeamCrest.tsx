import React from 'react';

interface ITeamCrestProps {
  crestUrl: string;
}

const FALLBACK_CREST: string = '/images/crest.png';

export const TeamCrest: React.FC<ITeamCrestProps> = ({ crestUrl }) => {
  const getTeamCrest = (crestUrl: string): string => {
    if (!crestUrl) {
      return FALLBACK_CREST;
    }
    return crestUrl;
  };

  const addDefaultCrest = (event: React.ChangeEvent<HTMLImageElement>) => {
    event.target.src = FALLBACK_CREST;
  };

  return (
    <img src={getTeamCrest(crestUrl)} alt='crest' onError={addDefaultCrest} />
  );
};
