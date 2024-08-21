import React from 'react';
import Navbar from '../Navbar';
import req from '../../images/request.png';

function GoogleRequests() {
    return(
        <div className='artical__container'>
            <div className='artical__nav-container'>
                <Navbar />
            </div>

            <h3 className='artical__title'>How Does Google Process A Request</h3>
            <p className='artical__p'>
            We use search engines such as google often, some of us on a daily basis, however, how well do you understand 
            what is happening when you make a search. Here, we’ll dive into what happens, and pick apart the different aspects 
            of this process to build a solid understanding of what is really going on
            </p>
            <h5 className='artical__section'>The Search</h5>
            <p className='artical__p'>
                Let's start at the very beginning, you click into the text area and begin typing. As you do so, google compares 
            what you are typing against other popular searches, and recommended searches based on your history - we’ll get into 
            how this works in another section. Upon hitting “Enter”, or “Search”, a request is triggered for your browser to send 
            your query in a GET Request to Google’s servers. This request includes some additional information as well, such as your 
            browser type and version, cookies, and your IP address. Your IP address will allow the later response to be routed back to 
            you. Prior to sending the HTTP request, your browser will need to determine the IP address of the google server. It sends a 
            domain name server (DNS) query in a request, looking to resolve the domain name into an IP address.
            </p>
            <img className='artical__img' src={req} />
            <p className='artical__caption'>Above is an example of a get request</p>
            <p className='artical__p'>
            It can be noted that, if a proxy is involved, rather than the request being sent directly to the google server, it will first 
            go to the proxy which will forward it to the google server. This is considered a “forward proxy”, reverse proxies are also 
            useful and differ slightly from what was just described. We will cover proxies more in depth in another section.</p>
            <h5 className='artical__section'>Server Side Processing</h5>
            <p className='artical__p'>
            Google receives many search requests each second, so to ensure a server is not overwhelmed, load balancers are used to divy 
            up requests more evenly across  servers. This also aids to ensure efficient handling of your request. Here, the server parses 
            the request and your query. Natural Language Processing is used to determine differences in spelling and terminology that may 
            occur in an effort to gather the results you are looking for. The server then looks through a database of indexed web pages 
            to determine which best fit your search.
            </p>
            <h5 className='artical__section'>The Response</h5>
            <p className='artical__p'>
            Once a list of websites is compiled, the server sends a response back to your browser. This HTTP response includes the code 
            necessary to render the web pages for you to view. Your browser then uses this information to create a document object model 
            (DOM), representing the structure of the web page. In addition, your browser will load any other files including images. 
            </p>
        </div>
    );
}

export default GoogleRequests;