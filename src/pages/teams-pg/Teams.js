import React, { useState, useEffect, useContext } from 'react';
import Table from '../../components/table-comp';
import { TeamsContext } from '../../components/provider-comp';

const Teams = () => {
  const [loading, setLoading] = useState(true);
  const data = useContext(TeamsContext);

  useEffect(() => {
    if (data) setLoading(false);
  }, [data]);

  return (
    <div className="wrapper">
      <h2>Teams</h2>
      <p>This information is intended for reference only.</p>
      <Table loading={loading} teams={data} />
      <br />
      <p>Add a new team to update data.</p>
    </div>
  );
};

export default Teams;
