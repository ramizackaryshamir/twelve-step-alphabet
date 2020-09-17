require 'test_helper'

class MeetingsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @meeting = meetings(:one)
  end

  test "should get index" do
    get meetings_url, as: :json
    assert_response :success
  end

  test "should create meeting" do
    assert_difference('Meeting.count') do
      post meetings_url, params: { meeting: { address1: @meeting.address1, address2: @meeting.address2, city: @meeting.city, dayOfWeek: @meeting.dayOfWeek, latitude: @meeting.latitude, longitude: @meeting.longitude, name: @meeting.name, organization: @meeting.organization, state: @meeting.state, timeOfDay: @meeting.timeOfDay, zipcode: @meeting.zipcode } }, as: :json
    end

    assert_response 201
  end

  test "should show meeting" do
    get meeting_url(@meeting), as: :json
    assert_response :success
  end

  test "should update meeting" do
    patch meeting_url(@meeting), params: { meeting: { address1: @meeting.address1, address2: @meeting.address2, city: @meeting.city, dayOfWeek: @meeting.dayOfWeek, latitude: @meeting.latitude, longitude: @meeting.longitude, name: @meeting.name, organization: @meeting.organization, state: @meeting.state, timeOfDay: @meeting.timeOfDay, zipcode: @meeting.zipcode } }, as: :json
    assert_response 200
  end

  test "should destroy meeting" do
    assert_difference('Meeting.count', -1) do
      delete meeting_url(@meeting), as: :json
    end

    assert_response 204
  end
end
