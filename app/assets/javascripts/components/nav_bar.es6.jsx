class NavBar extends React.Component {
  render () {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="#">Screen Time</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/tv">TV</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/movie">Movies</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/people">People</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0" abineguid="C705D782F0194A7A84D013DFF95A5E92">
            <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
     </nav>
    );
  }
}
