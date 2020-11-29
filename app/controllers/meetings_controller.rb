class MeetingsController < ApplicationController
  before_action :set_meeting, only: [:show, :update, :destroy]

  # GET /meetings
  def index
    @meetings = Meeting.limit(100).offset(params[:offset])

    render json: @meetings, include: [:category, :reviews]
  end

  # GET /meetings/1
  def show
    render json: @meeting, include: [:category, :reviews]
  end

  # POST /meetings
  def create
    @meeting = Meeting.new(meeting_params)

    if @meeting.save
      render json: @meeting, include: [:category, :reviews], status: :created
    else
      render json: @meeting.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /meetings/1
  def update
    if @meeting.update(meeting_params)
      render json: @meeting, include: [:category, :reviews]
    else
      render json: @meeting.errors, status: :unprocessable_entity
    end
  end

  # DELETE /meetings/1
  def destroy
    @meeting.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_meeting
      @meeting = Meeting.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def meeting_params
      params.require(:meeting).permit(:name, :address1, :address2, :city, :state, :zipcode, :latitude, :longitude, :dayOfWeek, :timeOfDay, :organization, :offset)
    end
end
