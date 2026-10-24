
"use strict";

/*
  CAMPUSCART
  Front-end marketplace demonstration.

  Important:
  - Products below are sample listings, not real offers.
  - localStorage is browser storage, not a server database.
  - No real payment or order processing occurs.
*/

const STORAGE_KEYS = {
  cart: "campuscart_cart_v1",
  wishlist: "campuscart_wishlist_v1",
  applications: "campuscart_vendor_applications_v1"
};

const products = [
  {
    id: 1,
    name: "Everyday Tote Bag",
    category: "Fashion",
    price: 8500,
    vendor: "Everyday Finds",
    campus: "Lead City University",
    description: "A versatile everyday bag for books, essentials and campus outings.",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 2,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 18000,
    vendor: "Tech Corner",
    campus: "University of Ibadan",
    description: "Wireless headphones for music, calls and study sessions.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 3,
    name: "Classic Sneakers",
    category: "Fashion",
    price: 22000,
    vendor: "Street Finds",
    campus: "University of Lagos",
    description: "Casual everyday sneakers for campus and weekend outings.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 4,
    name: "Minimal Wristwatch",
    category: "Fashion",
    price: 15000,
    vendor: "Time & Style",
    campus: "Lead City University",
    description: "A minimal wristwatch to complete your everyday look.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 5,
    name: "Laptop for Study",
    category: "Electronics",
    price: 250000,
    vendor: "Tech Corner",
    campus: "Covenant University",
    description: "A sample laptop listing for study, assignments and productivity.",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 6,
    name: "Casual Cotton T-shirt",
    category: "Fashion",
    price: 7500,
    vendor: "Everyday Finds",
    campus: "University of Lagos",
    description: "A simple casual tee for daily wear and relaxed campus days.",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 7,
    name: "Skincare Essentials",
    category: "Beauty",
    price: 12000,
    vendor: "Glow Essentials",
    campus: "Covenant University",
    description: "A sample collection of everyday skincare essentials.",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 8,
    name: "Fresh Pizza",
    category: "Food",
    price: 6500,
    vendor: "Campus Bites",
    campus: "University of Lagos",
    description: "A sample pizza listing. Confirm availability and delivery with the seller.",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 9,
    name: "Fruit Bowl",
    category: "Food",
    price: 2500,
    vendor: "Campus Bites",
    campus: "Lead City University",
    description: "A colourful fruit bowl for a quick snack between lectures.",
    image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 10,
    name: "Desk Lamp",
    category: "Room Essentials",
    price: 9500,
    vendor: "Room Refresh",
    campus: "University of Ibadan",
    description: "A compact desk lamp for your study table and reading corner.",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 11,
    name: "Ceramic Coffee Mug",
    category: "Room Essentials",
    price: 3500,
    vendor: "Room Refresh",
    campus: "Obafemi Awolowo University",
    description: "A reusable ceramic mug for your room or study desk.",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 12,
    name: "Graphic Design Service",
    category: "Services",
    price: 5000,
    vendor: "Pixel Studio",
    campus: "Lead City University",
    description: "A sample starting price for simple flyers and graphics. Confirm scope with the provider.",
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 13,
    name: "Travel Backpack",
    category: "Fashion",
    price: 14500,
    vendor: "Street Finds",
    campus: "Lagos State University",
    description: "A practical backpack for books, chargers and daily essentials.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 14,
    name: "Portable Speaker",
    category: "Electronics",
    price: 16000,
    vendor: "Tech Corner",
    campus: "University of Nigeria, Nsukka",
    description: "A compact speaker for listening to music at home or in your room.",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 15,
    name: "Running Shoes",
    category: "Fashion",
    price: 19500,
    vendor: "Street Finds",
    campus: "Obafemi Awolowo University",
    description: "Sporty everyday footwear for casual outings and activities.",
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 16,
    name: "Storage Organiser",
    category: "Room Essentials",
    price: 6000,
    vendor: "Room Refresh",
    campus: "Covenant University",
    description: "A sample organiser for keeping small items tidy in your room.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=700&q=85"
  }
];

