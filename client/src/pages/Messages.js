import React from "react";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import { getMessages, SetMessage } from "../store/actions/MessageActions";
import "../styles/Messages.css";

const state = ({ serverState }) => serverState;
// const channelState = ({ channelState }) => channelState;

const actions = (dispatch) => {
  return {
    // fetchChannel: (server_id) =>
    //   dispatch(getChannel(server_id)),
    fetchMessage: (server_id) => dispatch(getMessages(server_id)),
    // setChannel: (channel) => dispatch(SetChannel(channel)),
    setMessage: (message) => dispatch(SetMessage(message)),
  };
};
// useEffect to channels, react router props to get server id

const Message = (props) => {
  // const mappingServ = () => {
  //   if (props.servers) {
  //     props.servers.map((serv) => {
  //       console.log(serv);
  //     });
  //   }
  //   mappingServ();
  // useEffect(() => {
  //   props.servers.Channels = props.match.params;
  // }, [props.channelState]);
  // console.log(props.servers[0].Channels[0]);
  // console.log(props.servers);
  return (
    <div className="content">
      <a href="/">Go Back</a>
      <ul>
        <h4 className="title">Strengths/Weaknesses of a Capricorn</h4>
        <h5>Finances: </h5>
        <li>
          The Capricorn man or woman loves the idea of money, amassing wealth
          and obtaining financial security but ironically enough they will spend
          it just as fast as they earn it due to their materialistic nature.
        </li>
        <h5> Ambitious, Hardworking and Loyal: </h5>
        <li>
          Representing cardinal earth, Capricorn will go to great length to
          achieve whatever it is that they have their eyes on and ground their
          dreams in reality, wether that be pursuing a person or a goal, they
          will design grand and elaborate plans and schemes to execute in order
          to get what they want.
        </li>
        <h5> Critical: </h5>
        <li>
          Having high expectations for themselves, they may also project this
          intensity and pressure onto others and be overly critical of the
          people around them.
        </li>
        <h5> Overly Serious: </h5>
        <li>
          Capricorn’s can appear to have a hard external appearance serious
          demeaned that can come off as standoffish aloof and overly very ridged
          and reserved and have trouble letting go and being emotionally
          vulnerable with others which can also give them an aura of melancholy
          and sadness
        </li>
        <h5>Caring and Compassionate:</h5>
        <li>
          Because they themselves are quite shy and guarded they make great
          advice givers to others who struggle with their emotions even though
          they will never outwardly admit to their own personal conflicts and
          issues to a person they do not trust.
        </li>
        <h5> Ruthlessness: </h5>
        <li>
          Capricorns are known for being cold and at time be ruthless in their
          pursuits, not caring who or what they may have to use at their
          disposal and this is where their relentless drive towards success and
          accomplishing their goals will backfire.
        </li>
        <h5> Pessimism, Fear and Greed: </h5>
        <li>
          These traits may arise in a Capricorn who’s security feels threatened
          and has fell into self-destructive thinking patterns, and if they
          don’t have someone in their life they can openly talk to they may fall
          into depression and their more negative traits will me expressed.
        </li>
      </ul>
    </div>
  );
};
// };
export default connect(state, actions)(Message);
// create state for servers and channels
// one functions running to get channels for that server = useEffect
// onClick server name run get channels function
// within that function, setChannels
// channel variables pass in component of channel on server channels - channels
// props.channels

// [channels, setChannels]
