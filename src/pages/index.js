import React from "react"

function Homepage() {
  return (
    <div className="profile">

      <div className="profile__picture">
        <img src="/profile.jpg" />
      </div>

      <div className="profile__content">
        <h1>Howdy! 👋</h1>
        <p>
          My name is <strong>Emerson Lackey</strong> and I'm a Director of Engineering at <a href="https://www.closingfolders.com">iManage Closing Folders</a>.
          You can find me on Twitter <a href="https://twitter.com/emerson_lackey">@emerson_lackey</a>, <a href="https://github.com/Emerson">Github</a>, and <a href="https://www.linkedin.com/in/emersonlackey/">LinkedIn</a>.
        </p>
        <p>
          Previously a full stack developer, these days I spend the bulk of my professional time thinking about how to build scalable, defect free, front-end applications using <a href="https://emberjs.com/">EmberJS</a>.
        </p>
        <br />
        <h2>Interests</h2>
        <p>Currently thinking a lot about the Toyota Production System, incremental improvement, state machines, component archtecture, and how to build a great team.</p>
        <br />
        <h2>Articles</h2>
        <ul>
          <li><a href="/posts/emberjs-with-xstate">EmberJS with XState</a></li>
        </ul>
      </div>

    </div>
  )
}

export default Homepage