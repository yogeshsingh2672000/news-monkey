import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      perPageItem: 9,
      maxPage: 0,
    };
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=589b9a5f44b24707bdd05f46796c9483&page=${this.state.page}&pageSize=9`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      maxPage: Math.ceil(parsedData.totalResults / this.state.perPageItem),
    });
  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=589b9a5f44b24707bdd05f46796c9483&page=${
      this.state.page - 1
    }&pageSize=9`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
    });
    this.setState({
      page: this.state.page - 1,
    });
  };
  handleNextClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=589b9a5f44b24707bdd05f46796c9483&page=${
      this.state.page + 1
    }&pageSize=9`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
    });
    this.setState({
      page: this.state.page + 1,
    });
  };
  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  //   title={element ? element.title.slice(0, 45) : ""}
                  title={element.title}
                  //   description={element ? element.description.slice(0, 88) : ""}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark my-3"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={this.state.page === this.state.maxPage}
            type="button"
            className="btn btn-dark my-3"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
