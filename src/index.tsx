import React from 'react';
import dash, { MediaPlayerSettingClass } from 'dashjs';

interface Props {
  url?: string,
  options?: MediaPlayerSettingClass
}

// interface MediaPlayerSettings extends MediaPlayerSettingClass {
//   streaming?: { [liveCatchup: string]: object }
// }

interface State {
  player: any
}

class DASHReact extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      player: null
    }
  }

  componentDidMount() {
    // create instance of media player
    const player = dash.MediaPlayer().create();

    // update settings from props
    player.updateSettings(this.props.options as MediaPlayerSettingClass);

    // keep track of the player object in state
    this.setState({ player }, () => {
      // first argument - a never null Element typecast as HTMLElement
      return player.initialize(document.querySelector("#videoPlayer")! as HTMLElement, this.props.url, true);
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

export default DASHReact;