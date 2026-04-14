'use client'
import { AppContext } from '@/Context/apps.provider';
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';
import { FaRegBell, FaVideo } from 'react-icons/fa';
import { FaRegMessage } from 'react-icons/fa6';
import { FiArchive } from 'react-icons/fi';
import { MdOutlineCall } from 'react-icons/md';
import { RiDeleteBinLine } from 'react-icons/ri';

const DeatilCard = ({ detail }) => {

    const [frd, setFrd] = useState([])

    const handelfetching = async () => {
        const res = await fetch('/friend.json');
        const prom = await res.json();
        // console.log(prom)
        setFrd(prom)
    }

    useEffect(() => {
        handelfetching();
    }, []);

    const e = frd.find(e => e.id == detail)

    const {click,setClick,det,setDet} = useContext(AppContext);

    function handelclick(elem){
        setClick([...click,elem])
        setDet([...det,e])
    }

    if (!e) {
        return <div>Loading...</div>;
    }


    const btns = [
        {
            id:1,
            Call: <MdOutlineCall />,
            text: "Call"
        },
        {
            id:2,
            Call: <FaRegMessage />,
            text: "Text"
        },
        {
            id:3,
            Call: <FaVideo />,
            text: "Video"
        }
    ]
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-11/12 mx-auto my-20 ">
                <div className="flex flex-col items-center justify-center">
                    <div className=" w-11/12 flex md:flex flex-col p-3 text-center items-center justify-center gap-2 box rounded-2xl py-3 w-5/12 ">
                        <Image src={e.picture} alt='hero' height={100} width={100} />
                        <h2 className="text-3xl font-semibold">{e.name}</h2>
                        <h4 className={
                            e.status === 'overdue' ?
                                'text-xl bg-[#ef4444] px-2 rounded-full text-white'
                                : e.status === 'almost due'
                                    ? 'text-xl bg-[#efad44] px-2 rounded-full text-white' :
                                    'text-xl bg-[#244d3f] px-2 rounded-full text-white'}>
                            {e.status}</h4>
                        <div className="flex items-center gap-2">
                            <p className=' font-semibold bg-[#CBFADB] py-1 px-2 rounded-full'>{e.tags[0]}</p>
                            <p className=' font-semibold bg-[#CBFADB] py-1 px-2 rounded-full'>{e.tags[1]}</p>
                        </div>
                        <p className='text-[#7e7e7e]'>{e.bio} days</p>
                    </div>
                    <div className="flex flex-col items-start justify-center mt-4 gap-2">
                        <button className=" w-full md:py-2 w-5/12 btn"><FaRegBell /> Snooze 2 weeks</button>
                        <button className=" w-full md:py-2 w-5/12 btn"><FiArchive /> Archive</button>
                        <button className=" w-full md:py-2 w-5/12 btn text-red-500"><RiDeleteBinLine /> Delete</button>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-5">
                    <div className="flex w-12/12 items-center justify-between gap-3 p-7 rounded-xl box">
                        <div className="text-center p-5 box rounded-xl">
                            <h1 className='text-3xl font-bold'>{e.days_since_contact}</h1>
                            <p className='font-semibold'>Days Since Contact</p>
                        </div>
                        <div className="text-center p-5 box rounded-xl">
                            <h1 className='text-3xl font-bold'>{e.goal}</h1>
                            <p className='font-semibold'>Goal (Days)</p>
                        </div>
                        <div className="text-center p-5 box rounded-xl">
                            <h1 className='text-3xl font-bold'>{e.next_due_date}</h1>
                            <p className='font-semibold'>Next Due</p>
                        </div>
                    </div>
                    <div className="flex p-7 box rounded-xl w-12/12 items-center justify-between">
                        <div className="flex flex-col justify-center items-start">
                            <p className='text-xl font-semibold'>Relationship Goal</p>
                            <p className='text-xl font-semibold'>Connect every 30 days</p>
                        </div>
                        <button className='btn'>Edit</button>
                    </div>
                    <div className="w-12/12 p-7 box rounded-xl">
                        <h1 className='text-2xl font-semibold'>Click Cheack in</h1>
                        <div className="flex items-center justify-between mt-4">
                            {
                                btns.map((elem) => {
                                    return (
                                        <div onClick={()=>handelclick(elem)} key={elem.id} className="cursor-pointer p-5 flex items-center w-3/12 box rounded-xl justify-center flex-col gap-1">
                                            <h2 className='text-3xl'>{elem.Call}</h2>
                                            <p className='text-2xl font-semibold'>{elem.text}</p>
                                        </div>
                                    )
                                })
                            }


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeatilCard;