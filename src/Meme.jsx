import memesData from "../memesData.js"

export default function Meme() {

    let url
    
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        url = memesArray[randomNumber].url
        console.log(url)
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
        <button className="form--button" onClick={getMemeImage} >Get a new meme image 🖼</button>
      </div>
    </main>
  );
}
