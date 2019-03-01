import React, { Component } from 'react';
import axios from 'axios';

import PortfolioSidebarList from '../portfolio/portfolio-sidebar-list';
import PortfolioForm from '../portfolio/portfolio-form';

export default class PortfolioManager extends Component {
	constructor () {
		super();

		this.state = {
			portfolioItems: []
		}

		this.handleSuccessfulFormSubmission = this.handleSuccessfulFormSubmission.bind(this);
		this.handleFormSubmissionError = this.handleFormSubmissionError.bind(this);
		this.handleDeleteClick = this.handleDeleteClick.bind(this);
	}

	handleSuccessfulFormSubmission(portfolioItem) {
		this.setState({
			portfolioItems: [portfolioItem, ...this.state.portfolioItems] // can also concat
		})
	}

	handleFormSubmissionError(error) {
		console.log('Error handleformsub', error);
	}

	getPortfolioItems() {
		axios
			.get("https://huntersfuntime.devcamp.space/portfolio/portfolio_items?order_by=created_at&direction=desc", { 
			withCredentials: true 
		}).then(response => {
			this.setState({
				portfolioItems: [...response.data.portfolio_items]
			});
		}).catch(error => {
			console.log('Error in getPortfolioItems')
		})
	}

	handleDeleteClick(portfolioItem) {
		axios
			.delete(`https://api.devcamp.space/portfolio/portfolio_items/${portfolioItem.id}`,
			{ withCredentials: true }
		).then(response => {
			this.setState({
				portfolioItems: this.state.portfolioItems.filter(item => {
					return item.id !== portfolioItem.id;
				})
			})

			return response.data;
		}).catch(error => {
			console.log('Error for delete', error);
		});
	}

	componentDidMount() {
		this.getPortfolioItems();
	}

  render() {
    return (
      <div className='portfolio-manager-wrapper'>
				<div className='left-column'>
					<PortfolioForm 
						handleSuccessfulFormSubmission={this.handleSuccessfulFormSubmission}
						handleFormSubmissionError={this.handleFormSubmissionError}
					/>
				</div>
				<div className='right-column'>
					<PortfolioSidebarList 
						data={this.state.portfolioItems} 
						handleDeleteClick={this.handleDeleteClick}
					/>
				</div>
      </div>
    );
  }
}