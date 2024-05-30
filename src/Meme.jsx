export default function Meme() {
  return (
    // including meme with form to reduce complexity
    <main>
      <form action="submit" className="form">
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
        <button className="form--button">Get a new meme image 🖼</button>
      </form>
    </main>
  );
}
