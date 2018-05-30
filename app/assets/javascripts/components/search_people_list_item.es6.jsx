class SearchPeopleListItem extends React.Component {
  render () {
    return (
      <li className="dropdown-item">
      <a href={'/people/' + this.props.people.id}>
      {this.props.people.name}
      </a>
      </li>
    );
  }
}
