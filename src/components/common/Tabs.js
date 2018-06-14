import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';

const Tabs = TabNavigator({
    Feed: {
        screen: Feed,
    },
    Me: {
        screen: Me,
    },
});

export { Tabs };