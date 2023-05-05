import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const States = () => {
    const [counter, setCounter] = useState(false)
    return (
        <div className='px-4 my-12'>
            <h1 className='text-center font-bold text-blue-700 text-5xl'>Food Statistics</h1>
            <div className='m-8 grid grid-cols-1 lg:grid-cols-3 gap-6'>
                <div className="card w-96 bg-base-100 shadow-md">
                    <figure><img className='w-28 h-28' src="https://i.ibb.co/bJMnbLX/images.png" alt="" /></figure>
                    <div className="card-body text-center">
                        <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
                            <h2 className=" font-bold text-2xl">
                                {counter && <CountUp start={0} end={100} duration={10} delay={0}>
                                </CountUp>}
                                <sup>+</sup>
                            </h2>
                        </ScrollTrigger>
                        <p className='font-bold text-lg'>Our Total Foods</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-md">
                    <figure><img className='w-28 h-28' src="https://i.ibb.co/XZF8W4N/1328979-200.png" alt="" /></figure>
                    <div className="card-body text-center">
                        <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
                            <h2 className="font-bold text-2xl">
                                {counter && <CountUp start={0} end={999} duration={10} delay={0}>
                                </CountUp>}
                                <sup>+</sup>
                            </h2>
                        </ScrollTrigger>
                        <p className='font-bold text-lg'>Our Total Review</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-md">
                    <figure><img className='w-28 h-28' src="https://i.ibb.co/2yQ814G/6712276.png" alt="" /></figure>
                    <div className="card-body text-center">
                        <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
                            <h2 className="font-bold text-2xl">
                                {counter && <CountUp start={0} end={10} duration={10} delay={0}>
                                </CountUp>}
                                <sup>+</sup>
                            </h2>
                        </ScrollTrigger>
                        <p className='font-bold text-lg'>Our Total Branch</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default States;