import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
function About() {
  const logo = [
    { img: 'C++.svg', title: "C++" },
    { img: 'git.svg', title: "Git" },
    { img: 'github.svg', title: "Github" },
    { img: 'javascript.svg', title: "JavaScript" },
    { img: 'mongodb.svg', title: "Mongo Db" },
    { img: 'NodeJs.svg', title: "Node Js" },
    { img: 'react.svg', title: "React Js" },
    { img: 'tailwind.svg', title: "Tailwind Css" },
    { img: 'postman.svg', title: "Postman" },
  ]
  return (
    <>
      <section className='about'>
        <Link to={'/'} className='arrow-left'>⇐</Link>
        <img src="/logo/name.png" alt="" height={300} width={300} />
        <div>
          <h1>Hi, I'm Harsh ✌️</h1>
          <p>My name is Harsh Deep ,I'm a full-stack software engineer with a primary focus on front-end development. I Love Working at the intersection Of Creativity. I have a knack for creating user-friendly, aesthetically pleasing functional Web Products ranging from websites to Web-Apps When I'm not building or exploring new web Technologies(blockchain), I'm probably Indoors Vibing To Music Or Watching Movies(rarely)</p>
        </div>
        <div>
          <h1>Tools</h1>
          <p>My primary stack includes React, javaScript (React on the front-end and Express on the back-end). I have listed some of the languages/tools I have used or still use below (not *really* including frameworks).</p>
        </div>
        <div className='logo-grid lang-logo'>
          {
            logo.map((l, i) => {
              return (
                <div key={i} className='logo-name'>
                  <img src={`/logo/${l.img}`} alt="" height={20} width={20} />
                  <span>{l.title}</span>
                </div>
              )
            })
          }
        </div>
      </section>
      <Footer />
    </>
  )
}

export default About
