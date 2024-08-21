import React from 'react';
import Navbar from '../Navbar';

function HDR() {
    return(
        <div className='artical__container'>
            <div className='artical__nav-container'>
                <Navbar />
            </div>

            <h3 className='artical__title'>Understanding HTTP, Devtools, and REST</h3>
            <h5 className='artical__section'>What is an HTTP request</h5>
            <p className='artical__p'>An HTTP request is a method used by a browser to fetch data relating to a document. 
                The browser is then able to reconstruct the document to display its contents. The request is the message 
                sent by the client, to the server asking for a document. The HTTP protocol is also used to fetch data 
                such as images and videos, as well as post content to a server, for example in a form. HTTP can also 
                fetch parts of a document to update a webpage on demand. Once a server receives a request, the 
                server handles it and sends back a response. Entities landing between the client and the 
                server, are considered proxies, and can perform operations, and act as gateways or 
                caches. The parts of an HTTP request are in the image to the right.
            </p>
            <h5 className='artical__section'>TCP and IP: What Are They</h5>
            <p className='artical__p'>Internet protocol, or IP, is a set of rules which dictate the format in which data is 
                sent over the internet. IP is responsible for ensuring efficient travel of data across networks, so that it 
                arrives at its destination quickly and securely. Each device on a network has an IP, allowing it to 
                communicate with other devices, whether on the same network or another. Today we have two versions 
                of IP addresses: IPv4 and IPv6. IPv6 addresses allow for quicker transmission due to a simplified 
                packet (data) header, and do not need a NAT (Network Address Translation) as there are more 
                available IPv6 addresses.
            </p>
            <p className='artical__p'>
            TCP(Transmission Control Protocol) and IP work together, creating a foundation of the internet. At the application 
            level, they handle high-level protocols, representation, and encoding. Some examples are HTTP, FTP, and SMTP. In 
            the transport layer, The TCP ensures a quick and secure delivery of data. Next, IP handles the routing of the 
            data across networks. Lastly, the data enters the network interface layer where the physical transfer of the 
            data is handled. At each of these layers, new header information is added to the data.
            </p>
            <p className='artical__p'></p>
            <h5 className='artical__section'>UDP (User Datagram Protocol)</h5>
            <p className='artical__p'>Another core protocol, used alongside TCP, is the UDP. The UDP is typically used for 
                low-latency and loss-tolerating connections between applications online. A key feature of the UDP is that it 
                sends data independently and without prior connection. While UDP offers lower overhead due to its simplicity 
                in comparison to its counterparts, it can be less reliable, with a higher chance of packet loss, duplication, 
                or arriving out of order. UDP works by first dividing data into packets with their own header information, 
                and using this header information, sends the packets to their destination. The benefits of using UDP over 
                other methods lies in its use in applications where instant data is important, for example a live stream. 
                UDP is best used when quick request-response cycles are important.</p>
            <h5 className='artical__section'>Domain Name Servers</h5>
            <p className='artical__p'>DNS is an important aspect of how the internet works. It is responsible for translating 
                the domain names we use to find sites, to IP addresses that the system uses to locate a website. Without the DNS 
                system, online traffic would be able to be routed to the erect location. When you type a domain name into your 
                search bar, for example www.google.com, a DNS query is initiated and tasked with resolving that domain name 
                into an IP address. This query is sent to a recursive resolver, typically provided by either your ISP 
                (Internet Service Provider), or a public DNS service. If the resolver does not have the answer cached, 
                then it is forwarded to an appropriate TLD (Top-Level Domain) name server such as .com. Once the IP of 
                the domain is received, the recursive resolver returns that information to your browser. There are, as 
                well, other features of DNS that play into how it works. Some of these are different record types that 
                deal with providing various pieces of information. In addition to this, DNS can cache data in different 
                places to improve efficiency. With DNS Security, mechanisms like DNSSEC (Domain Name System Security Extension), 
                can provide authentication for DNS responses.</p>
            <h5 className='artical__section'>Devtools</h5>
            <p className='artical__p'>When it comes to being a developer working with these systems, Devtools are important to 
                become familiar with. They allow easier troubleshooting directly in the browser, as well as manipulation of the 
                content provided on a webpage. With Devtools, comes a variety of options to work with including inspecting HTML 
                and CSS, debugging JavaScript code, analyzing network connectivity and performance, monitoring and manipulating 
                the DOM, testing website performance, and fixing accessibility issues. Devtools, on most browsers, are accessed 
                by right clicking the page, and selecting “inspect”. There are a couple tabs which we will briefly cover. The 
                Elements tab allows you to work with the HTML, CSS, and DOM breakpoints. Inside the Console tab, we can use 
                JavaScript to interact directly with the site. With the Source panel, we can use JavaScript debugger, view 
                source files loaded by the webpage, and monitor expressions to see how their values change over time. 
                Network provides us information regarding network activity, performance, and throttling. The 
                Performance tab shows us framerate, a timeline, and a heap snapshot to analyze memory usage. 
                With the other tabs provided we can find information on security, accessibility, and 
                application information. </p>
            <h5 className='artical__section'>REST (Representational State Transfer)</h5>
            <p className='artical__p'>RESTful APIs</p>

        </div>
    );
}

export default HDR;