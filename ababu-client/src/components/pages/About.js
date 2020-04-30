import React, {Component} from 'react'
// import './App.css'

class About extends Component {
    componentDidMount(){
        console.log(this.props.location.state)
        document.title = this.props.location.state.docTitle
    }

    render(){
        return(
            <>
                <h1 className="display-5">About Abiy</h1>
                <div className="content-div">

                    <article className="content-main">
                        <p>
                            Lorizzle ipsum stuff sizzle nizzle, consectetuer break it down elit. Ghetto sapizzle yo, daahng dawg volutpat, suscipit quis, gravida boom shackalack, arcu. Pellentesque gizzle tortizzle. Sed erizzle. Stuff izzle dolizzle phat dawg tempizzle bling bling. Maurizzle nizzle my shizz get down get down turpizzle. I’m in the shizzle izzle yo. Pellentesque for sure rhoncus nisi. In hac shizzlin dizzle platea dictumst. Cool dapibizzle. Curabitur dizzle dope, pretizzle eu, mattizzle ac, eleifend vitae, nunc. Fo shizzle suscipit. Integizzle crazy fo shizzle sed purus.
                        </p>
                        <ul>
                            <li>Sample Qualification</li>
                            <li>Sample Qualification</li>
                            <li>Sample Qualification</li>
                        </ul>
                        <p>
                            Lorizzle ipsum stuff sizzle nizzle, consectetuer break it down elit. Ghetto sapizzle yo, daahng dawg volutpat, suscipit quis, gravida boom shackalack, arcu. Pellentesque gizzle tortizzle. Sed erizzle. Stuff izzle dolizzle phat dawg tempizzle bling bling. Maurizzle nizzle my shizz get down get down turpizzle. I’m in the shizzle izzle yo. Pellentesque for sure rhoncus nisi. In hac shizzlin dizzle platea dictumst. Cool dapibizzle. Curabitur dizzle dope, pretizzle eu, mattizzle ac, eleifend vitae, nunc. Fo shizzle suscipit. Integizzle crazy fo shizzle sed purus.
                        </p>
                    </article>
                </div>
            </>
        )
    }

}

export default About
