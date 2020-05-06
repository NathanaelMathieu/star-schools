import React, { Component } from 'react'

export class Materials extends Component {
  render() {
    return (
        <div id="portfolio" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Materials</h2>
            <p>Interested in helping spread the STAR Schools message? Check out some of our publications below and share with friends and family!</p>
          </div>
          <div className="row">
            <div className="portfolio-items">
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg"> <a href="img/portfolio/80percent-lg.png" title="Project Title" data-lightbox-gallery="gallery1">
                    <div className="hover-text">
                      <h4>80% Underachievement</h4>
                    </div>
                    <img src="img/portfolio/80percent-sm.png" className="img-responsive" alt="Project Title"/> </a> </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg"> <a href="img/portfolio/acronym-lg.png" title="Project Title" data-lightbox-gallery="gallery1">
                    <div className="hover-text">
                      <h4>STAR Principles</h4>
                    </div>
                    <img src="img/portfolio/acronym-sm.png" className="img-responsive" alt="Project Title"/> </a> </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg"> <a href="img/portfolio/cover-photo-lg.png" title="Project Title" data-lightbox-gallery="gallery1">
                    <div className="hover-text">
                      <h4>STAR Schools</h4>
                    </div>
                    <img src="img/portfolio/cover-photo-sm.png" className="img-responsive" alt="Project Title"/> </a> </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg"> <a href="img/portfolio/endorse-lg.png" title="Project Title" data-lightbox-gallery="gallery1">
                    <div className="hover-text">
                      <h4>Sample Endorsement</h4>
                    </div>
                    <img src="img/portfolio/endorse-sm.png" className="img-responsive" alt="Project Title"/> </a> </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg"> <a href="img/portfolio/media-lg.png" title="Project Title" data-lightbox-gallery="gallery1">
                    <div className="hover-text">
                      <h4>Media Guidance</h4>
                    </div>
                    <img src="img/portfolio/media-sm.png" className="img-responsive" alt="Project Title"/> </a> </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg"> <a href="img/portfolio/mi-charters-lg.png" title="Project Title" data-lightbox-gallery="gallery1">
                    <div className="hover-text">
                      <h4>Michigan Charter School Factsheet</h4>
                    </div>
                    <img src="img/portfolio/mi-charters-sm.png" className="img-responsive" alt="Project Title"/> </a> </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Materials
