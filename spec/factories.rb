FactoryBot.define do

  factory :user do
    first_name 'Test'
    last_name 'User'
    username "TestUser"
    email 'user@test.com'
    password 'please'
    password_confirmation 'please'
  end

end
