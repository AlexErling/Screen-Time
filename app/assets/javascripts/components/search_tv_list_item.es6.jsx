
class SearchTvListItem extends React.Component {
  render () {
    return (
      <li className="dropdown-item">
      <a href={'/tv/' + this.props.tv.id}>
      {this.props.tv.original_name}
      </a>
      </li>
    );
  }
}
