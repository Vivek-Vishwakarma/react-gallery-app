import React from 'react'
import { useEffect } from "react";
import useStorage from '../hooks/Storage'

function Progress({ file, setFile}) {
    const {url, progress} = useStorage(file)
    useEffect(() => {
        if(url){
            setFile(null)
        }
    }, [url, setFile])
    return (
        <div className="progress" style={{width : progress + '%'}}></div>
    )
}

export default Progress
