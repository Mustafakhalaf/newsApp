import React , {Component} from 'react'
import {View} from 'react-native'
import {Constant} from 'expo'
import Header from '../component/header'
import NewsList from '../component/newsList'
import SearchBar from '../component/searchBar'


export default class Main extends Component {
    render(){
        return(
            <View style={{flex:1, marginTop:Constant.statusBarHeight}}>
                <Header/>
                <SearchBar/>
                <NewsList/>
            </View>
        )
    }
}