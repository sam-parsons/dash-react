import React from 'react';
import Dash from 'dashjs';

interface Props {
  url?: string
}

interface State {
  player: any,
  url: string
}

class ReactDASH extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      player: null,
      url: props.url || "https://dash.akamaized.net/envivio/EnvivioDash3/manifest.mpd"
    }
  }

  componentDidMount() {
    const player = Dash.MediaPlayer().create();
    this.setState({ player }, () => {
      // first argument - a never null Element typecast as HTMLElement
      return player.initialize(document.querySelector("#videoPlayer")! as HTMLElement, this.state.url, true);
    })
  }

  render() {
    return (
      <div>
        <video id="videoPlayer" controls></video>
      </div>
    )
  }
}

export default ReactDASH;