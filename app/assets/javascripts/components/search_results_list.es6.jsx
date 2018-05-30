class SearchResultsList extends React.Component {
  render () {
    return (
      <ul className="dropdown-menu show">
      {this.renderMovieHeading()}
      {this.renderMovies()}
      {this.renderTvHeading()}
      {this.renderTv()}
      {this.renderPeopleHeading()}
      {this.renderPeople()}
      </ul>
    );
  }

  renderTv() {
   return this.props.tv.splice(0,3).map((tv) => {
      return <SearchTvListItem key={tv.id} tv={tv} />
    })
  }

  renderMovies() {
   return this.props.movies.splice(0,3).map((movies) => {
      return <SearchMovieListItem key={movies.id} movies={movies} />
    })
  }

  renderPeople() {
   return this.props.people.splice(0,3).map((people) => {
      return <SearchPeopleListItem key={people.id} people={people} />
    })
  }

  renderTvHeading() {
    if (this.props.tv.length === 0) { return; }

    return  <li><h4> TV </h4></li>
   }

   renderMovieHeading() {
     if (this.props.movies.length === 0) { return; }

     return  <li><h4> Movie</h4></li>
    }

    renderPeopleHeading() {
      if (this.props.people.length === 0) { return; }

      return  <li><h4> People </h4></li>
     }
}
