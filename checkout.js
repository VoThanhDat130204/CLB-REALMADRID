document.addEventListener('DOMContentLoaded', () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let products = [];
    
    fetch('products.json')
    .then(response => response.json())
    .then(data => {
        products = data;
        displayCart(cart, products);
    });

    const displayCart = (cart, products) => {
        let checkoutCart = document.querySelector('.checkoutCart');
        let total = 0;

        cart.forEach(item => {
            let product = products.find(p => p.id == item.product_id);
            if (product) {
                let itemDiv = document.createElement('div');
                itemDiv.classList.add('item');
                itemDiv.innerHTML = `
                    <div>${product.name}</div>
                    <div>${item.quantity} x $${product.price}</div>
                    <div>$${item.quantity * product.price}</div>
                `;
                checkoutCart.appendChild(itemDiv);
                total += item.quantity * product.price;
            }
        });

        document.getElementById('total').innerText = total.toFixed(2);
    }

    document.getElementById('pay').addEventListener('click', () => {
        let payment = parseFloat(document.getElementById('payment').value);
        let total = parseFloat(document.getElementById('total').innerText);

        if (payment >= total) {
            document.getElementById('message').innerText = "Thanh Toán Thành Công";
            localStorage.removeItem('cart');
        } else {
            document.getElementById('message').innerText = "Số tiền không chính xác.";
        }
    });
});