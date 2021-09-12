import './App.css';
import './components/Upload'
import Upload from './components/Upload';
import Image from './components/Image'
import Modal from './components/Modal';
import { useState } from 'react';

function App() {

  const [selectImage , setSelectedImage] = useState(null)

  return (
    <>
      <h1 className="title">V3 React Gallery</h1>
      <p>Click here to upload</p>
      <div className="container">
        <Upload />
      </div>
      <Image setSelectedImage={setSelectedImage}/>
      {selectImage && <Modal selectImage={selectImage} setSelectedImage={setSelectedImage}/>}
    </>
  );
}

export default App;
