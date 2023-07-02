import './styles.css';
// import SlimSelect from 'slim-select';
import Notiflix from 'notiflix';

import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

const ref = {
  breedSelect: document.querySelector('.breed-select'),
  loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
  catInfo: document.querySelector('.cat-info'),
};

ref.error.classList.add('is-hidden');
ref.loader.classList.add('is-hidden');

ref.breedSelect.addEventListener('change', hendleSelectBreed);

fetchBreeds()
  .then(data => {
    for (let i = 0; i < data.length; i += 1) {
      const optionsElement = document.createElement('option');
      optionsElement.value = data[i].id;
      optionsElement.textContent = data[i].name;
      ref.breedSelect.appendChild(optionsElement);
    }
  })
  .catch(error => {
    if (error) {
      onFetchError();
    }
  });

function onFetchError() {
  ref.breedSelect.classList.add('is-hidden');
  ref.loader.classList.add('is-hidden');
  ref.catInfo.classList.add('is-hidden');

  //  ref.breedSelect.classList.remove('breed-select');
  //  ref.loader.classList.remove('loader');
  //  ref.catInfo.classList.remove('cat-info');

  ref.error.classList.remove('is-hidden');

  Notiflix.Report.failure(
    '&#128532; Something went wrong!',
    'Try reloading the page!',
    'Try Again'
  );
}

function hendleSelectBreed(evt) {
  ref.loader.classList.remove('is-hidden');
  ref.breedSelect.classList.add('is-hidden');
  ref.catInfo.classList.add('is-hidden');

  // ref.breedSelect.classList.remove('breed-select');
  // ref.loader.classList.add('loader');
  // ref.catInfo.classList.remove('cat-info');

  const breedId = evt.currentTarget.value;

  fetchCatByBreed(breedId)
    .then(data => {
      ref.loader.classList.add('is-hidden');
      ref.breedSelect.classList.remove('is-hidden');
      ref.catInfo.classList.remove('is-hidden');

      //  ref.breedSelect.classList.add('breed-select');
      //  ref.loader.classList.remove('loader');
      //  ref.catInfo.classList.add('cat-info');

      const { url, breeds } = data[0];
      ref.catInfo.innerHTML = `<div class="box-img">
 <img src="${url}" alt="${breeds[0].name}" width="400"/>
  </div>
 <div class="box">
 <h1>${breeds[0].name}</h1>
  <p>${breeds[0].description}</p>
  <p><b>Temperament:</b> ${breeds[0].temperament}</p>
 </div>`;

      ref.catInfo.classList.remove('is-hidden');
    })
    .catch(error => {
      if (error) {
        onFetchError();
      }
    });
}

Notiflix.Report.info(
  '👋 Hello!',
  'For starting, please, choose the cat`s breed information you want to get',
  'Okay'
);
