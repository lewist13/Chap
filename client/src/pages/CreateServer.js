import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createServer } from "../store/actions/ServerActions";

const state = ({ serverState }) => {
    return { serverState };
}

  const actions = (dispatch) => {
    return {
      server: (formData) => dispatch(createServer(formData)),
    };
  };
    const CreateServer = (props) => {
        const { server } = props;
        const [serverName, setServerName] = useState("")
    }

    const handleName = (e) => {
        setServerName(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            server({
                user_id: props.currentUser.user.id,
                serverName: serverName
            })
        } catch (error) {
            
        }
    }
};
