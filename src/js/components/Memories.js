import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
    memory as memoryAction,
} from '../actions/memoryActions';
import Box from 'grommet/components/Box';
require("../../css/memories.css");

const mapDispatchToProps = (dispatch) => {
    return {
        memory: () => {
            dispatch(memoryAction());
        },
    };
};

const mapStateToProps = ({ state }) => ({

});

export class Memories extends Component {
    render() {
        const {
            memory
        } = this.props;

        return (
        	<div>
        	<div className="video-background">
			    <div className="video-foreground">
			      <iframe src="https://www.youtube.com/embed/iovmF6PnZpo?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&list=PLhP__J4jUhCP80PNSXINhzs6zEw4C6lIB" frameBorder="0" allowFullScreen></iframe>
			    </div>
			 </div>
			 <Box full={true} flex={true}>
			 	
			 </Box>
			 </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Memories);
