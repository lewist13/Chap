import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
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
// useEffect to channels, react router props to get server id

const Channel = (props) => {
  useEffect(() => {
    const { server_id } = props.match.params;
    console.log(props);
  }, [props.channelState]);

  return (
    <div>
      {props.channels ? (
        props.channels.map((channels) => (
          <ul key={channels.id}>
            <Link
              to={`/channels/${channels.id}`}
              onClick={() => props.setChannel(channels)}
            >
              {channels.channel}
            </Link>
          </ul>
        ))
      ) : (
        <h3>Loading</h3>
      )}
    </div>
  );
};

export default connect(state, actions)(Channel);
