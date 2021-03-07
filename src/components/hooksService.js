import React from 'react';
import * as ReactRouterDom from 'react-router-dom';

function getReactHooks() {
    return React;
}

function getRouterHooks() {
    return ReactRouterDom;
}

const hooksService= {
    getReactHooks,
    getRouterHooks
};

export default hooksService;