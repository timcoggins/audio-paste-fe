// import React, { Component } from 'react';
// import WaveSurfer from 'wavesurfer.js';
//
//
//
// class Waveform extends Component {
//     state = {
//         playing: false,
//     };
//
//     constructor(props) {
//         super();
//         document.body.onkeyup = function(e){
//         if(e.keyCode == 32){
//             //your code
//             this.waveform.playPause();
//         }
//       }
//     }
//     componentDidMount() {
//         this.waveform = WaveSurfer.create({
//             container: '#waveform',
//             //splitChannels: true,
//             progressColor: '#000',
//             waveColor: '#fff',
//             barHeight: 1,
//             barWidth: 1,
//             barGap: 1,
//             barRadius: 1,
//             responsive: true,
//             normalize: true,
//         });
//
//         this.waveform.load(this.props.file);
//     };
//
//     handlePlay = () => {
//         this.setState({ playing: !this.state.playing });
//         this.waveform.playPause();
//     };
//
//
//     render() {
//         return (
//             <div>
//                 <div id="waveform" />
//             {/*    <div className="controls has-text-centered">*/}
//             {/*        <button className='button mt-3 is-black' onClick={this.handlePlay}>*/}
//             {/*/!*<span className="material-icons md-36">*!/*/}
//             {/*/!*  {!this.state.playing ? 'play_arrow' : 'pause'}*!/*/}
//             {/*/!*</span>*!/*/}
//             {/*            <strong>{!this.state.playing ? 'Play' : 'Pause'}</strong>*/}
//             {/*        </button>*/}
//             {/*        <button className='button mt-3 ml-3 is-black'>*/}
//             {/*            <strong>Download</strong>*/}
//             {/*        </button>*/}
//             {/*    </div>*/}
//             </div>
//         );
//     }
// };
//
// export default Waveform;