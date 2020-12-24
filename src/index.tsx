import React from 'react';
import Dash from 'dashjs';

interface Props {

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
      url: "https://dash.akamaized.net/envivio/EnvivioDash3/manifest.mpd"
    }
  }

  componentDidMount() {
    console.log('CDM')
    console.log(Dash);
    const player = Dash.MediaPlayer().create();
    this.setState({player}, () => {
      return player.initialize(document.querySelector("#videoPlayer")! as HTMLElement, this.state.url, true);
    })

  }

  render() {
    return (
      <div>
        <video id="videoPlayer" ></video>
      </div>
    )
  }
}

export default ReactDASH;