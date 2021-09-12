import React , {useState} from 'react'
import Progress from './Progress'

function Upload() {
    const [file , setFile] = useState(null)
    const [error , setError] = useState(null)

    const types = ['image/png', 'image/jpeg']

    const change = (e) =>{
        let selected = e.target.files[0]
        console.log(selected)
        if(selected && types.includes(selected.type)){
            setFile(selected)
            setError('')
        }
        else{
            setFile(null)
            setError("Please select the correct file type (png or jpeg)")
        }
    }

    return (
        <form>
            <input type="file" className="inp" onChange={change}/>
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div className="file">{file.name}</div>}
                {file && <Progress file={file} setFile={setFile} />}

            </div>
        </form>
    )
}

export default Upload
