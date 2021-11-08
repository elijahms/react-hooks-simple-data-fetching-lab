import React, { useEffect, useState } from 'react'

const App = () => {
        
    //const [loadedStat, setLoadedStat] = useState()
    const [currentImg, setCurrentImg] = useState(null)


    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(r => r.json())
        .then((data) => {
            console.log(data)
            setCurrentImg(data.message)
        })

    }, [])
    
    
    
    return (
        <div>
            {!currentImg && <p> Loading... </p>}
            {currentImg && <img src={currentImg} alt="A random Dog" />}
        </div>
    )
}

export default App
