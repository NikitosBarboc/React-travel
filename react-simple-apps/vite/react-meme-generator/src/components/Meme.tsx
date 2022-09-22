import React, { ChangeEvent, useEffect, useState } from "react"
import useMeme from "../hooks/meme"
import MemeInputs from "./MemeInputs";

export default function Meme() {
  const {
    meme, handleChange, handleDrag, getMemeImage 
    } = useMeme();

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
              <div className="form__inputs__container">
                  <MemeInputs 
                    inputName="top"
                    text={meme.topText}
                    color={meme.topTextColor}
                    fontSize={meme.topTextFontSize}
                    handleChange={handleChange}
                  />
                  <MemeInputs 
                    inputName="bottom"
                    text={meme.bottomText}
                    color={meme.bottomTextColor}
                    fontSize={meme.bottomTextFontSize}
                    handleChange={handleChange}
                  />
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