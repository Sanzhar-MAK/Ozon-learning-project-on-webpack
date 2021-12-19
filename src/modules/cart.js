const cart = () => {
    const cartBtn = document.getElementById('cart');
    const cartModal = document.querySelector('.cart');
    const cartCloseBtn = cartModal.querySelector('.cart-close');

    const openCart = () => {
        cartModal.style.display = 'flex';
    }

    const closeCart = (e) => {
        if (e.target === cartModal || e.target === cartCloseBtn) {
            cartModal.style.display = '';
        }
    }

    cartBtn.addEventListener('click', openCart);
    cartCloseBtn.addEventListener('click', closeCart);
    cartModal.addEventListener('click', closeCart);
}

export default cart