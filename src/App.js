import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import Product from './Product';

const coinClickerDesc = "Coin Clicker is an incremental game where to make money, progress and " +
  "explore, you click the coin."

const retailBossDesc = "Become the boss of a retail shop and lead it to success in this " +
  "real-time strategy game!"

const sparkRushDesc = "Spark Rush is a challenging, exciting arcade game. Take control of a " +
  "small spark and get as far as you can before being extinguished. "

function App(props) {
  return (
    <Fragment>
      <header>
        <h1 className="unselectable">NORTHRONICS</h1>
      </header>
      <main className="center">
        <Product
          name="Coin Clicker"
          link="https://play.google.com/store/apps/details?id=com.northronics.minter"
          desc={coinClickerDesc} />
        <Product
          name="Retail Boss"
          link="https://play.google.com/store/apps/details?id=com.northerndroid.retailboss"
          desc={retailBossDesc} />
        <Product
          name="Spark Rush"
          link="https://play.google.com/store/apps/details?id=com.northronics.sparkrush"
          desc={coinClickerDesc} />
      </main>
    </Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
