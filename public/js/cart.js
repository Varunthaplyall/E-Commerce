
document.addEventListener('DOMContentLoaded', function() {
    const quantityInputs = document.querySelectorAll('.quantity-input');
    const minusButtons = document.querySelectorAll('.btn-quantity:first-child');
    const plusButtons = document.querySelectorAll('.btn-quantity:last-child');

    minusButtons.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            if (quantityInputs[index].value > 1) {
                quantityInputs[index].value--;
            }
        });
    });

    plusButtons.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            quantityInputs[index].value++;
        });
    });
});
