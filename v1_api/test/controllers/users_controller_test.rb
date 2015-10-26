require 'test_helper'

class UsersControllerTest < ActionController::TestCase
  test "should get goals" do
    get :goals
    assert_response :success
  end

  test "should get projects" do
    get :projects
    assert_response :success
  end

  test "should get events" do
    get :events
    assert_response :success
  end

end
