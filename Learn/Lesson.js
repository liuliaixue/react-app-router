import React from 'react'
import InputFile from './03_input_file'

export default React.createClass({
  render() {
    return (
      <div>
        <h2>{this.props.params.lesson}</h2>

        <div className="header"> header</div>
        <div className="container">
          <div className="sider"> sider </div>
          <div className="content"> content</div>
        </div>
        <div className="bottom"> bottom</div>
      </div>
    )
  }
})
