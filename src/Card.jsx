import React from 'react';

function Card(props){
    return (
      <>
     <div className="cards">
     <div className="card">
     <img src={props.imgsrc} alt="pic" className='card_img'></img>
     <div className='card_info'>
     <span className='card_category'>{props.sname}</span><br/>
     <a href={props.link} target='_blank'>
       <button>Watch now</button>
     </a>
     </div>
     </div>
     </div>
    </>
    );
  }

  export default Card;
