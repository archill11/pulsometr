const preBtn = document.querySelector('.pre_img'),
      nextBtn = document.querySelector('.next_img'),
      productImg = document.querySelector('.product_img'),
      viewedImg = document.querySelector('.img_prod_img')

const productsInSwitcher = ['watch_1', 'watch_2', 'watch_3']
let productIndex = 0

function viewProduct(product) {
    viewedImg.src = `./img/carousel_img/${product}.jpg`
}

function viewPreProduct() {
    productIndex--

    if (productIndex < 0) {
        productIndex = productsInSwitcher.length -1
    }
    viewProduct(productsInSwitcher[productIndex])
}
function viewNextProduct() {
    productIndex++

    if (productIndex > productsInSwitcher.length -1) {
        productIndex = 0
    }
    viewProduct(productsInSwitcher[productIndex])
}


viewProduct(productsInSwitcher[productIndex])

preBtn.addEventListener('click', () => viewPreProduct() )
nextBtn.addEventListener('click', () => viewNextProduct() )
