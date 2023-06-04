import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryContainer = document.querySelector('.gallery');
const markup = galleryItems.map(({preview, original, description})=> `<li class="gallery__item">
<a class="gallery__link" href='${original}'>
  <img
    class="gallery__image"
    src='${preview}'
    data-source='${original}'
    alt='${description}'
  />
</a>
</li>`)
galleryContainer.insertAdjacentHTML('beforeend', markup.join(''));
galleryContainer.addEventListener('click', showPicture)
function showPicture(event){
    event.preventDefault();
    if(event.target.nodeName !== 'IMG'){
        return
    };
    const selectedImage = event.target.getAttribute('data-source')

    const instance = basicLightbox.create(`
    <img src="${selectedImage}" width="800" height="600">
`)

    instance.show()
galleryContainer.addEventListener('keydown', event=>{
    if(event.key === 'Escape'){
        instance.close()
    }
})
}
