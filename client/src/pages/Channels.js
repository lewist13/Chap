import react from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getChannel, getMessage } from "../store/actions/ChannelActions";

const state = ({ serverState }) => serverState;

const actions = (dispatch) => {
  return {
    fetchChannel: (channel_id) => dispatch(getChannel(channel_id)),
  };
};

const Channels = (props) => {
  console.log(props);
  return (
    <div>
      {props.selectedServer.Channels ? (
        props.selectedServer.Channels.map((channel) => (
          <li key={channel.id}>{channel.channel}</li>
        ))
      ) : (
        <h3>Loading</h3>
      )}
    </div>
  );
};

export default connect(state, actions)(Channels);
