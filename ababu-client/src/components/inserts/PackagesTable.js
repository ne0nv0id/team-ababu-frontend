import React, {Component} from 'react'

class PackagesTable extends Component{
    render(){
        return(
            <table className="table table-hover table-light">
                <thead>
                    <tr>
                        <th scope="col">Package</th>
                        <th scope="col">Check-ins</th>
                        <th scope="col">Program</th>
                        <th scope="col">Price/Block</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Nutrition Only</td>
                        <td>Text/Phone</td>
                        <td>Learn to track macros</td>
                        <th scope="row" className="text-white bg-dark">$55</th>
                    </tr>
                    <tr>
                        <td>Nutrition and Programming</td>
                        <td>Previous and Form Check</td>
                        <td>Long-term goal-oriented programming per block</td>
                        <th scope="row" className="text-white bg-dark">$100</th>
                    </tr>
                    <tr>
                        <td>Nutrition and Programming with Video</td>
                        <td>Previous and Video Call</td>
                        <td>Previous with targeted video call after every block</td>
                        <th scope="row" className="text-white bg-dark">$150</th>
                    </tr>
                    <tr>
                        <td>Meet Prep Only</td>
                        <td>Contact Abiy for Details</td>
                        <td>TBD based on time from meet and communication prior</td>
                        <th scope="row" className="text-white bg-dark">$200</th>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default PackagesTable
