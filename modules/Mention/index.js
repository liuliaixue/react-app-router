import React, { Component } from 'react';
import Mention from './SimpleMentionEditor'

export default class Mentions extends React.Component {

    render() {
        return (<div>
            {[1, 2, 3].map(() => {
                return <Mention />
            })}
        </div>)
    }
}