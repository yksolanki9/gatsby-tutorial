import * as React from 'react';
import { Link } from 'gatsby';
import { 
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText
} from './layout.module.css';
import Header from './header';

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
    <Header />
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/">Home</Link>
          </li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/about">About</Link>
          </li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout
