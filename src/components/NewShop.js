// import React here
import React from 'react';

class NewShop extends React.Component {
  render() {
    return (
      <div class="shop-container">
        {/* <!-- shop photo--> */}
        <img class="shop-img" src="/assets/shops-images/Anker.jpg" />
        {/* <img class="shop-img" src="../../assets/shops-images/Anker.jpg" /> */}
        {/* <!-- site--> */}
        <img class="logo-site" src="../assets/logos/atone.svg" />
        <img class="logo-site" src="../../../../assets/logos/NPatobarai.svg" />
        {/* <!-- name--> */}
        <p class="shop-name single-line">Francfrancオンラインストア</p>
        {/* <!-- campaign--> */}
        <p class="shop-campaign">キャンペーン中</p>
      </div>
    );
  }
}

export default NewShop;