import React, { useEffect } from "react";
import {
  getServer,
  deleteServer,
  SetServer,
} from "../store/actions/ServerActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Channels from "./Channels";
import Messages from "./Messages";

// const [channels, setChannels] = useState([])
// const [servers, setServers] = useState([])

// const getChannelsByServer = (server_id) => {
//   let channels = server_id
//   return channels
// }

const actions = (dispatch) => {
  return {
    fetchServer: (server_id) => dispatch(getServer(server_id)),
    deleteServer: (server_id) => dispatch(deleteServer(server_id)),
    setServer: (server) => dispatch(SetServer(server)),
  };
};
const state = ({ serverState }) => {
  return {
    serverState,
  };
};
const Server = (props) => {
  // useEffect(() => {
  //   props.fetchServer(props.match.params.id);
  // }, []);
  // console.log(props);
  // console.log(props);

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await deleteServer(e.target.value);
    } catch (error) {
      throw error;
    }
    props.history.push("/users/profile");
  };
  // console.log(props.serverState.servers[0].Channels[0]);
  console.log(props);
  return (
    <div>
      {props.serverState.servers
        ? props.serverState.servers.map((servers) => (
            <ul>
              <Link key={servers.id} to={`/servers/${servers.id}/messages`}>
                {servers.server}
              </Link>
              <Messages servers={servers}></Messages>
            </ul>
          ))
        : null}
      {/* <button value={props.server.id} onClick={handleDelete}>
        Delete Server
      </button> */}
    </div>
  );
};
export default connect(state, actions)(Server);
