import React from "react";
// import { EditorState, RichUtils, AtomicBlockUtils } from "draft-js";

export const mediaBlockRenderer = block => {
	if (block.getType() === "atomic") {
		return {
			component: Media,
			editable: false
		};
	}

	return null;
};

const Image = props => {
	if (!!props.src) {
		return <img src={props.src} alt={props.alt} className={props.alignment} />;
	}
	return null;
};

const Media = props => {
	const entity = props.contentState.getEntity(props.block.getEntityAt(0));
	const { src, alt, alignment } = entity.getData();
	const type = entity.getType();

	let media;

	if (type === "image") {
		media = <Image src={src} alt={alt} alignment={alignment} />;
	}

	return media;
};
