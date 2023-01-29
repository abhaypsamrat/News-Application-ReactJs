import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  
  constructor() {
    super();
    console.log("Hello iam constuctor");
    this.state = {

    }
  }

  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItem
              title="myTitle"
              description="myDesc"
              imageUrl="https://www.reuters.com/resizer/WoQD7LHyzH_QKIwIdO7BUY3O0SM=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/UXVMS35M7VJHBN7HHNPZV3EBK4.jpg"
            />
          </div>
          <div className="col-md-4">
            <NewsItem title="myTitle" description="myDesc" />
          </div>
          <div className="col-md-4">
            <NewsItem title="myTitle" description="myDesc" />
          </div>
          <div className="col-md-4">
            <NewsItem title="myTitle" description="myDesc" />
          </div>
        </div>
      </div>
    );
  }
}
