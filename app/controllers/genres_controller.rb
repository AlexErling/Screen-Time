class GenresController < ApplicationController
  def index
    @moviegenres = Tmdb::Genre.movie_list
  end

  def show
    @moviegenre = Tmdb::Genre.movies(params[:id], page: params[:page])
    @moviegenres = Tmdb::Genre.movie_list
  end
end
