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
        bottomTextColor: "#ffffff",
        topTextColor: "#ffffff",
        topTextFontSize: 30,
        bottomTextFontSize: 30,
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
    const buttonTextStyles = {
      color: meme.bottomTextColor,
      fontSize: `${meme.bottomTextFontSize}px`
    }
    const topTextStyles = {
      color: meme.topTextColor,
      fontSize: `${meme.topTextFontSize}px` 
    }
    return (
        <main>
            <div className="form">
                <div className="form__inputs">
                  <input 
                      type="text"
                      placeholder="Top text"
                      className="form--input text-input"
                      name="topText"
                      value={meme.topText}
                      onChange={handleChange}
                  />
                  <input 
                      type="text"
                      placeholder="Bottom text"
                      className="form--input text-input"
                      name="bottomText"
                      value={meme.bottomText}
                      onChange={handleChange}
                  />
                   <label htmlFor="">
                    top color: {' '}
                    <input 
                        type="color"
                        className="form--input"
                        name="topTextColor"
                        value={meme.topTextColor}
                        onChange={handleChange}
                    />
                  </label>
                  <label>
                    bottom color: {' '}
                    <input 
                        type="color"
                        className="form--input"
                        name="bottomTextColor"
                        value={meme.bottomTextColor}
                        onChange={handleChange}
                    />
                  </label>
                  <label>
                    bottom text font size: {' '}
                    <input 
                        type="number"
                        className="form--input input-number"
                        name="topTextFontSize"
                        value={meme.topTextFontSize}
                        onChange={handleChange}
                    />
                  </label>
                  <label>
                    bottom text font size: {' '}
                    <input 
                        type="number"
                        className="form--input input-number"
                        name="bottomTextFontSize"
                        value={meme.bottomTextFontSize}
                        onChange={handleChange}
                    />
                  </label>
                </div>
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <p className="meme--text top"
                  style={topTextStyles}
                  draggable="true"
                  onDragEnd={handleDrag}
                >{meme.topText}</p>
                <p className="meme--text bottom"
                  style={buttonTextStyles}
                  draggable="true"
                  onDragEnd={handleDrag}
                  >{meme.bottomText}</p>
            </div>
        </main>
    )
}