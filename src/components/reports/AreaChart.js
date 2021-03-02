import React from 'react'
import {Polar} from 'react-chartjs-2'


function AreaChart({dataLabels,dataValues}) {
    return (
        <div>
            <Polar
                data={{
                    labels:dataLabels,
                    datasets: [{
                        label: '# of Views',
                        data: dataValues,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)'
                        ],
                        borderWidth: 1.2
                    }]

                }}
                width={500}
                height={500}
                options={{
                    maintainAspectRatio:false,
                    
                }}
            />
        </div>
    )
}

export default AreaChart