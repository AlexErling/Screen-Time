require 'rails_helper'

RSpec.describe SearchController, type: :controller do

  before (:each) do
    @user = create(:user)
    sign_in @user
  end

  describe "Must be signed in to use" do
    it "should be redirected to signin" do
      sign_out @user
      get :index
      expect( response ).to redirect_to( new_user_session_path )
    end
  end

  describe "GET #index" do
    it "returns index template" do
      get :index, params: {name: "Movie"}
      expect(response).to render_template("index")
    end

    it "returns http success" do
      get :index, params: {name: "Movie"}
      expect(response).to have_http_status(:success)
    end
  end

end
