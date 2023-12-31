// НЕ ПРАЦЮЄ!!!======================2 REFACTORING  =====================================================
// import './styles.css';
// import SlimSelect from 'slim-select';
// import Notiflix from 'notiflix';

// import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

// import { createMarkup } from './get-function.js';

// const ref = {
//   breedSelect: document.querySelector('.breed-select'),
//   loader: document.querySelector('.loader'),
//   cssLoader: document.querySelector('.css-loader'),
//   error: document.querySelector('.error'),
//   catInfo: document.querySelector('.cat-info'),
// };

// let isFirstSelection = false;

// ref.error.classList.add('is-hidden');
// ref.loader.classList.remove('is-hidden');
// ref.cssLoader.classList.remove('is-hidden');

// ref.breedSelect.addEventListener('change', hendleSelectBreed);

// let catsBreedsArray = [];

// fetchBreeds()
//   .then(data => {
//     const elements = data.map(element => ({
//       text: element.name,
//       value: element.id,
//     }));

//     new SlimSelect({
//       select: ref.breedSelect,
//       data: catsBreedsArray,
//     });
//   })
//   .catch(error => {
//     if (error) {
//       onFetchError();
//     }
//   });

// function hendleSelectBreed(evt) {
//   if (!isFirstSelection) {
//     isFirstSelection = true;
//     ref.loader.classList.add('is-hidden');
//     ref.cssLoader.classList.add('is-hidden');

//     Notiflix.Report.info(
//       '👋 Hello!',
//       'For starting, please, choose the cat`s breed information you want to get',
//       'Okay'
//     );
//     return;
//   }

//   ref.catInfo.innerHTML = '';
//   ref.catInfo.classList.add('is-hidden');
//   ref.loader.classList.remove('is-hidden');
//   ref.cssLoader.classList.remove('is-hidden');

//   const breedId = evt.currentTarget.value;

//   fetchCatByBreed(breedId)
//     .then(data => {
//       ref.loader.classList.add('is-hidden');
//       ref.cssLoader.classList.add('is-hidden');
//       ref.catInfo.classList.remove('is-hidden');

//       ref.catInfo.innerHTML = createMarkup(data);
//     })
//     .catch(error => {
//       if (error) {
//         onFetchError();
//       }
//     });
// }

// function onFetchError() {
//   ref.breedSelect.classList.add('is-hidden');
//   ref.loader.classList.add('is-hidden');
//   ref.cssLoader.classList.add('is-hidden');
//   ref.catInfo.classList.add('is-hidden');

//   ref.error.classList.remove('is-hidden');

//   Notiflix.Report.failure(
//     '&#128532; Something went wrong!',
//     'Try reloading the page!',
//     'Try Again'
//   );
// }

// ======================1 REFACTORING=====================================================
import './styles.css';
import SlimSelect from 'slim-select';
import Notiflix from 'notiflix';

import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

import { createMarkup } from './get-function.js';

const ref = {
  breedSelect: document.querySelector('.breed-select'),
  loader: document.querySelector('.loader'),
  cssLoader: document.querySelector('.css-loader'),
  error: document.querySelector('.error'),
  catInfo: document.querySelector('.cat-info'),
};

ref.error.classList.add('is-hidden');
ref.loader.classList.add('is-hidden');
ref.cssLoader.classList.add('is-hidden');

ref.breedSelect.addEventListener('change', hendleSelectBreed);

let catsBreedsArray = [];
fetchBreeds()
  .then(data => {
    data.forEach(element => {
      catsBreedsArray.push({ text: element.name, value: element.id });
    });
    new SlimSelect({
      select: ref.breedSelect,
      data: catsBreedsArray,
    });
  })
  .catch(error => {
    if (error) {
      onFetchError();
    }
  });

// fetchBreeds()
//   .then(data => {
//     const elements = data.map(element => ({
//       text: element.name,
//       value: element.id,
//     }));

