import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <div>
            <span
              style={{
                display: "flex",
                justifyContent: "flex-end",
                position: "absolute",
                right: 0,
              }}
              className="badge rounded-pill bg-danger"
              // style={{ zIndex: "1", left: "90%" }}
            >
              {source}
            </span>
          </div>
          <img
            src={
              !imageUrl
                ? "https://images.pexels.com/photos/1928151/pexels-photo-1928151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{!title ? "Unknown Title" : title}</h5>
            <p className="card-text">
              {!description ? "Click on Readmore" : description}
            </p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toUTCString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn btn-primary"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
