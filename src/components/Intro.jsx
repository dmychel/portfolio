import { Link } from "react-router-dom"

function Intro() {
    return (
        <section className="intro">
            <h2>Web Developer</h2>
            <p>
                Hey I&apos;m Dylon. I am a very ambitious person who is determined to make &apos;delusional&apos; goals become reality. I strongly believe that you can achieve anything with enough hard work.
            </p>
            <p style={{ color: "#50FA7B" }}>
                You can learn more about me <Link to="/about">here</Link>.
            </p>

        </section>
    )
}
export default Intro