import { useEffect, useState } from "react";
import vacationServices from "../../../../Services/vacationServices";
import "./ReportsPage.scss";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title, // none
    Tooltip,
    Legend // none
);

const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
            // position: 'bottom' as const,
        },
        title: {
            display: false,
            // text: '',
        },
    }
};

let labels = ['test'];

let data = {
    labels,
    datasets: [
        {
            label: '',
            data: [''],
            backgroundColor: 'transperent',
        },
    ],
};

interface ReportsDataModel {
    id: number;
    destination: string;
    description: string;
    startDate: string;
    endDate: string;
    price: number;
    image?: string;
    like: number;
}

function ReportsPage(): JSX.Element {

    const navigate = useNavigate();
    const user = useSelector((state: any) => state.authToken);
    const [reportsData, setReportsData] = useState<ReportsDataModel[] | null>(null);
    const [chartData, setChartData] = useState<any | null>(null);

    if (user.userRole === 0) {
        navigate("/")
    }

    useEffect(() => {
        vacationServices.getVacationAndLikes()
            .then((res: any) => {
                setReportsData(res)
            })
    }, [])

    useEffect(() => {

        if (reportsData) {
            setChartData(
                {
                    labels: reportsData.map((res: any) => `${res.id}-${res.destination}`),
                    datasets: [
                        {
                            label: 'Likes',
                            data: reportsData.map((res: any) => res.like),
                            backgroundColor: '#0f7a8a'
                        },
                    ]
                }
            )
        }

    }, [reportsData])


    return (
        <div className="ReportsPage">
            <h1>Admin Raports - {new Date().toLocaleDateString()}</h1>
            <Bar className="chart" options={options} data={chartData ? chartData : data} />
            <button className="chart-btn" onClick={() => navigate("/")}>Back To Vacation</button>
        </div>
    );
}

export default ReportsPage;
