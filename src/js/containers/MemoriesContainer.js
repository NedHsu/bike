import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
    getMemories as getMemoriesAction,
} from '../actions/memoryActions.js';
import Memories from '../components/Memories';

const mapDispatchToProps = (dispatch) => {
    return {
        getMemories: () => {
            dispatch(getMemoriesAction());
        },
    };
};

const mapStateToProps = ({ state }) => ({
    test: ""
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Memories);
