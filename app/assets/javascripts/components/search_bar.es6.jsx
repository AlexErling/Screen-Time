class SearchBar extends React.Component {
  constructor(props) {
    super(props)
  }


  render () {
    return (


      <form className="form-inline my-2 my-lg-0" action="/search" acceptCharset="UTF-8" method="get">
         <input name="utf8" type="hidden" value="√" />
         <button className="btn btn-secondary my-2 my-sm-0" name="button" type="submit">
            <i className ="fa fa-search"></i>
         </button>
         <input
           className="form-control mr-sm-2"
           required="required"
           type="search"
           value={this.props.term}
           onChange={(event) => {this.handleInputChange(event.target.value)}}
           placeholder="Search"
           autoComplete="off"
           name="name" />
       </form>
    );
  }

  handleInputChange(term) {
    this.props.onSearchTermChange(term);
  }
}
