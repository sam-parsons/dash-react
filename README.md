# dash-react <sub>v1.0</sub>

react/dash.js integration component - full DASH settings support<sub>v1.1</sub>

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
        options={this.props.options} // see src/types/
      />
    );
  }
}

export default VideoPlayer;
```
