import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div>
      <div className="upper">
        <img className="logo" src="/cafe-image/cafe-logo.webp" alt="Cafe Logo" />
        <Link className="join" to="/">Back to Home-page</Link>
      </div>

      <div className="Headline">
        <div className="Item">Our Specialties</div>
        <div className="Description">Description</div>
        <div className="Price">Price</div>
      </div>

      <div className="menu">
        <div className="item">Cappuccino</div>
        <div className="description">Espresso coffee topped with steamed milk foam and a sprinkle of cocoa powder.</div>
        <div className="price">₹150</div>
      </div>

      <div class="menu">
      <div class="item">Espresso</div>
      <div class="description">Rich and intense single shot of coffee</div>
      <div class="price">₹80</div>
    </div>

        <div class="menu">
        <div class="item">Latte</div>
        <div class="description">Smooth espresso with steamed milk</div>
        <div class="price">₹130</div>
        </div>

        <div class="menu">
        <div class="item">Iced Coffee</div>
        <div class="description">Cold coffee served over ice</div>
        <div class="price">₹140</div>
        </div>

        <div class="menu">
        <div class="item">Chocolate Chip Cookie</div>
        <div class="description">Classic cookie with gooey chocolate chips</div>
        <div class="price">₹80</div>
        </div>

        <div class="menu">
        <div class="item">Classic Veg Sandwich</div>
        <div class="description">Melted cheese between toasted bread</div>
        <div class="price">₹120</div>
        </div>

        <div class="menu">
        <div class="item">Brownie Sundae</div>
        <div class="description">
            Warm brownie with ice cream and chocolate syrup
        </div>
        <div class="price">₹180</div>
        </div>

        <div class="menu">
        <div class="item">Chocolate Shake</div>
        <div class="description">Rich chocolate shake with chocolate drizzle</div>
        <div class="price">₹150</div>
        </div>

        <div class="menu">
        <div class="item">Strawberry Smoothie</div>
        <div class="description">Refreshing blend of strawberries and yogurt</div>
        <div class="price">₹120</div>
        </div>

        <div class="menu">
        <div class="item">Ice Cream Scoop</div>
        <div class="description">Choice of vanilla, chocolate, or strawberry</div>
        <div class="price">₹70 per scoop</div>
        </div>

        <div class="menu">
        <div class="item">Paneer Wrap</div>
        <div class="description">Grilled paneer with veggies in a wrap</div>
        <div class="price">₹130</div>
        </div>


      <h2 className="discount">On ordering 3 or more items, you will get a 30% discount !!!</h2>
    </div>
  );
};

export default Menu;
