import React from 'react'
import './style.css'

class Header extends React.Component {

    state = {
        form: false,
        keysArray: [
            {
                name: "Khuram",
                apiKey: "000292736",
                apiKeyId: "321IDkadfhuj990"
            }
        ],
        name: null,
        apiKeyId: null,
        apiKey: null

    }

    onChangeHandler = e => {
        let name = e.target.name
        let val = e.target.value

        this.setState({
            [name]: val
        })
    }

    clickToAdd = e => {
        e.preventDefault()
        let Obj = {
            name: this.state.name,
            apiKey: "6635524fffr",       // this.state.apiKey,
            apiKeyId: "8827254###oidiu"    //this.state.apiKeyId
        }
        this.setState({
            keysArray: [...this.state.keysArray, Obj],

        })
        if (form === true) {
            this.setState({
                form: false
            })
        }
    }



    render() {

        return (
            <>
                <div >

                    <div className="header" >
                        <h3 className="api">Api Keys</h3>

                        <button className="buttonAdjustment" onClick={this.showform}>+ Create API Key</button>

                    </div>

                    <br />
                    <div className="create">
                        <div style={{ backgroundColor: "#e6e6e6", width: '100%' }} onClick={() => { this.setState(!this.state.form) }}>
                            <h3 className="createApi"> Create API Keys</h3>
                        </div>
                        {this.state.form ?
                            <div class="shadow">
                                <form>
                                    <div>
                                        <h6 className="name">Name</h6>
                                        <br />
                                        <input className="namefield" type="text" name="name" onChange={this.onChangeHandler} />
                                    </div>
                                    <div>
                                        <h6 className="name">API KeyID</h6>
                                        <br />
                                        <input className="namefield" type="text" name="apiKeyId" onChange={this.onChangeHandler} />

                                        <button className="buttonAdjustment2">Auto Customize</button>
                                    </div>
                                    <div>
                                        <h6 className="name">API Key</h6>
                                        <br />
                                        <input className="namefield" readOnly type="text" name="apiKey" onChange={this.onChangeHandler} />

                                        <button className="buttonAdjustment2">Auto Customize</button>

                                    </div>

                                    <div className="name">

                                        <a href="#" class="btn btn-primary btn-lg active" role="button" aria-pressed="true" onClick={this.clickToAdd}>Create</a>

                                    </div>

                                </form>
                            </div>

                            :
                            null
                        }
                        <div class="end">
                            <table>
                                <tr>
                                    <th>First Name</th>
                                    <th>API Key</th>
                                    <th>Action</th>
                                </tr>

                                {this.state.keysArray.map((item, key) => {
                                    return <tr key={key}>
                                        <td>{item.name}</td>
                                        <td>{item.apiKey}</td>
                                        <select><option></option></select>
                                    </tr>
                                })}


                            </table>
                        </div>
                    </div>

                </div>

            </>
        )

    }
}

export default Header