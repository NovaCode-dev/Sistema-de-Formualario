import React from 'react';
import { ChartEndpointsBySystem } from './charts/ChartEndpointsBySystem';
import { ChartUsageDistribution } from './charts/ChartUsageDistribution';
import { ChartTopEndpoints } from './charts/ChartTopEndpoints';
import { ChartCouplingIndex } from './charts/ChartCouplingIndex';
import { ChartOrphanEndpoints } from './charts/ChartOrphanEndpoints';
import { ChartIntegrationComplexity } from './charts/ChartIntegrationComplexity';
import { ChartReadWriteRatio } from './charts/ChartReadWriteRatio';
import { ChartResponseTimeline } from './charts/ChartResponseTimeline';
import { ChartMixedUsageEndpoints } from './charts/ChartMixedUsageEndpoints';
import { SurveyResult } from '../types/results';

interface ResultsChartsProps {
  results: SurveyResult[];
}

export const ResultsCharts: React.FC<ResultsChartsProps> = ({ results }) => {
  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartEndpointsBySystem results={results} />
        <ChartUsageDistribution results={results} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartTopEndpoints results={results} />
        <ChartCouplingIndex results={results} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartIntegrationComplexity results={results} />
        <ChartOrphanEndpoints results={results} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartReadWriteRatio results={results} />
        <ChartResponseTimeline results={results} />
      </div>

      <div className="grid grid-cols-1 gap-6">
        <ChartMixedUsageEndpoints results={results} />
      </div>
    </div>
  );
};
export default ResultsCharts;
