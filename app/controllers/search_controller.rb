class SearchController < ApplicationController
  def index
      @q = params[:name]
      @tvsearch = Tmdb::Search.tv(@q)
      @personsearch = Tmdb::Search.person(@q)
      @moviesearch = Tmdb::Search.movie(@q)
  end
end
