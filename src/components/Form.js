import React, { Component } from "react";


class Form extends Component {

    state = {
        userName: "",
        email: "",
        contact: ""
    };

    handleInputChange = event => {

        let value = event.target.value;
        const name = event.target.name;


        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {

        event.preventDefault();
        if (!this.state.userName) {
            alert("Please give a name");
        } else {
            alert(`Hello ${this.state.userName}`);
        }

        this.setState({
            userName: "",
            email: "",
            contact: ""
        });
    };

    render() {

        return (
            <div>
                <p>
                    Hello {this.state.userName}
                </p>
                <form className="form">
                    <input
                        value={this.state.userName}
                        name="userName"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="First Name"
                    />
                    <input
                        value={this.state.email}
                        name="email"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Email"
                    />
                    <input
                        value={this.state.contact}
                        name="contact"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Contact"
                    />
                    <button onClick={this.handleFormSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default Form;
