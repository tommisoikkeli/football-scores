import * as React from 'react';
import { BeatLoader } from 'react-spinners';

export const Loading: React.FC = () => (
  <div style={{ marginTop: 100 }}>
    <BeatLoader sizeUnit='px' size={20} color={'#a5a1a1'} />
  </div>
);
