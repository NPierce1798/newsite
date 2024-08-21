import React from 'react';
import '../../App.css';

function Card() {
    return (
        <div className='card__container'>
            <div className='card__heading-container'>
                <h4 className='card__heading'>Skills & Knowledge</h4>
            </div>
            <div className='card__contents-container'>

                <div className='card__col'>
                    <h5 className='card__section-heading'>Languages</h5>
                    <p>JavaScript</p>
                    <p>Python</p>
                    <p>SQL</p>
                    <p>HTML & CSS</p>
                </div>

                <div className='card__col'>
                    <h5 className='card__section-heading'>Frameworks</h5>
                    <p>React</p>
                    <p>Django</p>
                </div>

                <div className='card__col'>
                    <h5 className='card__section-heading'>Database Management</h5>
                    <p>Relational & Non-Relational Databases</p>
                    <p>Database Design</p>
                </div>

                <div className='card__col'>
                    <h5 className='card__section-heading'>DevOps & CI/CD</h5>
                    <p>Docker</p>
                    <p>AWS</p>
                </div>

                <div className='card__col'>
                    <h5 className='card__section-heading'>Networks</h5>
                    <p>Communication Standards & Protocols</p>
                    
                </div>

            </div>
        </div>
    );
}

export default Card;