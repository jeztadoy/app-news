import React from 'react'
import {createStackNavigator} from 'react-navigation'
import HomePage from './screens/Home'
import ArticlePage from './screens/Berita'

const RootStack = createStackNavigator({
  HomePage: {
    screen: HomePage
  },
  ArticlePage: {
    screen: ArticlePage
  }
},{
  initialRouteName: 'HomePage'
})


export default RootStack
