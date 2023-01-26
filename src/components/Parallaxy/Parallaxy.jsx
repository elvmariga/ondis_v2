import React from 'react'
import './Style/parallaxy.css'
const Parallaxy = () => {
  return (
    <div className="wrapper_outer">
      <div className="wrapper">
        <div className="parallax_section">
          <div className="parallax_bg bg1">
            <h2>Hello Elvis</h2>
          </div>
        </div>
        <div className="parallax_section">
          <div className="parallax_bg bg2">
            <h2>Created Parallax</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Parallaxy