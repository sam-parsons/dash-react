import React from 'react';
import DASH from '../src/index';
import { render } from '@testing-library/react';

describe('DASHReact', () => {
  it('renders', () => {
    render(<DASH />);
  });

  it('accepts options object that conforms to MediaPlayerSettingClass', () => {
    const { getByLabelText, queryAllByTestId } = render(<DASH options={{
      streaming: { scheduleWhilePaused: true }
    }} />)
    console.log(getByLabelText('video'))
  })
})