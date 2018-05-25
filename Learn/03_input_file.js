import React from 'react'

export default React.createClass({
    render() {
        return (
            <div>
                <h2>{this.props.params.lesson}</h2>

                <input type="file" />
            </div>
        )
    }
})
