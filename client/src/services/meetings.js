import api from './apiConfig'

const BASE_URL = 'https://twelve-step-alphabet-api.herokuapp.com/'

//Read All
export const getAllMeetings = async () => {
  const resp = await api.get(`${BASE_URL}/meetings`);
  return resp.data;
}

//Read One
export const getOneMeeting = async (id) => {
  const resp = await api.get(`${BASE_URL}/meeting-detail/${id}`);
  return resp.data;
}

//Create Meeting
export const postMeeting = async (meetingData) => {
  const resp = await api.post(`${BASE_URL}/meetings`, meetingData);
  return resp.data;
}

//Create Review
export const postReview = async (formData) => {
  const resp = await api.post(`${BASE_URL}/meetings`, formData);
  return resp.data;
}

//Update Review
export const putUpdatedReview = async (id, formData) => {
  const resp = await api.put(`${BASE_URL}/meetings/${id}`, formData);
  return resp.data;
}

//Destroy Review
export const destroyReview = async (id) => {
  const resp = await api.delete(`${BASE_URL}/meetings/${id}`);
  return resp;
}