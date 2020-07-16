import React, { useState } from "react";
import { EditorState, RichUtils, AtomicBlockUtils, convertToRaw, convertFromRaw } from "draft-js";
import Editor from "draft-js-plugins-editor";

import addLinkPlugin from "./plugins/addLinkPlugin";
import createHighlightPlugin from './plugins/highlightPlugin';
import { mediaBlockRenderer } from "./plugins/mediaBlockRenderer";
// import BlockStyleToolbar from "./blockStyles/BlockStyleToolbar"
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import "./PageContainer.css";

// const CREATE_MESSAGE = gql`
//   mutation CreateMessage($content: String!) {
//     createMessage(content: $content) {
//       content
//     }
//   }
// `;

const highlightPlugin = createHighlightPlugin();

function PageContainer() {
    let [alignment, setAlignment] = useState('left');
    let plugins = [addLinkPlugin, highlightPlugin,];
    let [jsonConInfo, setJsonConInfo] = useState('');

    //const [createMessage] = useMutation(CREATE_MESSAGE);
    const content = window.localStorage.getItem('content');

    let initialEditorState;
    if (content) {
        initialEditorState = EditorState.createWithContent(convertFromRaw(JSON.parse(content)));
    } else {
        initialEditorState = EditorState.createEmpty();
    }
    let [editorState, setEditorState] = useState(initialEditorState);

    function onChange(editorState) {

        const contentState = editorState.getCurrentContent();
        saveContent(contentState);
        setEditorState(editorState);
    };

    function onAddLink() {
        const modifiedEditorState = editorState;
        const selection = modifiedEditorState.getSelection();
        const link = window.prompt("Paste the link -");
        if (!link) {
            onChange(RichUtils.toggleLink(modifiedEditorState, selection, null));
            return "handled";
        }
        const content = modifiedEditorState.getCurrentContent();
        const contentWithEntity = content.createEntity("LINK", "MUTABLE", {
            url: link
        });
        const newEditorState = EditorState.push(
            modifiedEditorState,
            contentWithEntity,
            "create-entity"
        );
        const entityKey = contentWithEntity.getLastCreatedEntityKey();
        onChange(RichUtils.toggleLink(newEditorState, selection, entityKey));
        return "handled";
    };

    function handleKeyCommand(command) {
        const newState = RichUtils.handleKeyCommand(
            editorState,
            command
        );
        if (newState) {
            onChange(newState);
            return "handled";
        }
        return "not-handled";
    };

    let onUnderlineClick = () => {
        onChange(
            RichUtils.toggleInlineStyle(editorState, "UNDERLINE")
        );
    };

    let onTitleClick = () => {
        onChange(
            RichUtils.toggleInlineStyle(editorState, "HEADER-ONE")
        );
    }

    let onBoldClick = () => {
        onChange(RichUtils.toggleInlineStyle(editorState, "BOLD"));
    };

    let onItalicClick = () => {
        onChange(
            RichUtils.toggleInlineStyle(editorState, "ITALIC")
        );
    };

    let onHighlight = () => {
        onChange(RichUtils.toggleInlineStyle(editorState, 'HIGHLIGHT'))
    }

    // let onStrikeThroughClick = () => {
    //     onChange(
    //         RichUtils.toggleInlineStyle(alignment, "STRIKETHROUGH")
    //     );
    // };

    let onAddImage = (e) => {
        e.preventDefault();
        const modifiedEditorState = editorState;
        const urlValue = window.prompt("Paste Image Link");
        const contentState = modifiedEditorState.getCurrentContent();
        const contentStateWithEntity = contentState.createEntity(
            "image",
            "IMMUTABLE",
            { src: urlValue, alignment: alignment, alt: 'hola' }
        );
        const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
        const newEditorState = EditorState.set(
            modifiedEditorState,
            { currentContent: contentStateWithEntity },
            "create-entity"
        );
        setEditorState(AtomicBlockUtils.insertAtomicBlock(
            newEditorState,
            entityKey,
            " "
        ));
    };

    let cambio = () => {
        onChange(
            RichUtils.toggleInlineStyle(editorState, "rigth")
        );
    };

    // focus = () => this.refs.editor.focus();

    function saveContent(content) {
        const contentState = editorState.getCurrentContent();
        const raw = convertToRaw(contentState);
        window.localStorage.setItem('content', JSON.stringify(convertToRaw(content)));
    }

    function enviarInfo() {
        const contentState = editorState.getCurrentContent();
        const raw = convertToRaw(contentState);
        convertFromRaw(raw);
        const objetoJSON = JSON.stringify(raw, null, 2)
        console.log('************************', raw);
        setJsonConInfo(objetoJSON);
        localStorage.clear();
        setEditorState(EditorState.createEmpty());

        // async function e () {

        //     await createMessage({variables: content});
        //     window.location.href = "/";
        // }

    }

    return (
        <div className="editorContainer">

            <button
                className="inline styleButton"
                id="title"
                onClick={onTitleClick}>
                H1
                </button>

            <button
                className="inline styleButton"
                id="underline"
                onClick={onUnderlineClick}
            >
                U
                </button>

            <button
                className="inline styleButton"
                id="bold"
                onClick={onBoldClick}
            >
                B
                </button>

            <button
                className="inline styleButton"
                id="italic"
                onClick={onItalicClick}
            >
                I
                </button>
            {/* <button
                className="inline styleButton strikethrough"
                onClick={onStrikeThroughClick}
            >
                abc
                </button> */}

            <button className="inline styleButton" id="link_url" onClick={onAddLink} >
                <i >Url</i>
            </button>

            <button className="inline styleButton" id="highlight" onClick={onHighlight}>
                <span style={{ background: "yellow" }}>H</span>
            </button>
            <button className="inline styleButton" onClick={onAddImage}>
                <i id="material-icons">img</i>
            </button>
            {/* <button className="inline styleButton" id="cambioImagen" onclick={cambio}>

            </button> */}

            <div className="editors">
                <Editor
                    editorState={editorState}
                    handleKeyCommand={handleKeyCommand}
                    onChange={onChange}
                    plugins={plugins}
                    // ref="editor"
                    blockRendererFn={mediaBlockRenderer}
                />
            </div>
            <button onClick={enviarInfo}>Publicar</button>
            <div>
                <pre>{jsonConInfo}</pre>
            </div>

        </div>
    );
}

export default PageContainer;