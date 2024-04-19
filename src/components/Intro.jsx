import { Link } from "react-router-dom"

function Intro() {
    return (
        <section className="intro">
            <h1>Dylon Crowley-Perez</h1>
            <h2>Web Developer</h2>
            <Link to="/about">Learn more</Link>
        </section>
    )
}
export default Intro