import React, { Component } from "react";
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { ContactScreen } from './ContactScreen';
import { SideBar } from './SideBar';
import { DrawerNavigator } from "react-navigation";

const HomeScreenRouter = DrawerNavigator(
    {
        Home: { screen: HomeScreen },
        About: { screen: AboutScreen },
        Contact: { screen: ContactScreen }
    },
    {
        contentComponent: props => <SideBar {...props} />
    }
);

export default HomeScreenRouter;