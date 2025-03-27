// import React here
import React from 'react';

class Recommend extends React.Component {
  render() {
    return (
      <div class="swiper" navigation="true">
        {/* <!-- Additional required wrapper --> */}
        <div class="swiper-wrapper">
          {/* <!-- Slides --> */}
          <div class="my-swiper-slide">
            <div class="banner-container">
              <img class="banner" src="assets/carousel-images/carousel1.png" alt="carousel"></img>
            </div>
            <div class="title text-max-3-lines">必ず全員もらえる！300ptプレゼントキャンペーン</div>
            <div class="description text-max-3-lines">atoneのご利用でお得！NPポイント300ptをプレゼント！</div>
          </div>
          <div class="my-swiper-slide">
            <div class="banner-container">
              <img class="banner" src="assets/carousel-images/202502_atoneCP_KV.png" alt="carousel"></img>
            </div>
            <div class="title text-max-3-lines">【NP×ファミリーマート】ハズレの場合も参加賞あり！ 2000円相当のNPポイントが抽選で500名様にあたる！</div>
            <div class="description text-max-3-lines">ハズレなし！抽選で500名様に2000ポイントプレゼント！</div>
          </div>
          <div class="my-swiper-slide">
            <div class="banner-container">
              <img class="banner text-max-3-lines"
                src="assets/carousel-images/202502_Qoo10_15CB_before_KV.png" alt="carousel"></img>
            </div>
            <div class="title text-max-3-lines">エントリーしてQoo10で「atone翌月払い（コンビニ／口座振替）」を ご利用いただくと20%還元キャンペーン！</div>
            <div class="description">期間中、Qoo10で「atone翌月払い（コンビニ／口座振替）」をご利用いただくと購入金額の20%分還元！</div>
          </div>
        </div>

        {/* <!-- If we need pagination --> */}
        <div class="swiper-pagination"></div>

        {/* <!-- If we need navigation buttons --> */}
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    );
  }
}

export default Recommend;