import "./SkillsBar.css";

const SkillsBar = () => {
  return (
    <div className="container">
      <div className="skill-box">
        <span className="title">HTML</span>
        <div className="skill-bar">
          <span className="skill-per html">
            <span className="tooltip">60%</span>
          </span>
        </div>
      </div>

      <div className="skill-box">
        <span className="title">CSS</span>
        <div className="skill-bar">
          <span className="skill-per css">
            <span className="tooltip">50%</span>
          </span>
        </div>
      </div>

      <div className="skill-box">
        <span className="title">JavaScript</span>
        <div className="skill-bar">
          <span className="skill-per javascript">
            <span className="tooltip">50%</span>
          </span>
        </div>
      </div>

      <div className="skill-box">
        <span className="title">NodeJS</span>
        <div className="skill-bar">
          <span className="skill-per nodejs">
            <span className="tooltip">40%</span>
          </span>
        </div>
      </div>

      <div className="skill-box">
        <span className="title">ExpressJS</span>
        <div className="skill-bar">
          <span className="skill-per expressjs">
            <span className="tooltip">40%</span>
          </span>
        </div>
      </div>

      <div className="skill-box">
        <span className="title">ReactJS</span>
        <div className="skill-bar">
          <span className="skill-per reactjs">
            <span className="tooltip">50%</span>
          </span>
        </div>
      </div>

      <div className="skill-box">
        <span className="title">MUI</span>
        <div className="skill-bar">
          <span className="skill-per mui">
            <span className="tooltip">60%</span>
          </span>
        </div>
      </div>

      <div className="skill-box">
        <span className="title">TypeScript</span>
        <div className="skill-bar">
          <span className="skill-per typescript">
            <span className="tooltip">30%</span>
          </span>
        </div>
      </div>

      <div className="skill-box">
        <span className="title">MongoDB</span>
        <div className="skill-bar">
          <span className="skill-per mongodb">
            <span className="tooltip">40%</span>
          </span>
        </div>
      </div>

    </div>
  );
};

export default SkillsBar;
