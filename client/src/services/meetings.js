import api from './apiConfig'

export const getAllMeetings = async (offset) => {
  const resp = await api.get(`/meetings?offset=${offset}`);
  return resp.data;
}

export const getOneMeeting = async (id) => {
  const resp = await api.get(`/meeting-detail/${id}`);
  return resp.data;

}

// export const getAllReviews = async (id) => {
//   const resp = await api.get(`/meetings/${id}/reviews`);
//   return resp.data;
// }
//Create Meeting
// export const postMeeting = async (meetingData) => {
//   const resp = await api.post(`/meetings`, meetingData);
//   return resp.data;
// }

