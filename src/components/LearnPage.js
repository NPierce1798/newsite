import React from 'react';
import '../App.css';
import Navbar from './Navbar';
import Learnlink from './Home/Learnlink';


function LearnPage() {
    return (
        <div>
            <header className="App-header">
                <div className='app__hero'>
                    <Navbar />
                </div>
                <div className='learn__content-container'>
                    <h4 style={{'color':'rgb(108, 194, 216)', 'borderBottom':'solid 1px white'}}>Learn Concepts and Ideas</h4>
                    <p style={{'width':'66%', 'textAlign':'center'}}>Here you can find articals that cover different aspects of software development. Learn these key ideas and concepts to use for yourself.</p>
                    <Learnlink 
                            title='How Does Google Process Requests' 
                            content='Many of us use google without a second thought, 
                                however that does not mean we understand it. 
                                Here I will explain the process that takes place when you 
                                make a request to Google.'
                            link='/learn/how-does-google-process-requests'/>

                    <Learnlink 
                            title='Understanding HTTP, Devtools, and Rest' 
                            content='Some content here' 
                            link='/learn/http-devtools-rest'/>
                    <Learnlink 
                            title='Relational and Non-relational Databases' 
                            content='Some more content about this topic.'
                            />
                    <Learnlink 
                            title='Proxies: Types and Uses' 
                            content='Summarization of proxy artical and info it includes.' />
                    <Learnlink 
                            title='Concurrent Vs Paralell Processing' 
                            content='More example content just for now.' />
                    <Learnlink 
                            title='Object Oriented Programming: What and Why' 
                            content='content relating to oop, what it is, and why we use it.' />
                    <Learnlink 
                            title='What Are Garbage Collectors' 
                            content='Talk about garbage collectors or something.'/>
                </div>
            </header>
        </div>
    );
}

export default LearnPage;