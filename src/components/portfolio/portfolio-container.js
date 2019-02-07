import React, { Component } from 'react';

import PortfolioItem from './portfolio-item';

export default class PortfolioContainer extends Component {
  constructor() {
    super()
    this.state = {
      pageTitle: 'Welcome to my portfolio',
      isLoading: false,
      data: [
        { title: 'Flights From Home', category: 'eCommerce', slug: 'flights-from-home' },
        { title: 'Dawson Community College', category: 'Teaching', slug: 'dawson-community-college' },
        { title: 'Easy Storage Solutions', category: 'Enterprise', slug: 'easy-storage-solutions' }
      ]
    }
  }

  portfolioItems() {
    return this.state.data.map(item => {
      return <PortfolioItem title={item.title} url={'google.com'} slug={item.slug} />
    })
  }

  handleFilter = (filter) => {
    this.setState({
      data: this.state.data.filter(item => {
        return item.category === filter;
      })
    })
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <h2>{this.state.pageTitle}</h2>
        <button onClick={() => this.handleFilter('eCommerce')}>eCommerce</button>
        <button onClick={() => this.handleFilter('Teaching')}>Teaching</button>
        <button onClick={() => this.handleFilter('Enterprise')}>Enterprise</button>
        {this.portfolioItems()}
      </div>
    )
  }
}
