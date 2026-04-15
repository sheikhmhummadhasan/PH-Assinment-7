"use client"
import { AppContext } from '@/Context/apps.provider';
import React, { useContext, useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Legend, LineChart, Line, XAxis, YAxis } from 'recharts';

const COLORS = ['#7C3AED', '#1F4F46', '#34A853'];

const Rechart = () => {

    const { click } = useContext(AppContext);
    // console.log(click)

    const chart = [
        {
            status: "Text",
            value: click.filter(item => item.type === 'text').length
        },
        {
            status: "Call",
            value: click.filter(item => item.type === 'call').length
        },
        {
            status: "Video",
            value: click.filter(item => item.type === 'video').length
        },
    ]
    return (
        <div>
            <div className="w-11/12 mx-auto">
                <div className="w-11/12 my-20 mx-auto">
                    <h2 className="text-6xl font-semibold">Friendship Analytics</h2>
                </div>
                <div className="flex items-center justify-center flex-col w-11/12 mx-auto gap-5 rounded-2xl p-20 mb-6 bg-[#fff]">
                    <PieChart width={500} height={300}>
                        <Pie
                            data={chart}
                            dataKey="value"
                            nameKey="status"
                            cx="50%"
                            cy="50%"
                            innerRadius={80}
                            outerRadius={100}
                            cornerRadius={30}
                        >
                            {chart?.map((entry, index) => (
                                <Cell
                                    key={index}
                                    fill={COLORS[index % COLORS.length]}
                                />
                            ))}
                        </Pie>
                        <Legend
                            iconType="circle"
                            wrapperStyle={{
                                fontSize: "18px",
                                fontWeight: "600"
                            }}
                        />
                    </PieChart>

                </div>
            </div>
        </div>
    );
};

export default Rechart;