/* DOM elements */

const $ = selector => document.querySelector(selector);

const productGrid = $("#product-grid");
const searchForm = $("#search-form");
const searchInput = $("#search-input");
const campusFilter = $("#campus-filter");
const categoryFilter = $("#category-filter");
const sortFilter = $("#sort-filter");
const resultsMessage = $("#results-message");

const cartCount = $("#cart-count");
const drawerCartCount = $("#drawer-cart-count");
const cartItemsContainer = $("#cart-items");
const cartSubtotal = $("#cart-subtotal");

const wishlistCount = $("#wishlist-count");
const wishlistItemsContainer = $("#wishlist-items");

const cartDrawer = $("#cart-drawer");
const cartOverlay = $("#cart-overlay");
const wishlistDrawer = $("#wishlist-drawer");
const wishlistOverlay = $("#wishlist-overlay");

const vendorModal = $("#vendor-modal");
const checkoutModal = $("#checkout-modal");
const toast = $("#toast");

let selectedCategory = "All";
let activeDrawer = null;
let activeModal = null;
let lastFocusedElement = null;
let toastTimeout = null;

let cart = loadCart();
let wishlist = loadWishlist();

/* Storage helpers */

function readStorage(key, fallback) {
  try {
    const saved = localStorage.getItem(key);
    return saved === null ? fallback : JSON.parse(saved);
  } catch (error) {
    console.warn("Could not read browser storage:", key, error);
    return fallback;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.warn("Could not save browser storage:", key, error);
    showToast("Browser storage is unavailable. Changes may not persist.");
    return false;
  }
}

function loadCart() {
  const saved = readStorage(STORAGE_KEYS.cart, []);

  if (!Array.isArray(saved)) return [];

  return saved
    .filter(item =>
      item &&
      Number.isInteger(item.id) &&
      Number.isInteger(item.quantity) &&
      item.quantity > 0 &&
      products.some(product => product.id === item.id)
    )
    .map(item => ({
      id: item.id,
      quantity: Math.min(item.quantity, 99)
    }));
}

function loadWishlist() {
  const saved = readStorage(STORAGE_KEYS.wishlist, []);

  if (!Array.isArray(saved)) return [];

  return [...new Set(saved.filter(id =>
    Number.isInteger(id) &&
    products.some(product => product.id === id)
  ))];
}

function saveCart() {
  writeStorage(STORAGE_KEYS.cart, cart);
}

function saveWishlist() {
  writeStorage(STORAGE_KEYS.wishlist, wishlist);
}

/* General helpers */

