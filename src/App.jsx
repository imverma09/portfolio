import React, { useState } from 'react'
import HomePage from './components/HomePage'
import Footer from './components/Footer';
import { Link } from 'react-router-dom';

function App() {
  const [showMenu, setShowMenu] = useState(true)
  function homePage() {
    setShowMenu(false)
  }
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let mm = Math.floor(Math.log10(m)+1)
  m = mm  == 1 ? '0'+m : m;
  
  
  const skills = [
    { icon: '★', lang: "JavaScript" },
    { icon: '★', lang: "Express" },
    { icon: '★', lang: "React Js" },
    { icon: '★', lang: "Mongo DB" },
  ]
  const project = [
    {  link: "https://github.com/imverma09/multi-shop", title: 'Multi-shop (e-commerce)', lang: "React (single-page website)", date: "July 04 - Present" },
    {  link: "https://github.com/imverma09/flip-game", title: 'Images-flip-Game', lang: "HTML/CSS, javaScript", date: "June 16 - July" },
    {  link: "https://word-guess-game001.netlify.app/", title: 'Word-Guess-Game', lang: "HTML/CSS, javaScript", date: "May 6 - June" },
    {  link: "https://amsssmohammadpuriya.netlify.app/", title: 'School website Template', lang: "HTML/CSS, javaScript", date: "April 17 - May" },
  ]
  return (
    <>
      {
        showMenu ? <main className='container'>
          <nav className='navbar'>
            <h2>Harsh Deep</h2>
            <div style={{ cursor: 'pointer' }} onClick={homePage}>
              <div className='line'></div>
              <div className='line'></div>
            </div>
            <span className='time'>{h}:{m}</span>
          </nav>
          <section className='section'>
            <div className='front-end'>
              <div className='dev front'>FRONT</div>
              <div className='line2 developer'></div>
              <div className='dev end'>END</div>
            </div>
            <div className='dev developer'>DEVELOPER</div>
          </section>
          <div className='logo-text'>
            <img className='logo-img' src="/logo/logo.png" alt="" height={150} width={150} />
            <div className='lets-talk'>
              <p>Available For Freelance</p>
              <p>Work From  Aug '22</p>
              <p><a href="mailto:work.harshdeepdev@gmail.com">LETS TALK</a></p>
            </div>
          </div>
        </main> : <><HomePage setShowMenu={setShowMenu} /></>
      }
      <article>
        <h1>ABOUT ME</h1>
        <p>I'm a full-stack software engineer with a primary focus on front-end development. <br />
          I Love Working at the intersection Of Creativity. <br />
          I have a knack for creating user-friendly, <br />
          aesthetically pleasing functional Web Products <br />
          ranging from websites to Web-Apps <br />
          When I'm not building or exploring new web Technologies(blockchain),<br />
          I'm probably Indoors Vibing To Music Or Watching Movies(rarely)</p>
      </article>
      <section className='ribbon-box'>
        <p>Various Technolies i use</p>
        <div className='ribbon ribbon1'>
          <div className='run'>
            {
              skills.map((s) => {
                return (
                  <div key={Math.random()}>
                    <span>{s.icon}</span>
                    <span>{s.lang}</span>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className='ribbon ribbon2'>
          <div className='back'>
            {
              skills.map((s) => {
                return (
                  <div key={Math.random()}>
                    <span>{s.icon}</span>
                    <span>{s.lang}</span>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
      <section className='project-section'>
        <h1>PROJECTS</h1>
        <p className='pro-intro'>Most of time is spent building web products that i either find interesting or paid to do .Some of these projects are open source, so feel free to explore them and even contribute. Feel free to get in touch with me if you have any cool ideas that you'd like to discuss further or work on with me .
        </p>
        <main className='logo-grid project'>
          {
            project.map((pro,i) => {
              return (
                <Link key={Math.random()} to={pro.link}>
                <div>
                  <h3 name={i}>{pro.title}</h3>
                  <p name={i}>{pro.lang}</p>
                  <span name={i}><i>{pro.date} </i></span>
                </div>
                </Link>
              )
            })
          }
        </main>
      </section>
      <Footer />
    </>
  )
}


export default App
