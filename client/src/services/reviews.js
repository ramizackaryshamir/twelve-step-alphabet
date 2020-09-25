import api from './apiConfig.js'

 export const getAllReviews = async (id) => {
  const resp = await api.get(`/meetings/${id}/reviews`);
  return resp.data;
 }

//Create Review
export const postReview = async (formData, id) => {
  const resp = await api.post(`/meetings/${id}/reviews`, { review: formData });
  return resp.data;
}
//Destroy Review
export const destroyReview = async (id) => {
  const resp = await api.delete(`/meetings/${id}/reviews`);
  return resp.data;
}
//Update Review
export const updateReview = async (id, formData) => {
  const resp = await api.put(`/meetings/${id}/reviews`, formData);
  return resp.data;
}