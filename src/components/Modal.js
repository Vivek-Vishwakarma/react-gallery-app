import React from 'react'

const Modal = ({ selectImage, setSelectedImage }) => {

    const clicked = (e) =>{
        if(e.target.classList.contains("modal")){
            setSelectedImage(null)
        }
    }
    return (
        <div className="modal" onClick={clicked}>
            <img src={selectImage} alt="zoomed in"/>
        </div>
    )
}

export default Modal
