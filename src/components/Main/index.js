import React from 'react';
import './test.css';


function Main(props) {
  return (
    <main>
      <div className="box">        
        { props.position === 'left' &&
          <>
            <img className={ `img ${props.position}` } src={props.img} alt={props.title} />
            <div className="description animate-appear">
              <h3>{props.title}</h3><p>{props.desc}</p>
            </div>
          </>
        }
        { props.position === 'right' &&
          <>
            <div className="description animate-appear" style={{ marginLeft: "2.5rem" }}>
              <h3>{props.title}</h3><p>{props.desc}</p>
            </div>
            <img className={ `img ${props.position}` } src={props.img} alt={props.title} />
          </>
        }
      </div>
      <div className="dash-divider"></div>
    </main>
  )
}

export default Main;