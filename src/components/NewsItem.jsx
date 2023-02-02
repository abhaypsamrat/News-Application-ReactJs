import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;

    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={
              !imageUrl
                ? "https://media.istockphoto.com/id/1158778963/photo/online-news-article-on-tablet-screen-electronic-newspaper-or-magazine-latest-daily-press-and.jpg?s=612x612&w=0&k=20&c=SaEQzl8xcVVTFMwOHPgP5RqDxHdTBMx4-EkWoTieHhM="
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
