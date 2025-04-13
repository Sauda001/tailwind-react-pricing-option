import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const MarksCharts = ({ marksPromise }) => {

    const marksdataRes = use(marksPromise);
    const marksData = marksdataRes.data;

    //data processing for the charts
    const marksChartData = marksData.map(studentData => {
        const student = {
            name: studentData.name,
            physics: studentData.marks.physics,
            chemistry: studentData.marks.chemistry,
            biology: studentData.marks.biology
        }
        const avg = (student.physics + student.chemistry + student.biology) / 3;
        student.avg = avg;
        return student;
    })

    console.log(marksChartData);

    return (
        <div>
            <BarChart width={500} height={400} data={marksChartData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Bar dataKey="avg" fill='yellow'></Bar>
                <Bar dataKey="chemistry" fill='blue'></Bar>
            </BarChart>
        </div>
    );
};

export default MarksCharts;