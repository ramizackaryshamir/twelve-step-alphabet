import api from './apiConfig'

//Read All
export const getAllMeetings = async (offset) => {
  const resp = await api.get(`/meetings?offset=${offset}`);
  return resp.data;
}

//Read One
export const getOneMeeting = async (id) => {
  const resp = await api.get(`/meeting-detail/${id}`);
  return resp.data;
}

//Create Meeting
// export const postMeeting = async (meetingData) => {
//   const resp = await api.post(`/meetings`, meetingData);
//   return resp.data;
// }

//Create Review
export const postReview = async (formData) => {
  const resp = await api.post(`/meeting-detail`, formData);
  return resp.data;
}

//Update Review
export const putUpdatedReview = async (id, formData) => {
  const resp = await api.put(`/meetings/${id}`, formData);
  return resp.data;
}

//Destroy Review
export const destroyReview = async (id) => {
  const resp = await api.delete(`/meetings/${id}`);
  return resp;
}