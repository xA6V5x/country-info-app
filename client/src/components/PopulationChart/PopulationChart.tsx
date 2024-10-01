import React from 'react';
import { Line } from 'react-chartjs-2';
import {
     Chart as ChartJS,
     LinearScale,
     PointElement,
     LineElement,
     Tooltip,
     Legend,
     Title,
     CategoryScale,
} from 'chart.js';
import styles from './page.module.css';

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend, Title, CategoryScale);

interface PopulationChartProps {
     populationData: { year: number; value: number }[];
}

export const PopulationChart = ({ populationData }: PopulationChartProps) => {
     const data = {
          labels: populationData.map(data => data.year.toString()),
          datasets: [
               {
                    label: 'Population',
                    data: populationData.map(data => data.value),
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    fill: true,
               },
          ],
     };

     const options = {
          responsive: true,
          plugins: {
               legend: {
                    position: 'top' as const,
               },
               title: {
                    display: true,
                    text: 'Population in time',
               },
          },
     };

     return <Line data={data} options={options} className={styles.line} />;
};
