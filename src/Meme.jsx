import React from "react";


export default function Meme() {
    // Initialize state for meme data. The `meme` state object contains properties for the top text, bottom text, and the current random image.
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  // Initialize state for storing all memes fetched from the API. This will be an array of meme objects.
  const [allMemes, setAllMemes] = React.useState([]);

  // Using React.useEffect to fetch meme data from the API when the component mounts. This ensures the data is fetched only once.
  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
    .then((res) => res.json())
    .then((data) => setAllMemes(data.data.memes))
  }, []) // Empty dependency array ensures this effect runs only once after the initial render.

  // Function to get a new random meme image from the allMemes array.
  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    // Updating the meme state with the new random image URL. Resets text fields for user experience.
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
      topText: "",
      bottomText: "",
    }));
  }
  // Handle changes to input fields. This allows controlled inputs where the state updates as the user types.
  function handleChange(event) {
    const {name, value} = event.target
    // Using the name attribute to dynamically update the corresponding state property.
    setMeme((prevMeme) => ({
        ...prevMeme,
        [name]: value,
        }));
  }

  return (
    // including meme with form to reduce complexity
    // Main component structure, includes a form for input and a section to display the meme.
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
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
