"use client"
import { CldImage, CldUploadWidget } from 'next-cloudinary'
import React, { useState } from 'react'

interface UploadInfo{
    public_id: string
}

const UploadPage = () => {
    const [publicId, setPublicId] = useState('')

    return (
        <>
        {publicId &&
        <CldImage src={publicId} width={300} height={300} alt=''/>}
        

        <CldUploadWidget 
        uploadPreset='fsw3is9c'
        onUpload={(result, widget)=>{
            if(result.event !=='success') return

            const info = result.info as UploadInfo 
            setPublicId(info.public_id)}}>

            {({ open }) => <button
                onClick={() => open()}
                className='btn btn-primary'> 上傳 </button>}
        </CldUploadWidget>


        </>
    )
}

export default UploadPage