let items = [];

function login() {
    const username = document.getElementById('username').value;
    if (username) {
        alert(`Logged in as ${username}`);
    }
}

function addItem() {
    const itemName = document.getElementById('item-name').value;
    const itemPrice = document.getElementById('item-price').value;

    if (itemName && itemPrice) {
        const item = { name: itemName, price: itemPrice };
        items.push(item);
        displayItems();
    } else {
        alert("Please enter item name and price.");
    }
}

function displayItems() {
    const itemList = document.getElementById('items');
    itemList.innerHTML = '';
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        itemList.appendChild(li);
    });
}
