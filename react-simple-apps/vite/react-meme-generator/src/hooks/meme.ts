import { useState, useEffect } from "react"

interface IMeme {
  id: string,
  name: string,
  url: string,
  width: number,
  height: number,
  box_count: number
}

export default function useMeme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    bottomTextColor: "#ffffff",
    topTextColor: "#ffffff",
    topTextFontSize: 30,
    bottomTextFontSize: 30,
    randomImage: "http://i.imgflip.com/1bij.jpg" 
  });
const [allMemes, setAllMemes] = useState([] as IMeme[]);

useEffect(() => {
    async function getMemes() {
        const res = await fetch("https://api.imgflip.com/get_memes");
        const data = await res.json();
        setAllMemes(data.data.memes);
    }
    getMemes();
}, []);

function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme(prevMeme => ({
        ...prevMeme,
        randomImage: url,
    }));
    
}

function handleChange(event: React.ChangeEvent) {
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

return {
    meme, handleChange, handleDrag, getMemeImage 
  }
}