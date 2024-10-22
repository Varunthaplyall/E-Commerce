const buyButton = document.getElementById('buy-now-btn');


buyButton.addEventListener("click", async (e) => {
    e.preventDefault();   
    const productId = document.querySelector('input[name="productId"]').value;
    const price = document.querySelector('input[name="price"]').value;

   
   if(productId) makePayment(productId, price);
   
})


async function makePayment(productId, amount) {
    try {
        const res = await axios.post(
            `/products/${productId}/order`,
            { amount: amount },
            {
                headers: {
                    "X-Requested-With": "XMLHttpRequest",
                },
            }
        )

        const options = {
            key: "rzp_test_8xKwmzI7PW7J9f",
            amount: res.data.order.amount,
            currency: "INR",
            name: "Acme Corp",
            description: "Test Transaction",
            order_id: res.data.order.orderId,
            callback_url: "/verify-payment", 
            theme: {
                color: "#F37254",
            },
        };
        console.log(options)
        const razorpay = new Razorpay(options);
        razorpay.open();

      
    } catch (error) {
        console.error('Payment error:', error); 
        alert('Payment failed. Please try again.'); 
    }
}
