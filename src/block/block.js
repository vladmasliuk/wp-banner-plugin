//  Import CSS.
import './editor.scss';
import './style.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { MediaUpload, MediaPlaceholder, PlainText } = wp.blockEditor;


// Register block
registerBlockType( 'cgb/block-custom-banner', {
	title: __('New custom banner block'),
	icon: 'smiley',
	category: 'formatting',
	keywords: [
		__( 'banner' ),
		__( 'image' ),
	],
	attributes: {
        title: {type: 'string'},
        subtitle: {type: 'string'},
		imageUrl: {attribute: 'src'},
    },

	// edit block
	edit: ( props ) => {
		const toggleImagePlaceholder = (openEvent) => {
			if(props.attributes.imageUrl) {
				return (
					<img
						src={ props.attributes.imageUrl }
						onClick={ openEvent }
					/>
				);
			}
			else {
				return (
					<MediaPlaceholder
						onSelect = { media => { props.setAttributes({ imageUrl: media.url }); } }
						allowedTypes = { [ 'image' ] }
						multiple = { false }
					>
					</MediaPlaceholder>
				);
			}
		};

		return (
			<div className={ props.className }>
				<PlainText
					onChange={ content => props.setAttributes({ title: content }) }
					value={ props.attributes.title }
					placeholder={ __( 'Title') }
					className="ed-title"
				/>

				<PlainText
					onChange={ content => props.setAttributes({ subtitle: content }) }
					value={ props.attributes.subtitle }
					placeholder={ __( 'Subitle') }
					className="ed-subtitle"
				/>

				<MediaUpload
					onSelect={ media => { props.setAttributes({ imageUrl: media.url }); } }
					type="image"
					value={ props.attributes.imageID }
					render={ ({ open }) => toggleImagePlaceholder(open) }
				/>
			</div>
		);
	},

	// save block
	save: ( props ) => {
		return (
			<div className="banner-wrap" style={{backgroundImage: `url(${props.attributes.imageUrl})`}}>
				<div className="banner-content">
					{props.attributes.title ? (
						<h1>{props.attributes.title}</h1>
					):null}
					{props.attributes.subtitle ? (
						<p>{props.attributes.subtitle}</p>
					):null}
				</div>
			</div>
		);
	},
} );
