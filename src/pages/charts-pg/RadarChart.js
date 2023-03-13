import React, { useEffect, useState, useContext } from 'react';
import Radar from 'react-d3-radar';
import { Chart } from './Graph.styles';
import { SkeleLoader } from '../../components/loader-comp';
import { TeamsContext } from '../../components/provider-comp';

const RadarChart = () => {
  const teamsData = useContext(TeamsContext);
  const [sets, setSets] = useState([]);
  const [variables, setVariables] = useState([]);
  const [loading, setLoading] = useState(true);

  const transformedSets = (data) => {
    let teams = data.map((team, index) => ({
      key: index,
      label: `${team.teamNo}`,
      values: {
        score: team.score,
        wins: team.wins,
        losses: team.losses,
        draws: team.draws,
      },
    }));
    setSets(teams);
  };

  const transformedVariables = (obj) => {
    let isVars = Object.keys(obj).slice(1);
    let tvars = isVars.map((itm) => ({
      key: itm,
      label: itm,
    }));
    setVariables(tvars);
  };

  useEffect(() => {
    if (teamsData) {
      transformedSets(teamsData);
      transformedVariables(teamsData[0]);
      setLoading(false);
    }
  }, [teamsData]);

  if (loading) return <SkeleLoader />;

  return (
    <>
      <Chart>
        <Radar
          width={700}
          height={490}
          padding={20}
          domainMax={10}
          highlighted={null}
          onHover={(point) => {
            if (point) {
              console.log('hovered over a data point');
            } else {
              console.log('not over anything');
            }
          }}
          data={{
            variables,
            sets,
          }}
        />
      </Chart>
    </>
  );
};

export default RadarChart;
