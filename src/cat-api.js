import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_qSGeq8knc2GCdFpKcrkJEI728qkwHfSSN33TquQoiJICbo9oqn2sMa27IbnM7cBl';

const BASE_URL = 'https://api.thecatapi.com/v1';

//1
export const fetchBreeds = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/breeds?`);
    return response.data;
  } catch (errors) {
    console.error(errors);
  }
};

//2
export const fetchCatByBreed = async breedId => {
  try {
    const response = await axios.get(
      `${BASE_URL}/images/search?&breed_ids=${breedId}`
    );
    return response.data;
  } catch (errors) {
    console.error(errors);
  }
};

// ======================BEFORE REFACTORING=====================================================

// const BASE_URL = 'https://api.thecatapi.com/v1';
// const API_KEY =
//   'live_qSGeq8knc2GCdFpKcrkJEI728qkwHfSSN33TquQoiJICbo9oqn2sMa27IbnM7cBl';

//1

// export function fetchBreeds() {
//   return fetch(`${BASE_URL}/breeds/`, {
//     headers: {
//       'x-api-key': API_KEY,
//     },
//   })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     })
//     .catch(error => console.log(error));
// }

// // =======2 var for fetchBreeds function ===========

// // export function fetchBreeds() {
// //     return fetch(`${BASE_URL}/breeds?api_key=${API_KEY}`)
// //         .then(response => {
// //             if (!response.ok) {
// //                 throw new Error(response.status);
// //             }
// //             return response.json();
// //         });
// // };

// 2

// export function fetchCatByBreed(breedId) {
//   return fetch(
//     `${BASE_URL}/images/search?api_key=${API_KEY}&breed_ids=${breedId}`
//   ).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }
