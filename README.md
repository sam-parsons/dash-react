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
    return (
      <DASH 
        className={"class-name"}
        controls={true}
        autoPlay={true}
        url={"url.mpd"}
        options={this.props.options}
      />
    );
  }
}

export default VideoPlayer;
```
