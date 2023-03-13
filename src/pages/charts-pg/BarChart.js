import React, { useState, useEffect, useContext } from 'react';
import * as d3 from 'd3';
import { Chart } from './Graph.styles';
import { SkeleLoader } from '../../components/loader-comp';
import { TeamsContext } from '../../components/provider-comp';

const BarChart = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const teamsData = useContext(TeamsContext);

  const getData = (arr) => setData(arr);

  useEffect(() => {
    if (teamsData) {
      setLoading(false);
      getData(teamsData);
    }
  }, [teamsData]);

  const getColor = (score) => {
    if (score < 10) {
      return 'rgba(75,150,255,0.67)';
    } else if (score >= 10 && score < 15) {
      return 'rgba(83,86,97,0.67)';
    } else if (score >= 15) {
      return 'rgba(186,43,34,0.67)';
    }
  };

  useEffect(() => {
    const margin = { top: 20, right: 40, bottom: 30, left: 50 };
    const width = 710 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

    const svg = d3
      .select('#chart')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    const x = d3.scaleBand().range([0, width]).padding(0.1);
    const y = d3.scaleLinear().range([height, 0]);

    x.domain(data.map((d) => d.teamNo));
    y.domain([0, d3.max(data, (d) => d.score)]);

    svg
      .append('g')
      .attr('transform', 'translate(0,' + height + ')')
      .call(d3.axisBottom(x));

    svg.append('g').call(d3.axisLeft(y));

    svg
      .selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (d) => x(d.teamNo))
      .attr('width', x.bandwidth())
      .attr('y', (d) => y(d.score))
      .attr('height', (d) => height - y(d.score))
      .attr('fill', (d) => getColor(d.score));
  }, [data]);

  if (loading) return <SkeleLoader />;

  return (
    <Chart>
      <svg id="chart"></svg>
    </Chart>
  );
};

export default BarChart;
