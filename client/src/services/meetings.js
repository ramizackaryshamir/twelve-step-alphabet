import api from './apiConfig'

//https://twelve-step-alphabet-api.herokuapp.com/meetings
export const getAllMeetings = async (offset) => {
  const resp = await api.get(`/meetings?offset=${offset}`);
  return resp.data;
}

//https://twelve-step-alphabet-api.herokuapp.com/meetings/1
//https://twelve-step-alphabet-api.herokuapp.com/meetings/2
//https://twelve-step-alphabet-api.herokuapp.com/meetings/3
//https://twelve-step-alphabet-api.herokuapp.com/meetings/4
//etc.

export const getOneMeeting = async (id) => {
  const resp = await api.get(`/meetings/${id}`);
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

