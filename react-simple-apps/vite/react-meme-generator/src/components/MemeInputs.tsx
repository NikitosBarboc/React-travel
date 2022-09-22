import React from 'react';

interface IMemeInputsProps  {
  inputName: string
  text: string,
  handleChange: React.ChangeEventHandler,
  color: string,
  fontSize: number,
}

export default function MemeInputs(props: IMemeInputsProps) {
  const {
    text,
    handleChange,
    inputName,
    color,
    fontSize
  } = props

  return (
    <div className="form__inputs">
      <input 
        type="text"
        placeholder={`${inputName} text`}
        className="form--input text-input"
        name={`${inputName}Text`}
        value={text}
        onChange={handleChange}
    />
      <label htmlFor="">
        {inputName} color: {' '}
        <input 
            type="color"
            className="form--input"
            name={`${inputName}TextColor`}
            value={color}
            onChange={handleChange}
        />
      </label>
      <label htmlFor="">
        {inputName} text font size: {' '}
        <input 
            type="number"
            className="form--input input-number"
            name={`${inputName}TextFontSize`}
            value={fontSize}
            onChange={handleChange}
        />
      </label>
    </div>
  )
}