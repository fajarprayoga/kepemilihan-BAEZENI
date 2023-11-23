import { UploadFile } from '@mui/icons-material'
import { Button, CircularProgress } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import Swal from 'sweetalert2'

// online 2PDF 
function SmallPdf() {


    const token = process.env.REACT_APP_TOKEN;
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const [excelFile, setExcelFile] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    // handle file
    const handleFileUpload = (event) => {
        setExcelFile(event?.target?.files)

    }

    const fetch = () => {
        if (excelFile != null && excelFile?.length > 0) {
            setIsLoading(true)
            const formData = new FormData();

            for (let index = 0; index < excelFile.length; index++) {
                formData.append(`excel_files[${index}]`, excelFile[index]);
            }
            // formData.append('excel_files', excelFile)
            axios.post(baseUrl + 'upload-excel-v1/', formData, {
                headers: {
                    Authorization: token,
                    "Content-Type": "multipart/form-data",
                }

            }).then((res) => {
                const failed = res?.data?.failed_filenames
                const unable = res?.data?.unable_to_insert_filenames
                const success = res?.data?.successful_filenames


                let messageSuccess = 'Success : [';
                let messageError = 'error : [';

                // success
                for (let index = 0; index < success?.length; index++) {
                    messageSuccess += `${success[index]}, `
                }

                // error 
                if (failed.length > 0 || unable > 0) {
                    const error = [...failed, ...unable];
                    for (let index = 0; index < error?.length; index++) {
                        messageError += `${error[index]?.filename} : (${error[index]?.error}), `
                    }
                }

                messageSuccess += ']'
                messageError += ']'

                Swal.fire({
                    title: "Info !!!",
                    text: messageSuccess,
                    footer: messageError
                });

            }).catch((err) => {
                Swal.fire({
                    icon: "error",
                    title: "Failed",
                    text: err?.response?.data?.error,
                });

            }).finally(() => { setIsLoading(false); setExcelFile(null) })
        }
    }
    return (
        <div>
            <h1 className='text-center font-bold text-indigo-700 text-4xl'>SMALL PDF or ILove PDF</h1>
            <div className='h-screen flex flex-col justify-center items-center' >
                {isLoading && (<CircularProgress />)}
                {!isLoading && (
                    <>
                        <input
                            type="file"
                            onChange={handleFileUpload}
                            multiple
                            accept=".xlsx"
                        />
                        <Button onClick={fetch} sx={{ marginTop: 2 }} variant='contained'  >SUBMIT  </Button>
                    </>
                )}
            </div>
        </div>
    )
}

export default SmallPdf