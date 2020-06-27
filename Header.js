import React from 'react'
import './Header.css'

class Header extends React.Component {

state ={
    form: false
}

showform =(e)=>{
    if(e.target.value){
        this.setState({
            form:true
        })
    }
}
    render() {

        return (<div >

            <div className="header" >
                <h3 className="api">Api Keys</h3>

                <button className="buttonAdjustment" onClick={this.showform}>+ Create API Key</button>

            </div>

            <br />
            <div className="create">
                <div style={{ backgroundColor: "#e6e6e6" }}>
                    <h3 className="createApi"> Create API Keys</h3>
                </div>
                <div class="shadow">
                    <form>
                        <div>
                            <h6 className="name">Name</h6>
                            <br />
                            <input className="namefield" type="text" />
                        </div>
                        <div>
                            <h6 className="name">API KeyID</h6>
                            <br />
                            <input className="namefield" type="text" />
                            {/* <a href="#" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Create</a> */}
                            <button className="buttonAdjustment2">Auto Customize</button>
                        </div>
                        <div>
                            <h6 className="name">API Key</h6>
                            <br />
                            <input className="namefield" readOnly type="text" />
                            {/* <a href="#" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Create</a> */}
                            <button className="buttonAdjustment2">Auto Customize</button>

                        </div>

                        <div className="name">
                            {/* <button className="buttonAdjustment2">Auto Customize</button> */}

                            <a href="#" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Create</a>

                        </div>

                    </form>


                </div>
                <div class="end">
                    <table>
                        <tr>
                            <th>First Name</th>
                            <th>API Key</th>
                            <th>Action</th>
                        </tr>
                        <tr>
                            <td>Peter</td>
                            <td>Griffin</td>
                            <select><option></option></select>
                        </tr>
                        <tr>
                            <td>Lois</td>
                            <td>Griffin</td>
                            <select><option></option></select>
                            
                        </tr>
                      
                        <tr>
                            <td>Cleveland</td>
                            <td>Brown</td>
                            <select><option></option></select>
                        </tr>
                    </table>
                </div>
            </div>

        </div>

        )

    }
}

export default Header