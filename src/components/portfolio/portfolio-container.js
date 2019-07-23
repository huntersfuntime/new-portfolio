import React, { Component } from "react";
import axios from "axios";

import PortfolioItem from "./portfolio-item";
import Header from "./header";

export default class PortfolioContainer extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      data: []
    };
  }

  getPortfolioItems(filter = null) {
    axios
      .get("https://huntersfuntime.devcamp.space/portfolio/portfolio_items")
      .then(response => {
        if (filter) {
          this.setState({
            data: response.data.portfolio_items.filter(item => {
              return item.category === filter;
            })
          });
        } else {
          this.setState({
            data: response.data.portfolio_items
          });
        }
      })

      .catch(error => {
        console.log(error);
      });
  }

  portfolioItems() {
    return this.state.data.map(item => {
      return <PortfolioItem key={item.id} item={item} />;
    });
  }

  handleFilter(filter) {
    if (filter === "CLEAR_FILTERS") {
      this.getPortfolioItems();
    } else {
      this.getPortfolioItems(filter);
    }
  }

  componentDidMount() {
    this.getPortfolioItems();
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }
    return (
      <div className="homepage-wrapper">
        <Header />
        {/* <div className="filter-links">
          <button
            className="btn"
            onClick={() => this.handleFilter("Higher Education")}
          >
            Higher Education
          </button>
          <button
            className="btn"
            onClick={() => this.handleFilter("Influencer")}
          >
            Influencer
          </button>
          <button
            className="btn"
            onClick={() => this.handleFilter("Technology")}
          >
            Technology
          </button>
          <button
            className="btn"
            onClick={() => this.handleFilter("CLEAR_FILTERS")}
          >
            All
          </button>
        </div> */}
        <div className="portfolio-items-wrapper">{this.portfolioItems()}</div>
      </div>
    );
  }
}
