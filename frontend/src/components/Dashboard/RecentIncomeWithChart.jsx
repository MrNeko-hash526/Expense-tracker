import React, { use, useState } from 'react'
import CustomPieChart from '../Charts/CustomPieChart'
import { useEffect } from 'react';



const COLORS = ["#875CF5","#FA2C37","#FF6900","#4f39f6"];
const RecentIncomeWithChart = ({data, totalIncome}) => {


    const [chartData,setChartData] = useState([]);

    const prepareChartData = () => {
        const dataArr = data?.map((item) => ({
            label: item?.source,
            amount: item?.amount,
        }));
        setChartData(dataArr);
    };
     
    useEffect(() => {
        prepareChartData();

        return () =>{};

    }, [data]);

  return (
    <div className='card'>
        <div className='flex items-center justify-between'>
             <h5 className='text-lg'>Last 60 Days Income</h5>
        </div>
        <CustomPieChart
            data = {chartData}
            label ="Total Income"
            totalAmount = {`$${totalIncome}`}
            colors = {COLORS}
            showTextAnchor
        /> 
    </div>
  )
}

export default RecentIncomeWithChart