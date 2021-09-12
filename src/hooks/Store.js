import { useState, useEffect } from "react";
import { store } from "../firebase/Config";


const Store = (collection) => {
    const [docs , setDocs] = useState([])

    useEffect(() => {
        const unsub = store.collection(collection)
            .orderBy('createdAt', 'desc')
            .onSnapshot((snap) => {
                let document = []
                snap.forEach(doc => {
                    document.push({...doc.data(), id : doc.id})
                });
                setDocs(document)
            })
            return () => unsub()
    }, [collection])

    return ( { docs } )
}

export default Store
