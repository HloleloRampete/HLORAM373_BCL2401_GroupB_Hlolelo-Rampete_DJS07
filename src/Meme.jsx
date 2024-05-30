export default function Meme() {
    return (
        // including meme with form to reduce complexity 
        <main>
            <form action="submit" className="form">
                <input type="text" className="form--input" placeholder="top text" />
                <input type="text" className="form--input" placeholder="bottom text" />
                <button className="form--button">Get a new meme image 🖼</button>
            </form>
        </main>
    )
}