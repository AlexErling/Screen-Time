class NavBar extends React.Component {
  render () {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="/">Screen Time</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/tv">TV</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/movies">Movies</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/people">People</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/genres">Genres</a>
            </li>
            </ul>
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <SearchContainer />
           </li>
           </ul>
        </div>
     </nav>
    );
  }
}
