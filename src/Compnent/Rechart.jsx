"use client"
import { AppContext } from '@/Context/apps.provider';
import React, { useContext, useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Legend, LineChart, Line, XAxis, YAxis } from 'recharts';

const COLORS = ['#7C3AED', '#1F4F46', '#34A853'];

const Rechart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const fetching = async () => {
            const res = await fetch('/friend.json');
            const prom = await res.json();
            setCart(prom);
        };

        fetching();
    }, []);

    const {det,click} = useContext(AppContext);
    console.log(click)
    return (
        <div>
            <div className="w-11/12 mx-auto">
                <div className="w-11/12 my-20 mx-auto">
                    <h2 className="text-6xl font-semibold">Friendship Analytics</h2>
                </div>

                <div className="flex items-center justify-center flex-col w-11/12 mx-auto gap-5 rounded-2xl p-20 mb-6 bg-[#fff]">

                    <PieChart width={500} height={300}>
                        <Pie
                            data={click}
                            dataKey="id"
                            nameKey="status"
                            cx="50%"
                            cy="50%"
                            innerRadius={80}
                            outerRadius={100}
                        >
                            {cart.map((entry, index) => (
                                <Cell
                                    key={index}
                                    fill={COLORS[index % COLORS.length]}
                                />
                            ))}
                        </Pie>

                        {/* <Legend /> */}
                    </PieChart>
                    <div className="flex items-center justify-center gap-5">
                        <h3 className="text-2xl font-semibold flex items-center gap-2"><div className='h-3 w-3 rounded-full bg-[#1F4F46]'></div>Text</h3>
                        <h3 className="text-2xl font-semibold flex items-center gap-2"><div className='h-3 w-3 rounded-full bg-[#7C3AED]'></div>Call</h3>
                        <h3 className="text-2xl font-semibold flex items-center gap-2"><div className='h-3 w-3 rounded-full bg-[#34A853]'></div>Video</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rechart;