import React, { Component } from 'react';
import ReactModal from 'react-modal';

import BlogForm from '../blog/blog-form';

ReactModal.setAppElement('.app-wrapper');

export default class BlogModal extends Component {
  constructor(props) {
    super(props);

    this.customStyles = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '80rem'
      },
      overlay: {
        backgroundColor: 'rgba(1, 1, 1, .75)'
      }
    }

    this.handleSuccessfullFormSubmission = this.handleSuccessfullFormSubmission.bind(this)
  }

  handleSuccessfullFormSubmission(blog) {
    this.props.handleSuccessfullNewBlogSubmission(blog);
  }

  render() {
    return (
      <div>
        <ReactModal 
          style={this.customStyles}
          isOpen={this.props.modalIsOpen}
          onRequestClose={() => {
            this.props.handleModalClose();
          }}>
          <BlogForm 
            handleSuccessfullFormSubmission={this.handleSuccessfullFormSubmission}
            />
        </ReactModal>
      </div>
    )
  }
}