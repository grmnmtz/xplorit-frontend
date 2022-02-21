import axios from "axios";
import { endpoints } from "endpoints/endpoints";

<<<<<<< HEAD
=======
const token = localStorage.getItem("token");

>>>>>>> develop
export async function getCardsPlacesHome() {
  const getAllPlacesPromise = await axios.get(endpoints.getAllPlaces);
  const cardsDataPlaces = getAllPlacesPromise.data.data.places;
  return cardsDataPlaces;
}

export async function getSinglePlaceData({ queryKey }) {
<<<<<<< HEAD
=======
  console.log("singleplace: ", queryKey);
>>>>>>> develop
  const service_url = `${endpoints.getAllPlaces}/${queryKey[1]}`;
  const getSinglePlaceDataPromise = await axios.get(service_url);
  const singlePlaceData = getSinglePlaceDataPromise.data.data;
  console.log("Lugar", getSinglePlaceDataPromise);
<<<<<<< HEAD
=======

>>>>>>> develop
  return singlePlaceData;
}

export async function getOwnerPlace({ queryKey }) {
  const service_url = `${endpoints.getOwnerPlace}/${queryKey[1]}`;
  const getOwnerPlacePromise = await axios.get(service_url);
<<<<<<< HEAD
=======
  console.log(getOwnerPlacePromise);
>>>>>>> develop
  const getOwnerPlaceData = getOwnerPlacePromise.data.data;
  return getOwnerPlaceData;
}

<<<<<<< HEAD
=======

export async function getAllFilterPlaces(url) {
     const getFilterPlaces = await axios.get(url)
     console.log('is url there?', url)
    const filterPlaces = getFilterPlaces.data
    return filterPlaces
}



>>>>>>> develop
export async function getPlaceLikes({ queryKey }) {
  const service_url = `${endpoints.getAllPlaces}/${queryKey[1]}/likes`;
  const getOwnerPlacePromise = await axios.get(service_url);
  const getOwnerPlaceData = getOwnerPlacePromise.data;
  return getOwnerPlaceData;
}

<<<<<<< HEAD
export async function getSingleReview({ queryKey }) {
  const service_url = `${endpoints.getReviews}/${queryKey[1]}/reviews`;
  const getReviewsPromise = await axios.get(service_url);
  const getReviews = getReviewsPromise.data.data.reviews;
  return getReviews;
}

export async function getSingleReviewRoute({ queryKey }) {
  const service_url = `${endpoints.getReviewsRoute}/${queryKey[1]}/reviews`;
  const getReviewsPromise = await axios.get(service_url);
  const getReviews = getReviewsPromise.data.data.reviews;
  return getReviews;
}

export async function createPlace(data, images) {
=======
export async function createPlace(data, images) {
  console.log("Habemos token", token);
>>>>>>> develop
  const service_url = `${endpoints.postPlace}`;
  const formData = new FormData();
  formData.append("data", JSON.stringify(data));
  for (let image of images) {
    formData.append("images", image);
  }
  console.log("Data desde el back", data);
<<<<<<< HEAD
  return await axios.post(service_url, formData);
  // return postNewPlace
}

export async function saveLikeOnPlace(userId, placeId) {
  console.log("saveLike ", placeId, userId);
  const service_url = `${endpoints.saveLike}/${placeId}/likes`;
  return await axios.post(service_url, {
    placeId: placeId,
    userId: userId,
  });
}

export async function deleteLikeOnPlace(userId, placeId) {
  const service_url = `${endpoints.getAllPlaces}/${placeId}/likes`;
  return await axios.delete(service_url, {
    userId: userId,
  });
}

export async function saveReviewOnPlace(data, placeId, userId) {
  const service_url = `${endpoints.getReviews}/${placeId}/reviews`;
  console.log("URL ", service_url);
  console.log("JSON to POST ", data);
  /*return await axios.post(service_url, {
    comment: data.comment,
    stars: data.stars,
    userId: userId,
  });*/
=======
  return await axios.post(service_url, formData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  // return postNewPlace
>>>>>>> develop
}
