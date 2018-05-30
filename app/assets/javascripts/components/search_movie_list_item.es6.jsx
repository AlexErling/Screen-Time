class SearchMovieListItem extends React.Component {
  render () {
    return (
      <li className="dropdown-item">
      <a href={'/movies/' + this.props.movies.id}>
      {this.props.movies.title}
      </a>
      </li>
    );
  }
}
