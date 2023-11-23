import { CardContent, Checkbox, Chip, Card as CardMUI } from '@mui/material'
import React, { useState } from 'react'

function Card({ handleSelect, user, index }) {
    const [check, setCheck] = useState(false)
    const handleCheckBox = (event, data) => {
        setCheck(data)
        // handleSelect(id)
    }

    return (
        <div>
            <div className='flex items-center p-0 md:p-2 overflow-x-hidden shadow-md py-2' >
                <div>
                    {/* check box */}
                    <Checkbox id={`checkBox${index}`} value={check} onChange={handleCheckBox} />
                </div>
                <label htmlFor={`checkBox${index}`} className='overflow-x-auto'>

                    {/* content */}
                    <h2 className='mb-1 text-sm' >ADI GABEL LABORE </h2>
                    <div className='flex gap-x-1 ' >
                        <Chip sx={{ fontSize: 10, backgroundColor: '#2196f3', color: "white" }} label="TPS: 153" variant="outlined" />
                        <Chip sx={{ fontSize: 10 }} label="L" variant="outlined" />
                        <Chip sx={{ fontSize: 10 }} label="20 Th" variant="outlined" />
                        <Chip sx={{ fontSize: 10 }} label="RT/Rw 010/010" variant="outlined" />
                    </div>
                </label>
            </div>
        </div >
    )
}

export default Card