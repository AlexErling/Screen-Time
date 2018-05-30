class SearchContainer extends React.Component {

  constructor(props) {
    super(props)
    this.key = "fb6a1d3f38c3d97f67df6d141f936f29";
    this.state = {term: '', tv: [], movies: [], people: []};
  }



  search(term) {
    this.setState({ term });

   $.ajax({
      url: `https://api.themoviedb.org/3/search/movie?api_key=${this.key}&language=en-US&query=${term}`,
      method: 'GET',
      success: (data) => {
        this.setState({
        movies: data.results});}
    });

    $.ajax({
       url: `https://api.themoviedb.org/3/search/person?api_key=${this.key}&language=en-US&query=${term}`,
       method: 'GET',
       success: (data) => {
         this.setState({
         people: data.results});}
     });

     $.ajax({
        url: `https://api.themoviedb.org/3/search/tv?api_key=${this.key}&language=en-US&query=${term}`,
        method: 'GET',
        success: (data) => {
          this.setState({
          tv: data.results});
        }

      });
  }

  render () {
    return (
      <div>
        <SearchBar
        term={this.state.term}
        onSearchTermChange={(term) => {this.search(term)}}
        /> {this.state.term.length != 0 && (this.state.tv.length != 0 || this.state.movies.length != 0 || this.state.people.length != 0) ?
        <SearchResultsList
          term={this.state.term}
          tv={this.state.tv}
          movies={this.state.movies}
          people={this.state.people}/> : null}
      </div>
    );

  }
}
