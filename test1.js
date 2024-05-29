const totalPages = 29;
let currentPage = 1;
let flipping = false;

function loadPage() {
    const leftPage = document.getElementById('left-page');
    const rightPageFront = document.querySelector('#right-page .front');
    const rightPageBack = document.querySelector('#right-page .back');

    if (currentPage <= totalPages) {
        leftPage.innerHTML = `<img src="./image${currentPage}.png">`;
    } else {
        leftPage.innerHTML = '';
    }

    rightPageFront.innerHTML = `<div class="text">Hello World!</div>`;
    if (currentPage < totalPages) {
        rightPageBack.innerHTML = `<img src="./image${currentPage + 1}.png">`;
    } else {
        rightPageBack.innerHTML = '';
    }
}

function nextPage() {
    if (currentPage < totalPages && !flipping) {
        flipping = true;
        const rightPage = document.getElementById('right-page');
        rightPage.classList.add('flip');

        setTimeout(() => {
            currentPage++;
            loadPage();
            rightPage.classList.remove('flip');
            flipping = false;
        }, 1000);
    }
}

function prevPage() {
    if (currentPage > 1 && !flipping) {
        flipping = true;
        const leftPage = document.getElementById('left-page');

        leftPage.classList.add('flip');
        setTimeout(() => {
            currentPage--;
            loadPage();
            leftPage.classList.remove('flip');
            flipping = false;
        }, 1000);
    }
}

loadPage();
