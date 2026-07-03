// ELEVET Global LocalStorage Cart Controller
const ELEVET_CART = {
    get() {
        return JSON.parse(localStorage.getItem('elevet_cart')) || [];
    },
    save(cart) {
        localStorage.setItem('elevet_cart', JSON.stringify(cart));
        this.updateBadge();
    },
    add(id, name, price, img, color = "Standard") {
        let cart = this.get();
        let existing = cart.find(item => item.id === id && item.color === color);
        if (existing) {
            existing.qty += 1;
        } else {
            cart.push({ id, name, price, img, color, qty: 1 });
        }
        this.save(cart);
        alert(`${name} (${color}) added to your bag.`);
    },
    updateBadge() {
        const badge = document.getElementById('cart-count');
        if (badge) {
            const total = this.get().reduce((sum, item) => sum + item.qty, 0);
            badge.innerText = total;
            badge.style.display = total > 0 ? 'inline-block' : 'none';
        }
    }
};

// Initialize badge count on load
document.addEventListener("DOMContentLoaded", () => ELEVET_CART.updateBadge());