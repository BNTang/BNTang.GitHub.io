const ITEM_CLASS_NAME = '.grid-item';
const DOMContentLoaded_EVENT = 'DOMContentLoaded';
const PROGRESS_EVENT = 'progress';

function createLiDouNaImages() {
    const container = document.querySelector('.grid');
    const numberOfImages = 26;

    for (let i = 1; i <= numberOfImages; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');

        const img = document.createElement('img');
        img.src = `./images/${String(i).padStart(2, '0')}.jpg`;
        img.alt = `Image ${i}`;
        img.loading = 'lazy'; // Implementing lazy loading

        // Randomize image size
        const randomSize = Math.random() > 0.5 ? 'large' : 'small';
        gridItem.classList.add(randomSize);

        gridItem.appendChild(img);
        container.appendChild(gridItem);
    }
}

createLiDouNaImages();

document.addEventListener(DOMContentLoaded_EVENT, function () {
    const grid = document.querySelector('.grid');
    const masonry = new Masonry(grid, {
        itemSelector: ITEM_CLASS_NAME,
        columnWidth: ITEM_CLASS_NAME,
        percentPosition: true
    });

    imagesLoaded(grid).on(PROGRESS_EVENT, function () {
        masonry.layout();
    });
});
