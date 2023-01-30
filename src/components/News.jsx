import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  articles = [
    {
      source: {
        id: "the-washington-post",
        name: "The Washington Post",
      },
      author: "Karla Adam",
      title:
        "Putin threatened U.K. with missile strike, Boris Johnson says - The Washington Post",
      description:
        "In a BBC documentary, former prime minister Boris Johnson says Russia's Vladimir Putin threatened the U.K. in an offhand way after he was warned not to invade Ukraine.",
      url: "https://www.washingtonpost.com/world/2023/01/30/boris-johnson-putin-missile-strike/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/01-30-2023/t_376ca3d9d7b74a3686f154e0c5cd3478_name_OFLSGZCIASYIELWW5PXTZUCZZQ.jpg&w=1440",
      publishedAt: "2023-01-30T12:15:00Z",
      content:
        "Comment on this story\r\nLONDON Former British prime minister Boris Johnson says Russian President Vladimir Putin personally threatened him with a missile attack in the run-up to Russias invasion of Uk… [+4004 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Jacob Lev, Homero De La Fuente",
      title:
        "Kansas City Chiefs to face Philadelphia Eagles in Super Bowl LVII - CNN",
      description:
        "The Kansas City Chiefs are advancing to Super Bowl LVII following a 23-20 victory over the Cincinnati Bengals in the AFC Championship game on Sunday at Arrowhead Stadium in Kansas City, Missouri.",
      url: "https://www.cnn.com/2023/01/29/us/nfl-conference-championships-chiefs-bengals-eagles-49ers/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230130094130-chiefs-bengals-012923.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-01-30T11:47:00Z",
      content:
        "The Kansas City Chiefs are advancing to Super Bowl LVII following a 23-20 victory over the Cincinnati Bengals in the AFC Championship game on Sunday at Arrowhead Stadium in Kansas City, Missouri.\r\nAf… [+3411 chars]",
    },
    {
      source: {
        id: null,
        name: "WFAA.com",
      },
      author: "Jesse Hawila",
      title:
        "Ice in DFW: Freezing rain, icy roads, timeline, everything to know about this week's winter weather - WFAA.com",
      description:
        "Winter Storm Warning has been issued for all of North Texas",
      url: "https://www.wfaa.com/article/weather/dfw-weather-ice-freezing-rain-timeline-forecast-north-texas/287-f548fc76-eefe-4679-863f-c485e0c63ae3",
      urlToImage:
        "https://media.wfaa.com/assets/WFAA/images/e2c26ec0-8918-47ab-b2db-177cf2ff9bd2/e2c26ec0-8918-47ab-b2db-177cf2ff9bd2_1140x641.jpg",
      publishedAt: "2023-01-30T11:26:15Z",
      content:
        "DALLAS Icy, not snowy, wintry weather is headed to North Texas over the next several days.\r\nHere's what you need to know to be best prepared:\r\nFast facts:\r\n<ul><li>Freezing drizzle and freezing rain … [+2675 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Toyin Owoseje",
      title: "Lisa Loring, original Wednesday Addams actress, dead at 64 - CNN",
      description:
        'Lisa Loring, best known as the first actress to play Wednesday Addams in the original "The Addams Family" sitcom, has died at the age of 64.',
      url: "https://www.cnn.com/2023/01/30/entertainment/lisa-loring-wednesday-addams-dead-intl-scli/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230130090120-02-lisa-loring-file-restricted.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-01-30T11:05:00Z",
      content:
        "Lisa Loring, best known as the first actress to play Wednesday Addams in the original The Addams Family sitcom, has died at the age of 64.\r\nLorings daughter, Vanessa Foumberg, confirmed in a statemen… [+2213 chars]",
    },
  ];

  constructor() {
    super();
    console.log("THis is consturctor from news component");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title.slice(0, 50)}
                  description={element.description.slice(0, 90)}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
