import React from 'react';
import dash, { MediaPlayerSettingClass } from 'dashjs';
import { props, state } from './types';

class DASHReact extends React.Component<props, state> {
  
  constructor(props: props) {
    super(props);
    this.state = {
      player: null
    }
  }

  componentDidMount() {
    this.initializeDash(this.props.options as MediaPlayerSettingClass, this.props.url);
  }

  componentWillUnmount() {
    // this.state.player.destroy(); HOW TO DO THIS WITH JEST/RTL
    this.setState({ player: null });
  }

  initializeDash(options: MediaPlayerSettingClass, url: string) {
    const player = dash.MediaPlayer().create();
    player.updateSettings(options as MediaPlayerSettingClass);
    player.initialize(document.querySelector("#dash-react")! as HTMLElement, url, true);
    this.setState({ player });
  }

  render() {
    return (
      <video 
        id="dash-react" // needs to handle custom ids
        data-testid="dash-react"
        className={this.props.className}
        controls={this.props.controls}
        autoPlay={this.props.autoPlay}
        preload='auto'
      ></video>
    );
  }
}

export default DASHReact;