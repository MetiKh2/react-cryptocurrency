import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title as ChartTitle,
    Tooltip,
    Legend,
} from 'chart.js';
import {Col, Row, Typography} from "antd";
import {Line} from 'react-chartjs-2'
const {Title}=Typography
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ChartTitle,
    Tooltip,
    Legend
);
const LineChart = ({coinHistory,coinName,currentPrice}) => {
    console.warn(coinHistory?.data?.history)
    const  coinPrice=[];
    const  coinTimeStamp=[];
    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        coinPrice.push(coinHistory?.data?.history[i].price);
    }

    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        coinTimeStamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString());
        // console.warn(new Date(coinHistory?.data?.history[i].timestamp))
    }
    const data = {
        labels: coinTimeStamp,
        datasets: [
            {
                label: 'Price In USD',
                data: coinPrice,
                fill: false,
                backgroundColor: '#0071bd',
                borderColor: '#0071bd',
            },
        ],
    };
    const options = {
        scales: {
            y: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };

    return (
        <>
            <Row className={'chart-header'}>
                <Title level={2} className={'chart-title'}>
                    {coinName} Price Chart
                </Title>
                <Col className={'price-container'}>
                    <Title level={5} className={'price-change'}>
                        {coinHistory?.data?.change}
                    </Title>
                    <Title level={5} className={'current-price'}>
                        Current {coinName} Price : $ {currentPrice}
                    </Title>
                </Col>
            </Row>
            <Line data={data} options={options} />
        </>
    );
};

export default LineChart;