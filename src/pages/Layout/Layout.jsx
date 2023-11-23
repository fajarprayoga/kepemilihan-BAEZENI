import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

function Layout() {
    const [isLoaded, setIsLoaded] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(false);
        }, 300);
    }, []);

    const Loading = () => {
        return <div className='flex h-screen justify-center items-center  ' >
            <CircularProgress />
        </div>
    }

    if (isLoaded) {
        return <Loading />
    } else {
        return (
            // <section className=' h-screen p-8 bg-gradient-to-r from-[#b296ee] to-[#73739B]' >
            <section className=' p-8 ' >
                <Outlet />
            </section>
        )
    }
}

export default Layout
