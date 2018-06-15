import React, { Component } from 'react';
import { EditorState, CompositeDecorator } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import createMentionPlugin, { defaultSuggestionsFilter } from 'draft-js-mention-plugin';
import './editorStyles.css';
import mentions from './mentions';

export default class SimpleMentionEditor extends Component {

    constructor(props) {
        super(props);
        this.mentionPlugin = createMentionPlugin();
    }

    state = {
        editorState: EditorState.createEmpty(),
        suggestions: mentions,
    };

    onChange = (editorState) => {
        this.setState({
            editorState,
        });
    };

    onSearchChange = ({ value }) => {
        this.setState({
            suggestions: defaultSuggestionsFilter(value, mentions),
        });
    };

    onAddMention = () => {
        // get the mention object selected
    }

    focus = () => {
        this.editor.focus();
    };

    componentDidMount() {
        if (this.element) {
            console.log(this.element)
        }
    }

    getD() {
        const HandleSpan = (props) => {
            return <span {...props} style={styles.handle}>{props.children}</span>;
        };

        const HANDLE_REGEX = /\@[\w]+/g;

        function handleStrategy(contentBlock, callback, contentState) {
            findWithRegex(HANDLE_REGEX, contentBlock, callback);
        }

        function hashtagStrategy(contentBlock, callback, contentState) {
            findWithRegex(HASHTAG_REGEX, contentBlock, callback);
        }

        function findWithRegex(regex, contentBlock, callback) {
            const text = contentBlock.getText();
            let matchArr, start;
            while ((matchArr = regex.exec(text)) !== null) {
                start = matchArr.index;
                callback(start, start + matchArr[0].length);
            }
        }

        const compositeDecorator = new CompositeDecorator([
            {
                strategy: handleStrategy,
                component: HandleSpan,
            },
        ]);
        return compositeDecorator
    }

    render() {
        console.log('@')
        const { MentionSuggestions } = this.mentionPlugin;
        const plugins = [this.mentionPlugin];
        return (
            <div >
                <div className={'editor'} onClick={this.focus} >
                    <Editor
                        editorState={this.state.editorState}
                        onChange={this.onChange}
                        plugins={plugins}
                        // decorators={[this.getD()]}
                        mentionPrefix="@"
                        ref={(element) => { this.editor = element; }}
                    />
                    <MentionSuggestions
                        onSearchChange={this.onSearchChange}
                        suggestions={this.state.suggestions}
                        onAddMention={this.onAddMention}
                    />
                </div>

            </div>
        );
    }
}