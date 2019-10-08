import React from 'react';
import './scss/main.scss';

function App() {
  return (
    <div className="container">
      <header className="header">
        <img src={require('./img/logo.png')} className="logo" />

        <form action="#" className="search" onSubmit={() => console.log('press')}>
          <input type="text" className="search__input" placeholder="Search hotels" onChange={(e) => console.log(e.target.value)} />
          <button className="search__button"> 
            <img src={require("./img/SVG/magnifying-glass.svg")} className="search__icon" />
          </button>
        </form>
        <div className="user-nav">
          <button className="user-nav__box" onClick={() => console.log('bookmark')}>
            <img src={require("./img/SVG/bookmark.svg")} className="user-nav__icon"/>
            <div className="user-nav__notification">7</div>
          </button>
          <button className="user-nav__box" onClick={() => console.log('button')}>
            <img src={require("./img/SVG/chat.svg")} className="user-nav__icon"/>
          </button>
          <button className="user-nav__box" onClick={() => console.log('button')}>
            <img src={require("./img/SVG/heart.svg")} className="user-nav__icon"/>
          </button>
        </div>
      </header>
      <div className="content">
        <nav className="sidebar">
          <ul className="side-nav">
            <li className="side-nav__item">
              <a href="#" className="side-nav__link">
                <img src={require('./img/SVG/shop.svg')} className="side-nav__icon" />
                <span className="side-nav__desc">hotel</span> 
              </a>
            </li>
            <li className="side-nav__item">
              <a href="#" className="side-nav__link">
                <img src={require('./img/SVG/aircraft-take-off.svg')} className="side-nav__icon" />
                <span className="side-nav__desc">flight</span> 
              </a>
            </li>
            <li className="side-nav__item">
              <a href="#" className="side-nav__link">
                <img src={require('./img/SVG/key.svg')} className="side-nav__icon" />
                <span className="side-nav__desc">car rental</span> 
              </a>
            </li>
            <li className="side-nav__item">
              <a href="#" className="side-nav__link">
                <img src={require('./img/SVG/map.svg')} className="side-nav__icon" />
                <span className="side-nav__desc">tours</span> 
              </a>
            </li>
          </ul>
          <div className="legal">
            &copy; All rights reserved
          </div>
        </nav>
        <main className="hotel-view">
          <div className="jumbotron">
            <img src={require('./img/hotel1.jpg')} className="jumbotron__item"/>
            <img src={require('./img/hotel2.jpg')}  className="jumbotron__item"/>
            <img src={require('./img/hotel4.jpg')}  className="jumbotron__item"/>
          </div>
          <div className="overview">
            <h1 className="overview__heading">Hotel Park Sheraton</h1>
            <div className="overview__star-rating">
              <img src={require('./img/SVG/star.svg')} className="overview__star-icon" />
              <img src={require('./img/SVG/star.svg')} className="overview__star-icon" />
              <img src={require('./img/SVG/star.svg')} className="overview__star-icon" />
              <img src={require('./img/SVG/star.svg')} className="overview__star-icon" />
            </div>
            <div className="overview__location">
              <img src={require('./img/SVG/location-pin.svg')} className="overview__icon" />
              <button className="overview__location-text">Chennai</button>
            </div>
            <div className="overview__rating">
              <div className="overview__rating-text overview__rating-text--big">8.6</div>
              <div className="overview__rating-text">439 votes</div>
            </div>
          </div>
          <div className="details">
            <div className="description">
              <p className="paragraph">
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
              <p className="paragraph">
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
              </p>
              <ul className="feature-list">
                <li className="feature-list__item">Close to beach</li>
                <li className="feature-list__item">Free airport shuttle</li>
                <li className="feature-list__item">Air conditioning and heating</li>
                <li className="feature-list__item">Breakfast included</li>
                <li className="feature-list__item">We speak all languages</li>
                <li className="feature-list__item">Pets are allowed</li>
                <li className="feature-list__item">Free wifi in all rooms</li>
                <li className="feature-list__item">Perfect for families</li>
              </ul>
              <div className="recomendation">
                <div className="recomendation__count">
                  Lucy and 3 other friends recommend this hotel
                </div>
                <div className="recomendation__friends">
                  <img src={require('./img/users/user1.jpg')} className="recomendation__friends-image" />
                  <img src={require('./img/users/user2.jpg')} className="recomendation__friends-image" />
                  <img src={require('./img/users/user3.jpg')} className="recomendation__friends-image" />
                  <img src={require('./img/users/user3.jpg')} className="recomendation__friends-image" />
                </div>
              </div>
            </div>
            <div className="user-reviews">
              <div className="review">
                <div className="review__description">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</div>
                <div className="review__box">
                  <img src={require('./img/users/user1.jpg')} className="review__box-image"/>
                  <div className="review__box-nameDate">
                    <p>Maria</p>
                    <p>July 13, 2019</p>
                  </div>
                  <div className="review__rating">7.8</div>
                </div>
              </div>
              <div className="review">
                <div className="review__description">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</div>
                <div className="review__box">
                  <img src={require('./img/users/user2.jpg')} className="review__box-image"/>
                  <div className="review__box-nameDate">
                    <p>Austin</p>
                    <p>July 28, 2019</p>
                  </div>
                  <div className="review__rating">8.2</div>
                </div>
              </div>
              <div className="review__button">
                <button className="inline-button">View More <span>&#8594;</span></button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div> 
  );
}

export default App;
