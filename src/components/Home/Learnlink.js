import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css'

function Learnlink({title, content, link}) {
    return (
            
                <div className='learnlink__container' style={{'padding':'15px', 'borderBottom':'solid 1px white', 'borderLeft':'solid 1px white', 'width':'66%'}}>
                    <Link to={link} sx={{ 'textDecoration':'none', }}>
                        <h5 style={{'borderBottom':'solid 2px white', 'width':'fit-content', 'color':'rgb(108, 194, 216)', 'textDecoration':'none'}}>{title}</h5>
                        <p style={{'fontSize':'20px', 'textDecoration':'none', 'color':'white'}}>{content}</p>
                    </Link>
                </div>
        
    );
}

export default Learnlink;