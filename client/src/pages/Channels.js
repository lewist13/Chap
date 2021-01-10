import React from "react";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import {
  getChannel,
  getMessage,
  SetChannel,
} from "../store/actions/ChannelActions";

const state = ({ channelState }) => channelState;

const actions = (dispatch) => {
  return {
    fetchChannel: (channel_id) => dispatch(getChannel(channel_id)),
    fetchMessage: (message_id) => dispatch(getMessage(message_id)),
    setChannel: (channel) => dispatch(SetChannel(channel)),
  };
};

const Channel = (props) => {
  console.log(props);
  return (
    <h1>Loading</h1>
    // <div>
    //   {props.channelState.channels ? (
    //     props.channelState.channels.map((channel) => (
    //       <li key={channel.id}>{channel.channel}</li>
    //     ))
    //   ) : (
    //     <h3>Loading</h3>
    //   )}
    // </div>
  );
};

export default connect(state, actions)(Channel);
