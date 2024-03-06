import { Link } from "react-router-dom"
import "/src/App.scss";

const Menu = () => {
    return (
            <section className="menu">
      <div className="title">
        <p>Select your path:</p>
      </div>
      <div className="options">
        <Link to="/">Normal View</Link>
        <Link to="/terminal">Developer View</Link>
      </div>
    </section>
    )
}

export default Menu