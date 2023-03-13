import React, { createContext, useState, useEffect } from 'react';
import { teamsUrl } from '../../utils/teamsHelpers';
import axios from 'axios';

// context object
const TeamsContext = createContext();

// provider component
const TeamsProvider = ({ children }) => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const config = {
      method: 'get',
      url: teamsUrl,
    };
    const getTeams = () => {
      axios(config)
        .then((response) => {
          if (response) {
            setTeams(response?.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getTeams();
  }, []);

  console.log('teams provider data ', teams);

  return <TeamsContext.Provider value={teams}>{children}</TeamsContext.Provider>;
};

export { TeamsContext, TeamsProvider };
