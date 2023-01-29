import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description } = this.props;

    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://www.reuters.com/resizer/WoQD7LHyzH_QKIwIdO7BUY3O0SM=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/UXVMS35M7VJHBN7HHNPZV3EBK4.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="/" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
