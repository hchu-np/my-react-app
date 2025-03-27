import React, { Component } from 'react';
import Banner from './Banner';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }

  componentDidMount() {
    this.setupSwiper();
  }

  componentDidUpdate(prevProps, prevState) {
    // Nếu currentIndex thay đổi, thì hiển thị lại slide mới
    if (prevState.currentIndex !== this.state.currentIndex) {
      this.showCurrentSlide();
    }
  }

  setupSwiper = () => {
    const nextButton = document.querySelector('.swiper-button-next');
    const prevButton = document.querySelector('.swiper-button-prev');
    const slides = document.querySelectorAll('.my-swiper-slide');

    // Ẩn tất cả các slide ban đầu và hiển thị slide đầu tiên
    this.hideAllSlides();
    this.showCurrentSlide();

    // Thêm sự kiện click cho nút "Next"
    nextButton.addEventListener('click', () => {
      console.log("nextButton");
      this.setState(prevState => {
        const newIndex = prevState.currentIndex + 1;
        return {
          currentIndex: newIndex >= slides.length ? 0 : newIndex
        };
      });
    });

    // Thêm sự kiện click cho nút "Previous"
    prevButton.addEventListener('click', () => {
      console.log("prevButton");
      this.setState(prevState => {
        const newIndex = prevState.currentIndex - 1;
        return {
          currentIndex: newIndex < 0 ? slides.length - 1 : newIndex
        };
      });
    });
  };

  // Hàm ẩn tất cả các slide
  hideAllSlides = () => {
    const slides = document.querySelectorAll('.my-swiper-slide');
    slides.forEach(slide => {
      slide.style.display = 'none';
    });
  };

  // Hàm hiển thị slide hiện tại
  showCurrentSlide = () => {
    const slides = document.querySelectorAll('.my-swiper-slide');
    this.hideAllSlides();
    if (slides[this.state.currentIndex]) {
      slides[this.state.currentIndex].style.display = 'grid';
    }
  };

  render() {
    const banners = [
      {
        image: 'assets/carousel-images/carousel1.png',
        title: '必ず全員もらえる！300ptプレゼントキャンペーン',
        desc: 'atoneのご利用でお得！NPポイント300ptをプレゼント！'
      },
      {
        image: 'assets/carousel-images/202502_atoneCP_KV.png',
        title: '【NP×ファミリーマート】ハズレの場合も参加賞あり！ 2000円相当のNPポイントが抽選で500名様にあたる！',
        desc: 'ハズレなし！抽選で500名様に2000ポイントプレゼント！'
      },
      {
        image: 'assets/carousel-images/202502_Qoo10_15CB_before_KV.png',
        title: 'エントリーしてQoo10で「atone翌月払い（コンビニ／口座振替）」を ご利用いただくと20%還元キャンペーン！',
        desc: '期間中、Qoo10で「atone翌月払い（コンビニ／口座振替）」をご利用いただくと購入金額の20%分還元！'
      }
    ]

    return (
      <div className="swiper" navigation="true">
        {/* Additional required wrapper */}
        <div className="swiper-wrapper">
          {/* Slides */}
          {banners.map((banner) => {
            return (
              <Banner
                image={banner.image}
                title={banner.title}
                desc={banner.desc}
              />
              
            )
          })}
        </div>

        {/* If we need pagination */}
        <div className="swiper-pagination"></div>

        {/* If we need navigation buttons */}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    );
  }
}

export default Slider;
