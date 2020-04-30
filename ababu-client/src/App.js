import React, {Component} from 'react'
// import './App.css'

import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
// import InstaFeed from './components/inserts/InstaFeed'

// import logo from './components/images/tzo_logo.jpg'

class App extends Component {

    state = {
        docTitle: 'TZO Strength'
    }

    componentDidMount(){
        console.log('app reached');
        document.title = this.state.docTitle
    }

    render(){
        return(
            <>
            <div className="container app-main">
                <Header/>

                <Nav pageTitle={this.state.pageTitle}/>
            </div>
            <Footer/>
            </>
        )
    }

}

export default App
