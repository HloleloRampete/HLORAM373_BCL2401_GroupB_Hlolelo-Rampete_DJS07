import React from "react";


export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
    .then((res) => res.json())
    .then((data) => setAllMemes(data.data.memes))
  }, [])

  function getMemeImage() {
    const memesArray = allMemesImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const {name, value} = event.target
    setMeme((prevMeme) => ({
        ...prevMeme,
        [name]: value,
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
            placeholder="Top Text"
            name="toptext"
            value={meme.topText}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="bottom-text">Bottom text</label>
          <input
            id="bottom-text"
            type="text"
            className="form--input"
            placeholder="Bottom Text"
            name="bottomtext"
            value={meme.bottomText}
            onChange={handleChange}
          />
        </div>
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} alt="Meme" className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
