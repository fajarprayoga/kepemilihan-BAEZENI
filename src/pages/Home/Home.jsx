import { Autocomplete, Box, Button, Card, CardContent, Checkbox, Chip, FormControl, InputLabel, Tab, Tabs, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Search from './Search';
import Report from './Report';
import { Link } from 'react-router-dom';


function Home() {

    // seacrh || parent
    const [tab, setTabs] = React.useState('search');
    const [isLoading, setIsLoading] = useState(true)
    const [users, setUsers] = useState([])
    const containerRef = useRef();
    const handleChange = (event, newValue) => {
        setTabs(newValue);
    };

    const fetchData = () => {
        axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
            setUsers([...users, ...res?.data])
        }).catch((err) => console.log(err)).finally(() => setIsLoading(false))
    }

    // useEffect(() => {

    //     fetchData()
    // }, [])


    return (
        <div className='max-h-max overflow-hidden '>
            <div className='flex flex-col md:flex-row gap-4 ' >
                <Link to={'small-pdf'} >
                    <Button variant='contained' sx={{ backgroundColor: '#8bc34a' }} >Small PDF</Button>
                </Link>
                <Link to={'2pdf'} >
                    <Button variant='contained' sx={{ backgroundColor: '#ffcf33' }} > 2PDF</Button>
                </Link>
            </div>
            <div className='' >
                <Box sx={{ width: '100%' }}>
                    <Tabs
                        value={tab}
                        onChange={handleChange}
                        aria-label="wrapped label tabs example"
                    >
                        <Tab value="search" label="Search" />
                        <Tab value="report" label="Report" />
                    </Tabs>
                </Box>

                {tab == 'search' && (
                    <Search fetchData={fetchData} />
                )}
                {tab == 'report' && (
                    <Report />
                )}
            </div>
            <div className='flex justify-end mt-4' >
                {tab == 'search' && <Button variant='contained' sx={{ backgroundColor: '#8bc34a' }} >Save</Button>}
                {tab == 'report' && <Button variant='contained' sx={{ backgroundColor: '#ffcf33' }} >Remove</Button>}
            </div>
        </div>
    )
}

export default Home


