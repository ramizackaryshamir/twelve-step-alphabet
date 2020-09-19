import api from './apiConfig'

//Read All
export const getAllMeetings = async () => {
  const resp = await axios.get(`${BASE_URL}/meetings`);
  return resp.data;
}

//Read One
export const getOneMeeting = async (id) => {
  const resp = await axios.get(`${BASE_URL}/meetings/${id}`);
  return resp.data;
}

//Destroy
export const destroyReview = async(id) => {
  const resp = await axios.delete(`${BASE_URL}/meetings/${id}`);
  return resp;
}

//Create
export const postReview = async (reviewData) => {
  const resp = await axios.post(`${BASE_URL}/meetings`, reviewData);
  return resp.data;
}

//Update
export const putUpdatedReview = async (id, updatedData) => {
  const resp = await axios.put(`${BASE_URL}/meetings/${id}`, updatedData);
  return resp.data;
}