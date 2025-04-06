// Wait until the document content is loaded
document.addEventListener("DOMContentLoaded", function() {
    // Add bounce effect to all buttons on click
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', function() {
        btn.classList.add('bounce');
        // Remove the bounce class after the animation completes (300ms)
        setTimeout(() => btn.classList.remove('bounce'), 300);
      });
    });
    
    // Default navigation to Home section
    navigateTo('home');
  });
  
  // Function to navigate between sections
  function navigateTo(sectionId) {
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => {
      section.style.display = 'none';
    });
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
      activeSection.style.display = 'block';
    }
  }
  
  // Function to add an item to the cart
  function addToCart(itemName) {
    const cart = document.getElementById('cartItems');
    // Remove "empty" message if present
    if (cart.innerHTML.includes('empty')) {
      cart.innerHTML = '';
    }
    // Create a new div for the item
    const itemDiv = document.createElement('div');
    itemDiv.textContent = itemName;
    cart.appendChild(itemDiv);
    alert(itemName + ' added to cart!');
  }
  
  // Function to simulate the checkout process
  function checkout() {
    alert('Checkout process initiated!');
  }
  
  // Function to send a message in the chat
  function sendMessage() {
    const input = document.getElementById('chatInput');
    const chatArea = document.getElementById('chatArea');
    const message = input.value.trim();
    if (message) {
      const messageDiv = document.createElement('div');
      messageDiv.textContent = message;
      chatArea.appendChild(messageDiv);
      input.value = '';
    }
  }
  
  // Dummy data for marketplace items
const marketplaceItems = [
    { id: 1, name: "Laptop", description: "A used laptop in good condition", price: 300 },
    { id: 2, name: "Bicycle", description: "A mountain bike", price: 150 },
    { id: 3, name: "Textbooks", description: "Used textbooks for various courses", price: 50 },
    // Add more items as needed
  ];
  
  // Function to load all marketplace items
  function loadMarketplaceItems() {
    const itemsContainer = document.getElementById("items");
    itemsContainer.innerHTML = "";
    marketplaceItems.forEach(item => {
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("item");
      itemDiv.innerHTML = `
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <p>Price: $${item.price}</p>
        <button class="btn" onclick="addToCart('${item.name}')">Add to Cart</button>
      `;
      itemsContainer.appendChild(itemDiv);
    });
  }
  
  // Function to filter marketplace items based on search query
  function filterMarketplace() {
    const query = document.getElementById("marketplaceSearch").value.toLowerCase();
    const filteredItems = marketplaceItems.filter(item =>
      item.name.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query)
    );
    const itemsContainer = document.getElementById("items");
    itemsContainer.innerHTML = "";
    filteredItems.forEach(item => {
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("item");
      itemDiv.innerHTML = `
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <p>Price: $${item.price}</p>
        <button class="btn" onclick="addToCart('${item.name}')">Add to Cart</button>
      `;
      itemsContainer.appendChild(itemDiv);
    });
  }
  
  // Update navigateTo function to load marketplace items when that section is activated
  function navigateTo(sectionId) {
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => {
      section.style.display = 'none';
    });
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
      activeSection.style.display = 'block';
      // If navigating to marketplace, load the items
      if (sectionId === "marketplace") {
        loadMarketplaceItems();
      }
    }
  }
  