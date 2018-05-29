class TvController < ApplicationController
  def index
    @tvshows = Tmdb::TV.popular(page: params[:page])
    @image = "https://image.tmdb.org/t/p/w500"

  end

  def show
    @tvshow = Tmdb::TV.detail(params[:id])
  end
end
