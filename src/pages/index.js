import React from "react"

function Homepage() {
  return (
    <div className="container">
      <h1>Welcome!</h1>
      <p>My name is <strong>Emerson Lackey</strong> and I'm a Director of Engineering at iManage Closing Folders. I spend the
        bulk of my professional life writing and thinking about building front end applications.</p>
      <h4>Articles</h4>
      <ul>
        <li><a href="/posts/emberjs-with-xstate">EmberJS with XState</a></li>
      </ul>
    </div>
  )
}

export default Homepage