import React from 'react';

class Banner extends React.Component {
    render() {
        return (
            <div className="my-swiper-slide">
                <div className="banner-container">
                    <img className="banner" src={this.props.image} alt="carousel" />
                </div>
                <div className="title text-max-3-lines">{this.props.title}</div>
                <div className="description text-max-3-lines">{this.props.desc}</div>
            </div>
        );
    }
}

export default Banner;