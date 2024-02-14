import "/src/styles/terminal/userInfo.scss";
import PropTypes from "prop-types";

const UserInfo = ({ os, uptime }) => {
  return (
    <section className="user-info-container">
      <div className="user-info">
        <span>
          OS: <p>{os}</p>
        </span>
        <span>
          Kernal: <p>1.0.0-lts</p>
        </span>
        <span>
          Uptime: <p>{uptime} s</p>
        </span>
        <span>
          Packages: <p>351 packages audited (npm)</p>
        </span>
        <span>
          Theme: <p>Alacritty</p>
        </span>
        <span>
          Terminal: <p>Best terminal you&apos;ve ever used</p>
        </span>
      </div>
    </section>
  );
};

UserInfo.propTypes = {
  os: PropTypes.string,
  uptime: PropTypes.number,
};

export default UserInfo;
