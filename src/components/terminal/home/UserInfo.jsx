import "/src/styles/terminal/userInfo.css";

const UserInfo = () => {
  return (
    <section className="user-info-container">
      <div className="user-info">
        <span>
          OS: <p>Arch Linux</p>
        </span>
        <span>
          Kernal: <p>1.0.0-lts</p>
        </span>
        <span>
          Uptime: <p>1 hour, 5 mins</p>
        </span>
        <span>
          Packages: <p>100 (npm)</p>
        </span>
        <span>
          Resolutuin: <p>1920x1080</p>
        </span>
        <span>
          Theme: <p>Qogir-manjaro-dark</p>
        </span>
        <span>
          Terminal: <p>Font</p>
        </span>
      </div>
    </section>
  );
};

export default UserInfo;
