import React, {Component} from 'react'

class PackagesTable extends Component{
    render(){
        return(
            <table class="table table-hover table-dark">
                <thead>
                    <tr>
                        <th scope="col">Price/Block</th>
                        <th scope="col">Package</th>
                        <th scope="col">Check-ins</th>
                        <th scope="col">Program</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">$55</th>
                        <td>Nutrition Only</td>
                        <td>Text/Phone</td>
                        <td>Learn to track macros</td>
                    </tr>
                    <tr>
                        <th scope="row">$100</th>
                        <td>Nutrition and Programming</td>
                        <td>Previous and Form Check</td>
                        <td>Long-term goal-oriented programming per block</td>
                    </tr>
                    <tr>
                        <th scope="row">$150</th>
                        <td>Nutrition and Programming with Video</td>
                        <td>Previous and Video Call</td>
                        <td>Previous with targeted video call after every block</td>
                    </tr>
                    <tr>
                        <th scope="row">$200</th>
                        <td>Meet Prep Only</td>
                        <td>Contact Abiy for Details</td>
                        <td>TBD based on time from meet and communication prior</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default PackagesTable
