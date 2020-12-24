# dash-react

react/dash.js integration component

## Install

```bash
npm install dash-react
```

## Usage

```js | pure
import React from 'react';
import DASH from 'dash-react';

class VideoPlayer extends React.Component {
  render() {
    return <DASH props={this.props.props} />
  }
}

export default VideoPlayer;
```
