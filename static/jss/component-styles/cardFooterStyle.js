import { grayColor } from '../mainStyles';

const cardFooterStyle = {
	cardFooter: {
		display: 'flex',
		alignItems: 'center',
		backgroundColor: 'transparent',
		padding: '0.9375rem 1.875rem',
		paddingTop: '0',
	},
	cardFooterProfile: {
		marginTop: '-15px',
	},
	cardFooterPlain: {
		paddingLeft: '5px',
		paddingRight: '5px',
		backgroundColor: 'transparent',
	},
	cardFooterPricing: {
		zIndex: '2',
	},
	cardFooterTestimonial: {
		display: 'block',
	},
	cardFooterStats: {
		borderTop: '1px solid' + grayColor[8],
		marginTop: '20px',
		'& svg': {
			position: 'relative',
			top: '4px',
			marginRight: '3px',
			marginLeft: '3px',
			width: '16px',
			height: '16px',
		},
		'& .fab,& .fas,& .far,& .fal,& .material-icons': {
			position: 'relative',
			top: '4px',
			marginRight: '3px',
			marginLeft: '3px',
			fontSize: '16px',
			lineHeight: '16px',
		},
	},
	cardFooterChart: {
		borderTop: '1px solid' + grayColor[8],
	},
};

export default cardFooterStyle;
