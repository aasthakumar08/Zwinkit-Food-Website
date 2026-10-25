import { useState } from "react";

function App() {
  const [location, setLocation] = useState("");
  const [searchText, setSearchText] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <header>
        <div className="logo">
          <span className="z">Z</span>winkit
        </div>

        <input type="checkbox" id="menu" className="menu-toggle" />
        <label htmlFor="menu" className="menu-icon">
          ☰
        </label>

        <nav>
          <a href="/">Home</a>
          <a href="/FEE_PROJECT_FINAL/Restaurant.html">Restaurant</a>
          <a href="#offers">Offers</a>
          <a href="/FEE_PROJECT_FINAL/About.html">About Us</a>
          <a href="/FEE_PROJECT_FINAL/Cart.html">Cart</a>
          <a href="/FEE_PROJECT_FINAL/Login.html">Login/Sign Up</a>
        </nav>
      </header>

      <div className="class1">
        <h3 className="craving">Craving Something</h3>
        <h1 className="delecious">Delicious?</h1>
        <h3 className="hero-subtitle">We've got it!</h3>

        <h5 className="quote">
          Discover the best food from top <br />
          restaurants, delivered to your door.
        </h5>

        <form className="search-form" onSubmit={handleSearch}>
          <select
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          >
            <option value="">📍 Your Location</option>
            <option>Chandigarh</option>
            <option>Amritsar</option>
            <option>Ludhiana</option>
            <option>Nangal</option>
            <option>Jalandhar</option>
            <option>Rajpura</option>
          </select>

          <input
            type="text"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            placeholder="🔍 Search for food or restaurants..."
          />
        </form>

        <img src="/pizza.jpeg" className="pizza" alt="Pizza" />
      </div>

      <section className="craving-section">
        <h2 className="section-title">What are you craving today?</h2>

        <div className="category-container">
          <div className="category-card pizza-card">
            <img src="/pizza1.jpg" alt="Pizza" />
            <h3>Pizza</h3>
          </div>

          <div className="category-card Burger-card">
            <img src="/Burger.jpg" alt="Burgers" />
            <h3>Burgers</h3>
          </div>

          <div className="category-card indian-card">
            <img src="/r6.jpg" alt="Indian food" />
            <h3>Indian</h3>
          </div>

          <div className="category-card chinese-card">
            <img src="/chinese.jpg" alt="Chinese food" />
            <h3>Chinese</h3>
          </div>

          <div className="category-card rolls-card">
            <img src="/rolls.jpg" alt="Rolls" />
            <h3>Rolls</h3>
          </div>

          <div className="category-card dessert-card">
            <img src="/dessert.jpg" alt="Desserts" />
            <h3>Desserts</h3>
          </div>

          <div className="category-card beverage-card">
            <img src="/beverages.jpg" alt="Beverages" />
            <h3>Beverages</h3>
          </div>
        </div>
      </section>

      <section id="offers" className="offer-section">
        <h2 className="offer-title">Offers for you</h2>

        <div className="offer-container">
          <div className="offer-card offer1">
            <div className="offer-text">
              <h2>20% OFF</h2>
              <p>On your first order</p>
              <button type="button">FIRST20</button>
            </div>
            <img src="/offer-pizza.png" alt="Pizza offer" />
          </div>

          <div className="offer-card offer2">
            <div className="offer-text">
              <h2>FREE DELIVERY</h2>
              <p>On orders above ₹299</p>
            </div>
            <img src="/delivery.png" alt="Delivery" />
          </div>

          <div className="offer-card offer3">
            <div className="offer-text">
              <h2>FLAT ₹100OFF</h2>
              <p>On selected retaurants</p>
            </div>
            <img src="/food.png" alt="Food offer" />
          </div>
        </div>
      </section>

      <section className="restaurant-section">
        <h2 className="restaurant-title">⭐Top Rated Restaurants</h2>

        <div className="restaurant-container">
          <div className="restaurant-card">
            <img src="/r1.jpg" alt="Restaurant" />
            <h3>Salsa Spice &amp; Grill</h3>
            <p>⭐ 4.8(1.2K+) - 25-30 min</p>
            <p>Continental, Grill, Italliian</p>
          </div>

          <div className="restaurant-card">
            <img src="/r6.jpg" alt="Restaurant" />
            <h3>House Of Parantha</h3>
            <p>⭐ 4.8 (1.3K+) - 10-15min</p>
            <p>Paranthas, Beverages</p>
          </div>

          <div className="restaurant-card">
            <img src="/r3.jpg" alt="Restaurant" />
            <h3>The Tables</h3>
            <p>⭐ 4.7 (11K+) - 25-30min</p>
            <p>North Indian, Chinese, Itallian</p>
          </div>

          <div className="restaurant-card">
            <img src="/r4.jpg" alt="Restaurant" />
            <h3>Sharman Jain Sweets</h3>
            <p>⭐ 4.7 (1.10K+) - 40-45min</p>
            <p>Sweets, Snacks, North Indian</p>
          </div>

          <div className="restaurant-card">
            <img src="/r5.jpg" alt="Restaurant" />
            <h3>Friend's Dhaba</h3>
            <p>⭐ 4.7 (2.0K+) - 30-35min</p>
            <p>North Indian, Punjabi, Tandoor</p>
          </div>

          <div className="restaurant-card">
            <img src="/r7.jpg" alt="Restaurant" />
            <h3>Under The Mango Tree</h3>
            <p>⭐ 4.8 (13.3K+) - 10-15min</p>
            <p>Chinese, North Indian</p>
          </div>
        </div>
      </section>

      <div className="food-row">
        <section className="budget-section">
          <h2 className="budget-title">Tasty picks under ₹199</h2>

          <div className="budget-container">
            <div className="budget-card">
              <img src="/sandwich.jpg" alt="Veg Sandwich" />
              <div className="budget-info">
                <h3>Veg Sandwich</h3>
                <p>⭐ 4.5 • Quick Bite</p>
                <span className="price">₹99</span>
              </div>
            </div>

            <div className="budget-card">
              <img src="/fries.jpg" alt="Fries" />
              <div className="budget-info">
                <h3>Peri Peri Fries</h3>
                <p>⭐ 4.5 • Snacks</p>
                <span className="price">₹129</span>
              </div>
            </div>

            <div className="budget-card">
              <img src="/parantha.jpg" alt="Parantha" />
              <div className="budget-info">
                <h3>Aloo Parantha</h3>
                <p>⭐ 4.5 • North Indian</p>
                <span className="price">₹109</span>
              </div>
            </div>

            <div className="budget-card">
              <img src="/coffee.jpg" alt="Cold Coffee" />
              <div className="budget-info">
                <h3>Cold Coffee</h3>
                <p>⭐ 4.5 • Beverages</p>
                <span className="price">₹99</span>
              </div>
            </div>
          </div>
        </section>

        <section className="night-section">
          <h2 className="night-title">🌙Late Night Cravings</h2>

          <div className="night-container">
            <div className="night-card">
              <img src="/burger2.jpg" alt="Burger" />
              <div className="night-info">
                <h3>Classic Burger</h3>
                <p>⭐ 4.6 • Fast Food</p>
                <span className="night-price">₹99</span>
              </div>
            </div>

            <div className="night-card">
              <img src="/maggi.jpg" alt="Maggi" />
              <div className="night-info">
                <h3>Masala Maggi</h3>
                <p>⭐ 4.6 • Quick Bite</p>
                <span className="night-price">₹139</span>
              </div>
            </div>

            <div className="night-card">
              <img src="/fries2.jpg" alt="Fries" />
              <div className="night-info">
                <h3>Loaded Fries</h3>
                <p>⭐ 4.6 • Snacks</p>
                <span className="night-price">₹109</span>
              </div>
            </div>

            <div className="night-card">
              <img src="/pizza2.jpg" alt="Pizza" />
              <div className="night-info">
                <h3>Cheese Pizza</h3>
                <p>⭐ 4.6 • Italian</p>
                <span className="night-price">₹159</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="footer">
        <div className="footer-main">
          <div className="footer-brand">
            <h2>Zwinkit</h2>
            <p>Good food. Great mood.</p>

            <div className="social-links">
              <a href="#">f</a>
              <a href="#">◎</a>
              <a href="#">𝕏</a>
              <a href="#">▶</a>
            </div>
          </div>

          <div className="footer-column">
            <h3>Company</h3>
            <a href="/FEE_PROJECT_FINAL/About.html">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
            <a href="#">Terms &amp; Conditions</a>
          </div>

          <div className="footer-column">
            <h3>Help &amp; Support</h3>
            <a href="#">Help Center</a>
            <a href="#">FAQs</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Refund Policy</a>
          </div>

          <div className="footer-column">
            <h3>Contact Us</h3>
            <a href="#">+91 98765 43210</a>
            <a href="#">support@zwinkit.com</a>
            <a href="#">Ludhiana, Punjab</a>
            <a href="#">India</a>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 Zwinkit. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default App;