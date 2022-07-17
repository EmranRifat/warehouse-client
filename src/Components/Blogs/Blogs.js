import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2>Difference between Nodejs and JavaScript </h2>
            <p>

                Javascript is a programming language that is used for writing scripts on the website.
                NodeJS is a Javascript runtime environment.
                Javascript can only be run in the browsers but We can run Javascript outside the browser with the help of NodeJS.
                Javascript is capable enough to add HTML and play with the DOM. Nodejs does not have capability to add HTML tags.	Javascript is used in frontend development.	Nodejs is used in server-side development.
                Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox.
                V8 is the Javascript engine inside of node.js that parses and runs Javascript.	Some of the javascript frameworks are RamdaJS, TypedJS, etc.
                Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm.
                8.	It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++.
                Nodejs is written in C, C++ and Javascript.

            </p>
            <h2> Differences between sql and nosql databases.</h2>
            <p>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)	Non-relational or distributed database system.
                These databases have fixed or static or predefined schema	They have dynamic schema
                These databases are not suited for hierarchical data storage.	These databases are best suited for hierarchical data storage.
                These databases are best suited for complex queries	These databases are not so good for complex queries
                Vertically Scalable	Horizontally scalable
                Follows ACID property	Follows CAP(consistency, availability, partition tolerance)</p>


            <h2>What is the purpose of jwt and how does it work</h2>
            <p>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.

                Although JWTs can be encrypted to also provide secrecy between parties, we will focus on signed tokens. Signed tokens can verify the integrity of the claims contained within it, while encrypted tokens hide those claims from other parties. When tokens are signed using public/private key pairs, the signature also certifies that only the party holding the private key is the one that signed it.</p>
        </div>
    );
};

export default Blogs;
