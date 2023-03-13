import React, { useState } from 'react';
import { TeamContainer, CreateForm, InputGroup, CreateBtn } from './Team.styles';
import { handlePostData } from '../../utils/handlePostData';
import { teamsInitState, teamsUrl } from '../../utils/teamsHelpers';

const AddTeamComp = () => {
  const [team, setTeam] = useState(teamsInitState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    return setTeam((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await handlePostData(team, teamsUrl);
      console.log('New team record created: ', result);
      setTeam(teamsInitState);
      return result;
    } catch (err) {
      console.log('Error creating team record ', err);
    }
  };

  return (
    <TeamContainer>
      <h2>Add Team</h2>
      <p>
        <strong>First-time-right</strong> only available at this time.
      </p>
      <CreateForm onSubmit={handleSubmit}>
        <InputGroup>
          <label htmlFor="teamNo">Team No</label>
          <input
            onChange={handleChange}
            placeholder="Enter team"
            type="text"
            value={team?.teamNo}
            autoComplete="on"
            name="teamNo"
            className="form-control"
          />
        </InputGroup>
        <InputGroup>
          <label htmlFor="score">Team score</label>
          <input
            onChange={handleChange}
            type="number"
            value={team?.score}
            placeholder="Enter team score"
            name="score"
            autoComplete="on"
            className="form-control"
          />
        </InputGroup>
        <InputGroup>
          <label htmlFor="wins">Team wins</label>
          <input
            onChange={handleChange}
            type="number"
            value={team?.wins}
            placeholder="Enter team wins"
            name="wins"
            autoComplete="on"
            className="form-control"
          />
        </InputGroup>
        <InputGroup>
          <label htmlFor="losses">Team losses</label>
          <input
            onChange={handleChange}
            type="number"
            value={team?.losses}
            placeholder="Enter team losses"
            name="losses"
            autoComplete="on"
            className="form-control"
          />
        </InputGroup>
        <InputGroup>
          <label htmlFor="draws">Team draws</label>
          <input
            onChange={handleChange}
            type="number"
            value={team?.draws}
            placeholder="Enter team draws"
            name="draws"
            autoComplete="on"
            className="form-control"
          />
        </InputGroup>
        <CreateBtn>Add Team</CreateBtn>

        <span>
          Please double check your data. You will not be able to edit it once submitted.
        </span>
      </CreateForm>
    </TeamContainer>
  );
};

export default AddTeamComp;
