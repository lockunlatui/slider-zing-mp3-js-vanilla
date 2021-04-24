// const imagesSlider = [
// 	{
// 		id: `1`,
// 		img: `https://photo-zmp3.zadn.vn/banner/e/b/3/3/eb33819eecbca631459733e42b797714.jpg`,
// 	},
// 	{
// 		id: `2`,
// 		img: `https://photo-zmp3.zadn.vn/banner/6/c/6/6/6c66e39664351e709716d09fbcb3e693.jpg`,
// 	},
// 	{
// 		id: `3`,
// 		img: `https://photo-zmp3.zadn.vn/banner/2/b/a/c/2bac015590e4e9abaeac419877b10cc4.jpg`,
// 	},
// 	{
// 		id: `4`,
// 		img: `https://photo-zmp3.zadn.vn/banner/f/f/6/b/ff6bc6f48a83f6025024e7e49aa03348.jpg`,
// 	},
// 	{
// 		id: `5`,
// 		img: `https://photo-zmp3.zadn.vn/banner/f/0/0/0/f0003946de8852677c4f3b1187006333.jpg`,
// 	},
// ];

const galleryItem = document.querySelectorAll('.gallery-item');

const galleryNavItem = document.querySelectorAll('.gallery-nav-item');

let currentDot = 0;

const btnPrev = document.querySelector('.zm-carousel-control-prev');

const btnNext = document.querySelector('.zm-carousel-control-next');

const removeAllClass = () => {
  galleryItem.forEach((item) => {
    item.classList.remove('gallery-item-first');
    item.classList.remove('gallery-item-previous');
    item.classList.remove('gallery-item-selected');
    item.classList.remove('gallery-item-next');
    item.classList.remove('gallery-item-last');
  });

  galleryNavItem.forEach((item) => {
    item.classList.remove('nav-item-selected');
  });
};

const update = () => {
  galleryNavItem[currentDot].classList.add('nav-item-selected');
  galleryItem[currentDot].classList.add('gallery-item-selected');
  galleryItem[currentDot > 0 ? currentDot - 1 : 4].classList.add(
    'gallery-item-next'
  );
  galleryItem[currentDot < 4 ? currentDot + 1 : 0].classList.add(
    'gallery-item-previous'
  );

  galleryItem[currentDot > 1 ? currentDot - 2 : currentDot + 3].classList.add(
    'gallery-item-last'
  );
  galleryItem[currentDot < 3 ? currentDot + 2 : currentDot - 3].classList.add(
    'gallery-item-first'
  );
};

btnNext.addEventListener('click', () => {
  removeAllClass();
  if (currentDot >= 0 && currentDot < 4) {
    currentDot += 1;
  } else {
    currentDot = 0;
  }
  update();
 
});

btnPrev.addEventListener('click', () => {
  removeAllClass();
  if (currentDot === 0) {
    currentDot = 4;
  } else {
    currentDot -= 1;
  }
  update();
});
