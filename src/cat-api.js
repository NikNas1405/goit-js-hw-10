const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY =
  'live_qSGeq8knc2GCdFpKcrkJEI728qkwHfSSN33TquQoiJICbo9oqn2sMa27IbnM7cBl';

export function fetchBreeds() {
  return fetch(`${BASE_URL}/breeds/`, {
    headers: {
      'x-api-key': API_KEY,
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => console.log(error));
}

// export function fetchBreeds() {
//     return fetch(`${BASE_URL}/breeds?api_key=${API_KEY}`)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(response.status);
//             }
//             return response.json();
//         });
// };

export function fetchCatByBreed(breedId) {
  return fetch(
    `${BASE_URL}/images/search?api_key=${API_KEY}&breed_ids=${breedId}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
