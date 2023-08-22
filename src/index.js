import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import './index.css';
import Sdata from './Sdata';


ReactDOM.render( 
  <>
  <h1 className='heading_style'>List of Top Hotstar Series</h1>   
      {Sdata.map((val) => {
    return (
      <Card
        key={val.id}
        sname={val.sname}
        imgsrc={val.imgsrc}
        link={val.link}
      />
    );
  })}
  </>,
  document.getElementById('root')
  );
