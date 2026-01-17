import React from 'react'

export default function Navbar(props) {
  
  const handleBtnColorChange = (color) => {
    props.setBtnColor(color);
  };

  const handleBgColorChange = (event) => {
    document.body.style.backgroundColor = event.target.value;
  };

  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">About</a>
              </li>
            </ul>

            {/* Dark/Light mode toggle */}
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="switchCheckDefault"/>
              <label className="form-check-label" htmlFor="switchCheckDefault">
                {props.mode==='light' ? 'Dark Mode' : 'Light Mode'}
              </label>
            </div>
          </div>
        </div>

        {/* Background color picker */}
        <div className="mx-3">
          <input type="color" onChange={handleBgColorChange} title="Pick a background color" />
        </div>

        {/* Dropdown for TextForm button color */}
        <div className="dropdown mx-3">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="colorDropdown" data-bs-toggle="dropdown" aria-expanded="false">
            Change Button Color
          </button>
          <ul className="dropdown-menu" aria-labelledby="colorDropdown">
            <li><button className="dropdown-item text-primary" onClick={() => handleBtnColorChange("primary")}>Blue</button></li>
            <li><button className="dropdown-item text-success" onClick={() => handleBtnColorChange("success")}>Green</button></li>
            <li><button className="dropdown-item text-danger" onClick={() => handleBtnColorChange("danger")}>Red</button></li>
            <li><button className="dropdown-item text-warning" onClick={() => handleBtnColorChange("warning")}>Yellow</button></li>
            <li><button className="dropdown-item text-dark" onClick={() => handleBtnColorChange("dark")}>Black</button></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
