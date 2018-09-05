import React from 'react'
import { Link } from 'gatsby'
import { theme } from '../config/theme'

export const Header = ({ siteTitle }) => (
  <header style={styles.header}>
    <nav style={styles.content}>
      <h1 style={{ margin: 0 }}>
        <Link to="/" style={styles.brand}>
          {siteTitle}
        </Link>
      </h1>
      <ul style={styles.menu}>
        <li style={styles.linkItem}>
          <Link style={styles.link} to="/" activeStyle={styles.linkActive}>
            Home
          </Link>
        </li>
        <li style={styles.linkItem}>
          <Link style={styles.link} to="/blog" activeStyle={styles.linkActive}>
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

const styles = {
  header: {
    background: theme.brand.default,
    marginBottom: '1.45rem'
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0 auto',
    maxWidth: 960,
    padding: '1.45rem 1.0875rem'
  },
  brand: {
    color: 'white',
    textDecoration: 'none'
  },
  menu: {
    fontSize: 21,
    display: 'flex',
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  linkItem: {
    padding: 0,
    margin: 0
  },
  link: { marginRight: 24, textDecoration: 'none', color: theme.white },
  linkActive: { color: theme.text.active }
}
