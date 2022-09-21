import React, { ChangeEvent, useEffect, useState } from "react"


interface IMeme {
  id: string,
  name: string,
  url: string,
  width: number,
  height: number,
  box_count: number
}

export default function Meme() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemes, setAllMemes] = useState([] as IMeme[])
    
    useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])
    
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }
    
    function handleChange(event: ChangeEvent) {
        const {name, value} = event.target as HTMLInputElement
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    
    const handleDrag = (e: React.DragEvent<HTMLHeadingElement>) => {
      const target = e.target as HTMLHeadElement;
      function moveAt(pageX: number, pageY: number, elem: HTMLHeadElement) {
        elem.style.left = `${pageX}px`;
        elem.style.top = `${pageY}px`;
      }
      moveAt(e.pageX, e.pageY, e.currentTarget)
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <p className="meme--text top" draggable="true" onDragEnd={handleDrag} >{meme.topText}</p>
                <p className="meme--text bottom" draggable="true" onDragEnd={handleDrag} >{meme.bottomText}</p>
            </div>
        </main>
    )
}