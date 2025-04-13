import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resultData = [
    {
      "name": "Ayaan",
      "physics": 85,
      "chemistry": 78,
      "biology": 92
    },
    {
      "name": "Diya",
      "physics": 91,
      "chemistry": 88,
      "biology": 95
    },
    {
      "name": "Rohan",
      "physics": 76,
      "chemistry": 69,
      "biology": 80
    },
    {
      "name": "Meera",
      "physics": 89,
      "chemistry": 94,
      "biology": 90
    },
    {
      "name": "Kabir",
      "physics": 72,
      "chemistry": 60,
      "biology": 65
    },
    {
      "name": "Sneha",
      "physics": 95,
      "chemistry": 97,
      "biology": 93
    },
    {
      "name": "Arjun",
      "physics": 68,
      "chemistry": 73,
      "biology": 70
    },
    {
      "name": "Ishita",
      "physics": 81,
      "chemistry": 85,
      "biology": 87
    },
    {
      "name": "Vivaan",
      "physics": 77,
      "chemistry": 74,
      "biology": 79
    },
    {
      "name": "Anaya",
      "physics": 88,
      "chemistry": 90,
      "biology": 91
    }
  ]
  

const ResultChart = () => {
    return (
        <div>
            <LineChart width={500} height={400} data={resultData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Line dataKey="physics"></Line>
                <Line dataKey="chemistry"></Line>
                <Line dataKey={'biology'} stroke='red'></Line>
            </LineChart>
        </div>
    );
};

export default ResultChart;