//     new SlimSelect({
//       select: ref.breedSelect,
//       data: catsBreedsArray,
//     });
//   })
//   .catch(error => {
//     if (error) {
//       onFetchError();
//     }
//   });

function hendleSelectBreed(evt) {
  ref.catInfo.innerHTML = '';
  ref.catInfo.classList.add('is-hidden');
  ref.loader.classList.remove('is-hidden');
  ref.cssLoader.classList.remove('is-hidden');

  const breedId = evt.currentTarget.value;

  fetchCatByBreed(breedId)
    .then(data => {
      ref.loader.classList.add('is-hidden');
      ref.cssLoader.classList.add('is-hidden');
      ref.catInfo.classList.remove('is-hidden');

      ref.catInfo.innerHTML = createMarkup(data);
    })
    .catch(error => {
      if (error) {
        onFetchError();
      }
    });
}

function onFetchError() {
  ref.breedSelect.classList.add('is-hidden');
  ref.loader.classList.add('is-hidden');
  ref.cssLoader.classList.add('is-hidden');
  ref.catInfo.classList.add('is-hidden');

  ref.error.classList.remove('is-hidden');

  Notiflix.Report.failure(
    '&#128532; Something went wrong!',
    'Try reloading the page!',
    'Try Again'
  );
}

Notiflix.Report.info(
  '👋 Hello!',
  'For starting, please, choose the cat`s breed information you want to get',
  'Okay'
);

// ======================BEFORE REFACTORING=====================================================
// import './styles.css';
// import SlimSelect from 'slim-select';
// import Notiflix from 'notiflix';

// import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

// const ref = {
//   breedSelect: document.querySelector('.breed-select'),
//   loader: document.querySelector('.loader'),
//   cssLoader: document.querySelector('.css-loader'),
//   error: document.querySelector('.error'),
//   catInfo: document.querySelector('.cat-info'),
// };

// ref.error.classList.add('is-hidden');

// ref.breedSelect.addEventListener('change', hendleSelectBreed);

// fetchBreeds()
//   .then(data => {
//     for (let i = 0; i < data.length; i += 1) {
//       const optionsElement = document.createElement('option');
//       optionsElement.value = data[i].id;
//       optionsElement.textContent = data[i].name;
//       ref.breedSelect.appendChild(optionsElement);
//     }
//     ref.loader.classList.add('is-hidden');
//     ref.cssLoader.classList.add('is-hidden');
//   })
//   .catch(error => {
//     if (error) {
//       onFetchError();
//     }
//   });

// function hendleSelectBreed(evt) {
//   ref.catInfo.innerHTML = '';
//   ref.loader.classList.remove('is-hidden');
//   ref.cssLoader.classList.remove('is-hidden');

//   const breedId = evt.currentTarget.value;

//   fetchCatByBreed(breedId)
//     .then(data => {
//       ref.loader.classList.add('is-hidden');
//       ref.cssLoader.classList.add('is-hidden');

//       const { url, breeds } = data[0];
//       ref.catInfo.innerHTML = `<div class="box-img">
//  <img src="${url}" alt="${breeds[0].name}" width="400"/>
//   </div>
//  <div class="box">
//  <h1>${breeds[0].name}</h1>
//   <p>${breeds[0].description}</p>
//   <p><b>Temperament:</b> ${breeds[0].temperament}</p>
//  </div>`;
//     })
//     .catch(error => {
//       if (error) {
//         onFetchError();
//       }
//     });
// }

// function onFetchError() {
//   ref.breedSelect.classList.add('is-hidden');
//   ref.loader.classList.add('is-hidden');
//   ref.cssLoader.classList.add('is-hidden');
//   ref.catInfo.classList.add('is-hidden');

//   ref.error.classList.remove('is-hidden');

//   Notiflix.Report.failure(
//     '&#128532; Something went wrong!',
//     'Try reloading the page!',
//     'Try Again'
//   );
// }

// Notiflix.Report.info(
//   '👋 Hello!',
//   'For starting, please, choose the cat`s breed information you want to get',
//   'Okay'
// );
