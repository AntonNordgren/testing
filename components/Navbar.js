import Link from 'next/link';

function NavBar() {
  return (
    <nav className="container navbar navbar-expand navbar-dark bg-dark mb-0">
      <div className="container">
      <a className="navbar-brand" href="/">Cool Website</a>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link href="/about"><a className="nav-link">About</a></Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  )
}

export default NavBar