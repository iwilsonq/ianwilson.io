import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Full Stack Developer</h1>
    <p>I am Ian and I like to code and run, though not simultaneously.</p>
    <p>
      Sometimes you can find me...
      <ul>
        <li>tweeting about web development and tech on twitter @iwilsonq</li>
        <li>
          <Link to="/blog">blogging</Link> about all stack development on{' '}
          <a href="https://medium.com/@iwilsonq">Medium</a> or on{' '}
          <a href="https://dev.to">dev.to</a>
        </li>
        <li>attempting to record videos on Youtube and Twitch (coming soonish)</li>
        <li>running about in the hills of the SF Bay Area</li>
      </ul>
    </p>
    <div style={{ marginTop: 64 }}>
      <h2>
        Definitely check out some of my <Link to="/blog">articles</Link> while you're here
      </h2>
    </div>
  </Layout>
)

export default IndexPage
