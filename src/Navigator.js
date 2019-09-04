import React from 'react'
import { createAppContainer, createDrawerNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import AuthOrApp from './screens/AuthOrApp'
import Menu from './screens/Menu'
import Agenda from './screens/Agenda'
import Auth from './screens/Auth'
import commonStyles from './commonStyles'

const MenuRoutes = {
    Today: {
        name: 'Today',
        screen: props => <Agenda title='Hoje' daysAhead={0} {...props} />,
        navigationOptions: { title: 'Hoje' }
    },
    Tomorrow: {
        name: 'Tomorrow',
        screen: props => <Agenda title='Amanhã' daysAhead={1} {...props} />,
        navigationOptions: { title: 'Amanhã' }
    },
    Week: {
        name: 'Week',
        screen: props => <Agenda title='Semana' daysAhead={7} {...props} />,
        navigationOptions: { title: 'Semana' }
    },
    Month: {
        name: 'Month',
        screen: props => <Agenda title='Mês' daysAhead={30} {...props} />,
        navigationOptions: { title: 'Mês' }
    }
}

const MenuConfig = {
    initialRouteName: 'Today',
    contentComponent: Menu,
    contentOptions: {
        labelStyle: {
            fontFamily: commonStyles.fontFamily,
            fontWigth: 'normal',
            fontSize: 20
        },
        activeLabelStyle: {
            color: '#080',

        }
    }
}

const MenuNavigator = createDrawerNavigator(MenuRoutes, MenuConfig)

const MainRoutes = createStackNavigator({
    Loading: {
        name: 'Loading',
        screen: AuthOrApp,
        navigationOptions: { header: null, headerTransparent: true }
    },
    Auth: {
        name: 'Auth',
        screen: Auth,
        navigationOptions: { headerTransparent: true }
    },
    Home: {
        name: 'Home',
        screen: MenuNavigator,
        navigationOptions: { header: null }
    }
})

const MainNavigator = createAppContainer(MainRoutes, { initialRouteName: 'Loading' })
export default MainNavigator  