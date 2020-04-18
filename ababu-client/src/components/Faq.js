import React, {Component} from 'react'
// import './App.css'

class Faq extends Component {

    render(){
        const redBorder = {
            border: '4px solid red'
        }


        return(
            <>
                <h1 className="display-3">FAQ</h1>
                <div className="faq-container">
                    <div className="bg-danger mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden faq-question">
                        <div className="faq-heading">
                            <h2 class='display 5'>Sample Question</h2>
                        </div>
                        <div className="faq-answer">
                            <p>Etiam a magna dope augue hendrerit accumsizzle. Aenizzle break it down ghetto. Its fo rizzle go to hizzle dolizzle, bizzle vitae, facilisizzle id, pizzle izzle, erat. The bizzle ante ipsizzle primizzle in shizznit orci luctus izzle boom shackalack posuere fo Check it out; Stuff dolizzle. Shizznit crazy. Black pharetra blandit quizzle. Fo shizzle sizzle the bizzle orci. Shit facilisis. Hizzle sizzle nulla, go to hizzle eu, scelerisque the bizzle, blandizzle cool, magna.
                            </p>
                        </div>
                    </div>
                    <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden faq-question">
                        <div className="faq-heading">
                            <h2 class='display 5'>Sample Question</h2>
                        </div>
                        <div className="faq-answer" style={redBorder}>
                            <p>Etiam a magna dope augue hendrerit accumsizzle. Aenizzle break it down ghetto. Its fo rizzle go to hizzle dolizzle, bizzle vitae, facilisizzle id, pizzle izzle, erat. The bizzle ante ipsizzle primizzle in shizznit orci luctus izzle boom shackalack posuere fo Check it out; Stuff dolizzle. Shizznit crazy. Black pharetra blandit quizzle. Fo shizzle sizzle the bizzle orci. Shit facilisis. Hizzle sizzle nulla, go to hizzle eu, scelerisque the bizzle, blandizzle cool, magna.
                            </p>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}

export default Faq
