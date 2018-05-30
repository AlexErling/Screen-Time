require 'rails_helper'

RSpec.describe PeopleController, type: :controller do

  before (:each) do
    @user = create(:user)
    sign_in @user
  end

  describe "GET #index" do
    it "renders the index template" do
      get :index, params: {page: 2}
      expect(response).to render_template("index")
    end
  end

  describe "GET #show" do
    it "returns http success" do
      get :show, params: {id: 73968}
      expect(response).to have_http_status(:success)
    end
  end

end
