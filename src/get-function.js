export function createMarkup(cats) {
  return cats
    .map(({ url, breeds }) => {
      const markup = `
      <div class="cat-img">
 <img src="${url}" alt="${breeds[0].name}" width="400"/>
  </div>
 <div class="cat-desk">
 <h2>${breeds[0].name}</h2>
<h3>Description</h3>
  <p>${breeds[0].description}</p>
<h3>Temperament:</h3>
  <p> ${breeds[0].temperament}</p>
  <p style="color: #891181;"><a class="cat-link" href="${breeds[0].wikipedia_url}" target="_blank" rel="nofollow noreferrer"">WIKIPEDIA</a></p>
 </div>`;
      return markup;
    })
    .join('');
}
