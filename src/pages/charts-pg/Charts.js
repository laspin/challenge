import React, { useState } from 'react';
import BarChart from './BarChart';
import RadarChart from './RadarChart';
import {
  GraphContainer,
  ChartWrapper,
  Label,
  Select,
  Option,
  FormControl,
  Button,
} from './Graph.styles';

const Charts = () => {
  const [chart, setChart] = useState('bar');

  const handleChartToggle = () => setChart(chart === 'bar' ? 'radar' : 'bar');

  return (
    <GraphContainer>
      <h2>Charts</h2>
      <ChartWrapper>
        <FormControl>
          <Label htmlFor="chart-type">Select chart type</Label>
          <Select
            id="chart-type"
            value={chart}
            onChange={(e) => setChart(e.target.value)}
          >
            <Option value="bar">Bar chart</Option>
            <Option value="radar">Radar chart </Option>
          </Select>
        </FormControl>

        {chart === 'bar' ? <BarChart /> : <RadarChart />}
      </ChartWrapper>
      <Button onClick={handleChartToggle}>Toggle Charts</Button>
    </GraphContainer>
  );
};

export default Charts;
