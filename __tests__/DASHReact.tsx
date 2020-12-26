import React from 'react';
import DASH from '../src/index';
import { render, screen } from '@testing-library/react';

describe('DASHReact', () => {
  it('renders', () => {
    render(<DASH />);
  });

  it('accepts options object that conforms to MediaPlayerSettingClass', () => {
    render(<DASH options={{
      streaming: { scheduleWhilePaused: true, liveCatchup: {} }
    }} />)
    const element = screen.getByTestId('custom-element')
    
  })
})