function formatPrice(amount) {
  return "₦" + amount.toLocaleString("en-NG");
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function getProduct(id) {
  return products.find(product => product.id === id);
}

function getCartQuantity() {
  return cart.reduce((total, item) => total + item.quantity, 0);
}

function getCartSubtotal() {
  return cart.reduce((total, item) => {
    const product = getProduct(item.id);
    return total + (product ? product.price * item.quantity : 0);
  }, 0);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("visible");

  clearTimeout(toastTimeout);

  toastTimeout = setTimeout(() => {
    toast.classList.remove("visible");
  }, 2600);
}

/* Product marketplace */

function renderProducts() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const selectedCampus = campusFilter.value;
  const chosenCategory = categoryFilter.value;

  let filteredProducts = products.filter(product => {
    const searchableText = [
      product.name,
      product.category,
      product.vendor,
      product.campus,
      product.description
    ].join(" ").toLowerCase();

    const matchesSearch = searchableText.includes(searchTerm);

    const matchesCampus =
      selectedCampus === "all" ||
      product.campus === selectedCampus;

    const matchesCategory =
      chosenCategory === "All" ||
      product.category === chosenCategory;

    const matchesSelectedCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    return matchesSearch &&
      matchesCampus &&
      matchesCategory &&
      matchesSelectedCategory;
  });

  switch (sortFilter.value) {
    case "price-low":
      filteredProducts.sort((a, b) => a.price - b.price);
      break;

    case "price-high":
      filteredProducts.sort((a, b) => b.price - a.price);
      break;

    case "name":
      filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
      break;

    default:
      filteredProducts.sort((a, b) => a.id - b.id);
  }

  resultsMessage.textContent =
    `${filteredProducts.length} product${filteredProducts.length === 1 ? "" : "s"} found`;

  if (filteredProducts.length === 0) {
    productGrid.innerHTML = `
      <div class="empty-state">
        <h3>No products found</h3>
        <p>Try another search or adjust your filters.</p>
        <button class="primary-button" data-action="clear-filters">
          Clear all filters
        </button>
      </div>
    `;
    return;
  }

  productGrid.innerHTML = filteredProducts.map(product => {
    const isWishlisted = wishlist.includes(product.id);

    return `
      <article class="product-card">
        <div class="product-image-wrap">
          <img
            class="product-image"
            src="${escapeHTML(product.image)}"
            alt="${escapeHTML(product.name)}"
            loading="lazy"
          >

          <span class="product-badge">
            ${escapeHTML(product.category)}
          </span>

          <button
            type="button"
            class="wishlist-button ${isWishlisted ? "active" : ""}"
            data-wishlist="${product.id}"
            aria-label="${isWishlisted ? "Remove from" : "Add to"} wishlist: ${escapeHTML(product.name)}"
            aria-pressed="${isWishlisted}"
          >${isWishlisted ? "♥" : "♡"}</button>
        </div>

        <div class="product-info">
          <p class="product-category">${escapeHTML(product.category)}</p>
          <h3>${escapeHTML(product.name)}</h3>
          <p class="product-description">${escapeHTML(product.description)}</p>
          <p class="product-vendor">
            ${escapeHTML(product.vendor)}<br>
            ${escapeHTML(product.campus)}
          </p>

          <p class="product-rating">
            Sample listing <span>· Not verified</span>
          </p>

          <div class="product-bottom">
            <span class="product-price">${formatPrice(product.price)}</span>
            <button
              type="button"
              class="add-to-cart"
              data-add="${product.id}"
            >Add to bag +</button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function clearFilters() {
  searchInput.value = "";
  campusFilter.value = "all";
  categoryFilter.value = "All";
  sortFilter.value = "featured";
  selectedCategory = "All";

  document.querySelectorAll(".category-card").forEach(button => {
    button.classList.remove("active");
  });

  renderProducts();
}

searchForm.addEventListener("submit", event => {
  event.preventDefault();
  renderProducts();
  $("#marketplace").scrollIntoView({ behavior: "smooth" });
});

searchInput.addEventListener("input", renderProducts);
campusFilter.addEventListener("change", renderProducts);
categoryFilter.addEventListener("change", () => {
  selectedCategory = "All";

  document.querySelectorAll(".category-card").forEach(button => {
    button.classList.remove("active");
  });

  renderProducts();
});

sortFilter.addEventListener("change", renderProducts);

$("#clear-filters").addEventListener("click", clearFilters);

document.querySelectorAll(".category-card").forEach(button => {
  button.addEventListener("click", () => {
    selectedCategory = button.dataset.category;
    categoryFilter.value = selectedCategory;

    document.querySelectorAll(".category-card").forEach(card => {
      card.classList.toggle("active", card === button);
    });

    renderProducts();
    $("#marketplace").scrollIntoView({ behavior: "smooth" });
  });
});

document.querySelectorAll(".quick-search").forEach(button => {
  button.addEventListener("click", () => {
    searchInput.value = button.dataset.search;
    renderProducts();
    $("#marketplace").scrollIntoView({ behavior: "smooth" });
  });
});

/* Cart operations */

function addToCart(id) {
  const product = getProduct(id);

  if (!product) return;

  const existing = cart.find(item => item.id === id);

  if (existing) {
    if (existing.quantity >= 99) {
      showToast("Maximum quantity reached.");
      return;
    }

    existing.quantity += 1;
  } else {
    cart.push({ id, quantity: 1 });
  }

  saveCart();
  renderCart();
  renderProducts();

  showToast(`${product.name} added to your bag.`);
}

function changeQuantity(id, change) {
  const item = cart.find(entry => entry.id === id);

  if (!item) return;

  item.quantity += change;

  if (item.quantity <= 0) {
    cart = cart.filter(entry => entry.id !== id);
  } else {
    item.quantity = Math.min(item.quantity, 99);
  }

  saveCart();
  renderCart();
  renderProducts();
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
  renderCart();
  renderProducts();
  showToast("Item removed from your bag.");
}

function renderCart() {
  const totalQuantity = getCartQuantity();
  const subtotal = getCartSubtotal();

  cartCount.textContent = totalQuantity;
  drawerCartCount.textContent = `(${totalQuantity})`;
  cartSubtotal.textContent = formatPrice(subtotal);

  $("#checkout-button").disabled = cart.length === 0;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="empty-cart">
        <div class="empty-symbol">▤</div>
        <h3>Your bag is waiting</h3>
        <p>Add something you love from the marketplace.</p>
      </div>
    `;
    return;
  }

  cartItemsContainer.innerHTML = cart.map(item => {
    const product = getProduct(item.id);

    if (!product) return "";

    return `
      <article class="cart-item">
        <img
          src="${escapeHTML(product.image)}"
          alt="${escapeHTML(product.name)}"
        >

        <div class="cart-item-content">
          <h3>${escapeHTML(product.name)}</h3>
          <p>${escapeHTML(product.vendor)}</p>
          <div class="cart-item-price">
            ${formatPrice(product.price * item.quantity)}
          </div>

          <div class="cart-item-controls">
            <div class="quantity-control">
              <button type="button" data-quantity="${product.id}" data-change="-1"
                aria-label="Decrease ${escapeHTML(product.name)} quantity">−</button>
              <span>${item.quantity}</span>
              <button type="button" data-quantity="${product.id}" data-change="1"
                aria-label="Increase ${escapeHTML(product.name)} quantity"
                ${item.quantity >= 99 ? "disabled" : ""}>+</button>
            </div>

            <button type="button" class="remove-button"
              data-remove="${product.id}">Remove</button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

cartItemsContainer.addEventListener("click", event => {
  const quantityButton = event.target.closest("[data-quantity]");
  const removeButton = event.target.closest("[data-remove]");

  if (quantityButton) {
    changeQuantity(
      Number(quantityButton.dataset.quantity),
      Number(quantityButton.dataset.change)
    );
  } else if (removeButton) {
    removeFromCart(Number(removeButton.dataset.remove));
  }
});

/* Wishlist operations */

function toggleWishlist(id) {
  const product = getProduct(id);

  if (!product) return;

  if (wishlist.includes(id)) {
    wishlist = wishlist.filter(item => item !== id);
    showToast("Removed from your wishlist.");
  } else {
    wishlist.push(id);
    showToast("Saved to your wishlist.");
  }

  saveWishlist();
  renderWishlist();
  renderProducts();
}

function renderWishlist() {
  wishlistCount.textContent = wishlist.length;

  if (wishlist.length === 0) {
    wishlistItemsContainer.innerHTML = `
      <div class="empty-cart">
        <div class="empty-symbol">♡</div>
        <h3>No saved items yet</h3>
        <p>Tap the heart on any product to save it here.</p>
      </div>
    `;
    return;
  }

  wishlistItemsContainer.innerHTML = wishlist.map(id => {
    const product = getProduct(id);

    if (!product) return "";

    return `
      <article class="cart-item">
        <img src="${escapeHTML(product.image)}" alt="${escapeHTML(product.name)}">
        <div class="cart-item-content">
          <h3>${escapeHTML(product.name)}</h3>
          <p>${escapeHTML(product.campus)}</p>
          <div class="cart-item-price">${formatPrice(product.price)}</div>
          <button type="button" class="wishlist-add" data-wishlist-add="${product.id}">
            Add to bag
          </button>
          <button type="button" class="remove-button"
            data-wishlist-remove="${product.id}">Remove from wishlist</button>
        </div>
      </article>
    `;
  }).join("");
}

wishlistItemsContainer.addEventListener("click", event => {
  const addButton = event.target.closest("[data-wishlist-add]");
  const removeButton = event.target.closest("[data-wishlist-remove]");

  if (addButton) {
    addToCart(Number(addButton.dataset.wishlistAdd));
  } else if (removeButton) {
    toggleWishlist(Number(removeButton.dataset.wishlistRemove));
  }
});

productGrid.addEventListener("click", event => {
  const addButton = event.target.closest("[data-add]");
  const wishlistButton = event.target.closest("[data-wishlist]");
  const clearButton = event.target.closest('[data-action="clear-filters"]');

  if (addButton) {
    addToCart(Number(addButton.dataset.add));
  } else if (wishlistButton) {
    toggleWishlist(Number(wishlistButton.dataset.wishlist));
  } else if (clearButton) {
    clearFilters();
  }
});

/* Drawer and modal management */

function updateScrollLock() {
  const drawerOpen =
    activeDrawer === "cart" || activeDrawer === "wishlist";

  document.body.classList.toggle(
    "no-scroll",
    drawerOpen || Boolean(activeModal)
  );
}

function openDrawer(name) {
  closeDrawer();

  lastFocusedElement = document.activeElement;
  activeDrawer = name;

  const drawer = name === "cart" ? cartDrawer : wishlistDrawer;
  const overlay = name === "cart" ? cartOverlay : wishlistOverlay;

  overlay.hidden = false;
  drawer.inert = false;
  drawer.setAttribute("aria-hidden", "false");

  requestAnimationFrame(() => {
    overlay.classList.add("visible");
    drawer.classList.add("open");
    drawer.querySelector(".close-button").focus();
  });

  updateScrollLock();
}

function closeDrawer(restoreFocus = true) {
  if (!activeDrawer) return;

  const drawer = activeDrawer === "cart" ? cartDrawer : wishlistDrawer;
  const overlay = activeDrawer === "cart" ? cartOverlay : wishlistOverlay;

  drawer.classList.remove("open");
  drawer.inert = true;
  drawer.setAttribute("aria-hidden", "true");
  overlay.classList.remove("visible");

  setTimeout(() => {
    if (activeDrawer === null) {
      overlay.hidden = true;
    }
  }, 260);

  activeDrawer = null;
  updateScrollLock();

  if (restoreFocus && lastFocusedElement?.isConnected) {
    lastFocusedElement.focus();
  }
}

function openModal(modal) {
  closeDrawer(false);
  closeModal(false);

  lastFocusedElement = document.activeElement;
  activeModal = modal;
  modal.hidden = false;

  updateScrollLock();

  const focusable = modal.querySelector(
    "input, select, textarea, button"
  );

  if (focusable) focusable.focus();
}

function closeModal(restoreFocus = true) {
  if (!activeModal) return;

  activeModal.hidden = true;
  activeModal = null;
  updateScrollLock();

  if (restoreFocus && lastFocusedElement?.isConnected) {
    lastFocusedElement.focus();
  }
}

$("#cart-open").addEventListener("click", () => {
  renderCart();
  openDrawer("cart");
});

$("#cart-close").addEventListener("click", () => closeDrawer());
$("#continue-shopping").addEventListener("click", () => closeDrawer());

cartOverlay.addEventListener("click", () => closeDrawer());

$("#wishlist-open").addEventListener("click", () => {
  renderWishlist();
  openDrawer("wishlist");
});

$("#wishlist-close").addEventListener("click", () => closeDrawer());
wishlistOverlay.addEventListener("click", () => closeDrawer());

$("#vendor-open").addEventListener("click", () => {
  openModal(vendorModal);
});

$("#vendor-close").addEventListener("click", () => closeModal());

vendorModal.addEventListener("click", event => {
  if (event.target === vendorModal) closeModal();
});

$("#checkout-close").addEventListener("click", () => closeModal());

checkoutModal.addEventListener("click", event => {
  if (event.target === checkoutModal) closeModal();
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    if (activeModal) {
      closeModal();
    } else if (activeDrawer) {
      closeDrawer();
    }
  }

  if (event.key === "Tab" && activeModal) {
    const focusable = [
      ...activeModal.querySelectorAll(
        'button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), a[href]'
      )
    ].filter(element => element.offsetParent !== null);

    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});

/* Vendor applications: browser-only demo */

$("#vendor-form").addEventListener("submit", event => {
  event.preventDefault();

  const form = event.currentTarget;

  if (!form.reportValidity()) return;

  const formData = new FormData(form);

  const application = {
    id: crypto.randomUUID
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(36).slice(2)}`,
    businessName: String(formData.get("businessName") || "").trim(),
    fullName: String(formData.get("fullName") || "").trim(),
    email: String(formData.get("email") || "").trim(),
    phone: String(formData.get("phone") || "").trim(),
    campus: String(formData.get("campus") || ""),
    category: String(formData.get("category") || ""),
    description: String(formData.get("description") || "").trim(),
    submittedAt: new Date().toISOString(),
    status: "Demo application — not submitted to an administrator"
  };

  if (
    !application.businessName ||
    !application.fullName ||
    !application.email ||
    !application.phone ||
    !application.campus ||
    !application.category ||
    !application.description
  ) {
    showToast("Please complete all the required fields.");
    return;
  }

  const applications = readStorage(STORAGE_KEYS.applications, []);

  if (!Array.isArray(applications)) {
    showToast("Could not save the application in this browser.");
    return;
  }

  applications.push(application);

  if (!writeStorage(STORAGE_KEYS.applications, applications)) {
    return;
  }

  form.reset();
  closeModal();
  showToast("Demo application saved in this browser.");
});

/* Demo checkout */

function openCheckout() {
  if (cart.length === 0) {
    showToast("Your bag is empty.");
    return;
  }

  const summary = $("#checkout-summary");

  summary.innerHTML = cart.map(item => {
    const product = getProduct(item.id);

    if (!product) return "";

    return `
      <div class="checkout-summary-item">
        <span>${escapeHTML(product.name)} × ${item.quantity}</span>
        <strong>${formatPrice(product.price * item.quantity)}</strong>
      </div>
    `;
  }).join("");

  $("#checkout-total").textContent = formatPrice(getCartSubtotal());

  openModal(checkoutModal);
}

$("#checkout-button").addEventListener("click", openCheckout);

$("#demo-order-button").addEventListener("click", () => {
  if (cart.length === 0) {
    closeModal();
    showToast("Your bag is empty.");
    return;
  }

  closeModal();
  closeDrawer(false);

  showToast(
    "Demo complete. No real order or payment was created."
  );
});

/* Mobile navigation */

const mobileMenu = $("#mobile-menu");
const navLinks = $("#nav-links");

mobileMenu.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  mobileMenu.setAttribute("aria-expanded", String(isOpen));
  mobileMenu.textContent = isOpen ? "×" : "☰";
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    mobileMenu.setAttribute("aria-expanded", "false");
    mobileMenu.textContent = "☰";
  });
});

/* Image fallback */

document.addEventListener("error", event => {
  const image = event.target;

  if (!(image instanceof HTMLImageElement)) return;
  if (!image.classList.contains("product-image") &&
      !image.closest(".cart-item")) return;

  if (image.dataset.fallbackApplied) return;

  image.dataset.fallbackApplied = "true";
  image.src = "https://placehold.co/600x400/f4f8fc/0b1f3a?text=Product+Image";
}, true);

/* Initial render */

$("#current-year").textContent = new Date().getFullYear();

renderProducts();
renderCart();
renderWishlist();
