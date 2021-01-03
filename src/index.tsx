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
    this.initializeDash(
      this.props.url, 
      this.props.options as MediaPlayerSettingClass ?? {}, 
      this.props.autoPlay
    );
  }

  componentWillUnmount() {
    // this.state.player.destroy(); 
    this.setState({ player: null });
  }

  initializeDash(url: string, options?: MediaPlayerSettingClass, autoPlay = false) {
    const player = dash.MediaPlayer().create();
    if (options) player.updateSettings(options);
    player.initialize(
      document.querySelector("#dash-react")! as HTMLElement, 
      // needs regex to select for anything beginning with dash-react 
      url, 
      autoPlay
    );
    this.setState({ player });
  }

  render() {
    return (
      <video 
        data-testid="dash-react"
        id={`dash-react-${this.props.id ? + this.props.id : ''}`}
        className={this.props.className}
        controls={this.props.controls}
        preload='auto'
      ></video>
    );
  }
}

export default DASHReact;