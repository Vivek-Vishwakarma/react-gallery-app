import React from 'react'
import Store from '../hooks/Store'
import '../App.css'

const Image = ({ setSelectedImage }) => {
    const { docs } =  Store('images')
    console.log(docs)

    return (
        <div className="grid">
            { docs && docs.map(doc => (
                <div className="images" key = {doc.id}
                onClick={() => setSelectedImage(doc.url)}>
                    <img src={doc.url} alt="your images"/>
                </div>
            )) }
        </div>
    )
}

export default Image
