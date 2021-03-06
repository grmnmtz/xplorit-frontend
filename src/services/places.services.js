import axios from "axios";
import { endpoints } from "endpoints/endpoints";

const token = localStorage.getItem("token");
console.log("token ", token);

export async function getSingleUser() {
  const getUserPromise = await axios.get(endpoints.userMe, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const getUser = getUserPromise.data.data;
  return getUser;
}

export async function getCardsPlacesHome() {
  const getAllPlacesPromise = await axios.get(endpoints.getAllPlaces);
  const cardsDataPlaces = getAllPlacesPromise.data.data.places;
  return cardsDataPlaces;
}

export async function getSinglePlaceData({ queryKey }) {
  const service_url = `${endpoints.getAllPlaces}/${queryKey[1]}`;
  const getSinglePlaceDataPromise = await axios.get(service_url);
  const singlePlaceData = getSinglePlaceDataPromise.data.data;
  console.log("Lugar", getSinglePlaceDataPromise);
  return singlePlaceData;
}

export async function getOwnerPlace({ queryKey }) {
  const service_url = `${endpoints.getOwnerPlace}/${queryKey[1]}`;
  const getOwnerPlacePromise = await axios.get(service_url);
  const getOwnerPlaceData = getOwnerPlacePromise.data.data;
  return getOwnerPlaceData;
}

export async function getAllFilterPlaces(url, page, limit) {
  console.log("what is URL?", url);
  console.log("Wht is this?", `${url}&page=${page}`);
  const getFilterPlaces = await axios.get(`${url}${limit}&page=${page}`);
  console.log(
    "🚀 ~ file: places.services.js ~ line 32 ~ getAllFilterPlaces ~  getFilterPlaces",
    getFilterPlaces
  );
  const filterPlaces = getFilterPlaces.data;
  console.log(
    "🚀 ~ file: places.services.js ~ line 34 ~ getAllFilterPlaces ~ filterPlaces",
    filterPlaces
  );
  return filterPlaces;
}

export async function getPlaceLikes({ queryKey }) {
  const service_url = `${endpoints.saveLike}/${queryKey[1]}/likes`;
  const getOwnerPlacePromise = await axios.get(service_url);
  const getOwnerPlaceData = getOwnerPlacePromise.data;
  return getOwnerPlaceData;
}

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
  const token = localStorage.getItem("token");
  const service_url = `${endpoints.postPlace}`;
  let formData = new FormData();
  console.log("formData1", data);
  console.log("images ", images);
  formData.append("data", JSON.stringify(data));
  console.log("formData1", formData);
  for (let image of images) {
    formData.append("images", image);
  }
  console.log("formData2", formData);
  console.log("formData3", formData);
  return await axios.post(service_url, formData, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

export async function saveLikeOnPlace(placeId) {
  console.log("placeId: ", placeId);
  const service_url = `${endpoints.saveLike}/${placeId}/likes`;
  console.log("token: ", token);
  return await axios.post(
    service_url,
    {},
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
}

/*export async function saveLikeOnPlace(placeId) {
  console.log("saveLike ", placeId);  
  const service_url = `${endpoints.saveLike}/${placeId}/likes`;
  console.log("Token ", token);
  return await axios.post(service_url, {
  console.log("saveLike ", placeId);
  const service_url = `${endpoints.saveLike}/${placeId}/likes`;
  return await axios.post(service_url, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

export async function deleteLikeOnPlace(placeId) {
  const service_url = `${endpoints.saveLike}/${placeId}/likes`;
  return await axios.delete(service_url, {
    headers: { Authorization: `Bearer ${token}` },
  });
}*/

export async function deleteLikeOnPlace(placeId) {
  const service_url = `${endpoints.deleteLike}/${placeId}/likes`;
  // console.log("URL ", service_url);
  //console.log("JSON to POST ", data);
  return await axios.delete(
    service_url,
    {
      headers: { Authorization: `Bearer ${token}` },
    },
    {}
  );
}

export async function saveReviewOnPlace(data, placeId) {
  const service_url = `${endpoints.getReviews}/${placeId}/reviews`;
  const saveLike = axios.post(
    service_url,
    {
      comment: data.comment,
      stars: data.stars,
    },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
}
