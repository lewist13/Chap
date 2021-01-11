import React from "react";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import {
  getChannel,
  getMessage,
  SetChannel,
} from "../store/actions/ChannelActions";

const state = ({ serverState }) => serverState;
// const channelState = ({ channelState }) => channelState;

const actions = (dispatch) => {
  return {
    fetchChannel: (channel_id) => dispatch(getChannel(channel_id)),
    fetchMessage: (message_id) => dispatch(getMessage(message_id)),
    setChannel: (channel) => dispatch(SetChannel(channel)),
  };
};
// useEffect to channels, react router props to get server id

const Channel = (props) => {
  // useEffect(() => {
  //   props.servers.Channels = props.match.params;
  // }, [props.channelState]);
  // console.log(props.servers[0].Channels[0]);
  return (
    <div>uhh</div>
    // <div>
    //   {props.servers ? (
    //     props.servers.Channels.map((channel) => (
    //       <ul key={channel.id}>
    //         <Link
    //           to={`/channels/${channel.id}`}
    //           onClick={() => props.setChannel(channel)}
    //         >
    //           {channel.channel}
    //         </Link>
    //       </ul>
    //     ))
    //   ) : (
    //     <h3>Loading</h3>
    //   )}
    // </div>
  );
};

export default connect(state, actions)(Channel);
// create state for servers and channels
// one functions running to get channels for that server = useEffect
// onClick server name run get channels function
// within that function, setChannels
// channel variables pass in component of channel on server channels - channels
// props.channels

// [channels, setChannels]
