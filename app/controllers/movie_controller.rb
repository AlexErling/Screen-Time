class MovieController < ApplicationController
  def index
    @movies= Tmdb::Movie.popular(page: params[:page])
    @image = "https://image.tmdb.org/t/p/w500"

  end

  def show
    @movie = Tmdb::Movie.detail(params[:id])
    @image = "https://image.tmdb.org/t/p/w500"
  end
end
