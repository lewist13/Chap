import React, { useEffect } from "react";
import { getServer, deleteServer } from "../store/actions/ServerActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const actions = (dispatch) => {
  return {
    fetchServer: (server_id) => dispatch(getServer(server_id)),
    deleteServer: (server_id) => dispatch(deleteServer(server_id)),
  };
};
const state = ({ serverState }) => {
  return {
    serverState,
  };
};
const Server = (props) => {
  useEffect(() => {
    props.fetchServer(props.match.params.id);
  }, [props.serverState]);
  // console.log(props);
  console.log(props.serverState);

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await deleteServer(e.target.value);
    } catch (error) {
      throw error;
    }
    props.history.push("/users/profile");
  };
  return (
    <div>
      {props.serverState.servers.map((servers) => (
        <ul key={props.server.id}>
          <Link to={`/servers/${servers.id}`}>{servers.name}</Link>
        </ul>
      ))}
      <button value={props.server.id} onClick={handleDelete}>
        Delete Server
      </button>
    </div>
  );
};
export default connect(state, actions)(Server);
