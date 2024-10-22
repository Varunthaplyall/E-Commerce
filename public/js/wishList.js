document.addEventListener('click', (e)=>{
    const button = e.target;

    if(button.classList.contains('like-btn')){
        console.log(button);
        const productId = e.target.getAttribute('productId');
        console.log(productId)
        addOrRemoveFromWishList(productId, button)


    }
})

async function addOrRemoveFromWishList(productId, button ) {
    try {
        
        const res = await axios.post(`http://localhost:3000/wishList/${productId}`, {}, {
            headers: {'X-Requested-With': 'XMLHttpRequest'}
        })

        if(res.data.success){
            if(button.classList.contains('fa-solid')){
                button.classList.remove('fa-solid');
                button.classList.add('fa-regular');
            }else{
                button.classList.remove('fa-regular');
                button.classList.add('fa-solid');
            }
            console.log(res.data.message)
        }

    } catch (error) {
        console.log(error)
    }  
}