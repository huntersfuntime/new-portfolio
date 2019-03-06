import React, { Component } from 'react';
import axios from 'axios';

export default class BlogForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      blog_status: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  buildForm() {
    let formData = new FormData();

    formData.append('portfolio_blog[title]', this.state.title);
    formData.append('portfolio_blog[blog_status]', this.state.blog_status)

    return formData;
  }

  handleSubmit(event) {
    axios
      .post(`https://huntersfuntime.devcamp.space/portfolio/portfolio_blogs`, 
      this.buildForm(), 
      { withCredentials: true 
      }).then(response => {
        this.props.handleSuccessfullFormSubmission(response.data.portfolio_blog);
        this.setState({
          title: '',
          blog_status: ''
        });
      }).catch(error => {
        console.log('error for blog submission', error)
      })

    event.preventDefault();
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='blog-form-wrapper'>
        <div className='two-column'>
          <h1>{this.state.title}</h1>
          <h1>{this.state.blog_status}</h1>
          <input 
            name='title' 
            onChange={this.handleChange} 
            type='text' 
            placeholder='Blog Title'
            value={this.state.title}  
          />
          <input 
            name='blog_status' 
            onChange={this.handleChange} 
            type='text'
            placeholder='Blog Status'
            value={this.state.blog_status}
          />
          </div>
          <button className='btn'>Save</button>
      </form>
    )
  }
}