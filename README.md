# blog-project-frontpage

### Requirements

These are the requirements received from <a href="https://www.theodinproject.com/lessons/nodejs-blog-api"><b>The Odin Project</b></a> as well as some of my own requirements. It also involves planning out Schemas and other design-elements.

##### Backend:
<ul>
<li>JWT verification for protected routes</li>
</ul>

### Mistakes and Learnings:

#### Learnings:

This project got me familiar with JWT and API design. While JWT seems effortlessly when stored in the localStorage, I read that it leaves you unable to destroy the JWT token and therefore log the user out. APIs seem like a great way to build a headless application and provide some functionality and DB access to it. Furthermore, the ability to split parts of the application in 2 or more and have different routes for different application gives it some degree of flexiblity that could probably not be achieved by having everything in a single frontend and backend. My next step has always been to learn NextJS (bc of the abliity to have SPAs as well as provide static interfaces for crawlers), Typescript(seems to be a must know in the industry, having typesafety seems to be worth the "effort" to learn TS and apply it) and another SQL DB besides MySQL (most likely PostgreSQL). Knowing these technologies (especially NextJS) might and probably will change my general opinion of having an API as a backend combined with 2 or more seperate UIs. 

#### Mistakes:

API design: API route naming is bad. Due to this bad design, I have to use POST to receive a page I usually would call with GET. For my next projects, I will have clear and predifined naming conventions for the routes and will try to design a restful API that gets as close as possible to an REST API.

Mongoose: findOne and find seemed like the same to me, and I was not too sure why to use one over the other. I assumed that if there is only 1 element that would be queried by find, then it would return the same as if I had used findOne. This cost me a couple of minutes of debugging, until I realized that find will return an array no matter what, while findOne returns an object. For the future, I will be using the proper terms to query data.

These are all mistakes I plan on avoiding in my future projects. I view them as learning experiences. Since this project was mainly designed to get me familiar with APIs as well as with JWT, I will not change their structure and every component that comes with it.
