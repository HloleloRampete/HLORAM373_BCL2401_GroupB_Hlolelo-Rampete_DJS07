import React from "react";
import memesData from "./memesData.jsx";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemesImages, setAllMemesImages] = React.useState(memesData);

  function getMemeImage() {
    const memesArray = allMemesImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  return (
    // including meme with form to reduce complexity
    <main>
      <div className="form">
        <div>
          <label htmlFor="top-text">Top text</label>
          <input
            id="top-text"
            type="text"
            className="form--input"
            placeholder="Me at night"
          />
        </div>
        <div>
          <label htmlFor="bottom-text">Bottom text</label>
          <input
            id="bottom-text"
            type="text"
            className="form--input"
            placeholder="Me in the Morning"
          />
        </div>
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>

      <img src={meme.randomImage} alt="Meme" className="meme--image" />
    </main>
  );
}
