require 'rails_helper'

RSpec.describe TvController, type: :controller do

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
    it "returns http success" do
      get :index, params: {page: 1}
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET #show" do
    it "returns http success" do
      get :show, params: {id: 1}
      expect(response).to have_http_status(:success)
    end
  end

end
