import React from 'react';
import DASH from '../src/index';
import { render, screen } from '@testing-library/react';

describe('DASHReact', () => {
  
  it('renders', () => {
    render(<DASH url={"https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps.mpd"} />);
  });

  it('accepts options object that conforms to MediaPlayerSettingClass', () => {
    render(
      <DASH 
        options={{
          streaming: { scheduleWhilePaused: true, liveCatchup: {} }
        }} 
        url={"https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps.mpd"} 
      />
    );
    const element = screen.getByTestId('dash-react');
    // TODO...
  });
  
  it('accepts a custom id and inititializes', () => {
    // TODO...
  });

  it('destroys instance of MediaPlayerClass when component unmounts', () => {
    // TODO...
  });
})