class PeopleController < ApplicationController
  def index
    @people = Tmdb::Person.popular(page: params[:page])
    @image = "http://image.tmdb.org/t/p/w185"
  end
  def show
    @person = Tmdb::Person.detail(params[:id])
    @image = "http://image.tmdb.org/t/p/w185"
  end
end
