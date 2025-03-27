import logo from './logo.svg';
import './App.css';
import './swiper.css';
import './dialog-box-pointing-down.css';
import Shop from './components/NewShop';
import Ariticle from './components/RecommendArticle';
import Menu from './components/Menu';
import Slider from './components/Slider';

function App() {
  return (
    <div> {/* body */}
      <header>
        <div><img src="assets/logos/atone-shops.svg" width="320" height="auto" alt="logo"></img></div>
        <Menu />
      </header>
      <main>
        <Slider />

        <div class="main-content">
          <div>
            <div>{/* new shops */}
              <h1 class="heading"><span>新着のお店</span></h1>
              <div class="shops">
                <Shop />
                <Shop />
                <Shop />
                <Shop />
              </div>
              <a href="#" class="btn show-more">使えるお店を探す</a>
            </div>

            <div>{/* recommend articles */}
              <h1 class="heading"><span>おすすめ読みもの</span></h1>
              <div class="ariticles">

                <div class="ariticle-top top-section">
                  <img class="img" src="assets/shops-images/Anker.jpg"></img>
                  <div class="text-section">
                    <p class="title text-max-3-lines">ポケマル厳選！ 3月のおすすめ果物3選</p>
                    <p class="short-desc text-max-3-lines">たくさんの旬食材の中でも3月におすすめ春の果物をスタッフが3つ厳選しました！</p>
                    <div> <span class="date">2025/03/10</span><span class="category">グルメ</span></div>
                  </div>
                </div>
                <Ariticle />
                <Ariticle />
              </div>
              <a href="#" class="btn show-more">気になる記事を探す</a>
            </div>
          </div>
          <div id="recommend">
            <div class="dialog_box bottom">
              <p>あなたにおすすめ！</p>
            </div>
            <img src="assets/carousel-images/carousel1.png" alt="recommend" />
            <a href="#" class="btn show-more">もっとおすすめをみる</a>
          </div>
        </div>
      </main>
    </div>

  );
}

export default App;
