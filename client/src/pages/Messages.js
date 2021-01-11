import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getMessages, SetMessage } from "../store/actions/MessageActions";

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
  // useEffect(() => {
  //   props.servers.Channels = props.match.params;
  // }, [props.channelState]);
  // console.log(props.servers[0].Channels[0]);
  return (
    <div>
      {props.servers ? (
        props.servers.messages.map((message) => (
          <ul key={message.id}>
            <Link
              to={`/messages/${message.id}`}
              onClick={() => props.setMessages(message)}
            >
              {message.message}
            </Link>
          </ul>
        ))
      ) : (
        <h3>Loading</h3>
      )}
    </div>
  );
};

export default connect(state, actions)(Message);
// create state for servers and channels
// one functions running to get channels for that server = useEffect
// onClick server name run get channels function
// within that function, setChannels
// channel variables pass in component of channel on server channels - channels
// props.channels

// [channels, setChannels]
