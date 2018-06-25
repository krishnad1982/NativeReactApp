import React, { Component } from "react";
import { AboutScreen } from './pages/AboutScreen';
import { HomeScreen } from './pages//HomeScreen';
import { ContactScreen } from './pages/ContactScreen';
import { SideBar } from './utilities/SideBar';
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