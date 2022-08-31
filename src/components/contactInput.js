import React from "react";

class ContactInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            username: '',
            igUrl: '',
            imgUrl: ''
        }

        this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
        this.onUsenameChangeEventHandler = this.onUsenameChangeEventHandler.bind(this);
        this.onIgurlChangeEventHandler = this.onIgurlChangeEventHandler.bind(this);
        this.onImgUrlChangeEventHandler= this.onImgUrlChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onNameChangeEventHandler(event) {
        this.setState(() => {
            return {
                name: event.target.value
            }
        }) 
    }

    onUsenameChangeEventHandler(event) {
        this.setState(() => {
            return {
                username: event.target.value
            }
        })
    }

    onIgurlChangeEventHandler(event) {
        this.setState(() => {
            return {
                igUrl: event.target.value
            }
        })
    }

    onImgUrlChangeEventHandler(event) {
        this.setState(() =>  {
            return {
                imgUrl: event.target.url
            }
        })
    }

    onSubmitEventHandler(event) {

        event.preventDefault();
        this.props.addContact(this.state);
        const Message = `Nama: ${this.state.name}\nUsername: ${this.state.username}\nInstagram: ${this.state.igUrl}\nFoto: ${this.state.imgUrl}\nBerhasil diupload!`;

        alert(Message);
    }

    render() {
        return (
            <div>
                <h1>MASUKKAN KONTAK KAMU</h1>
                <form className="contact-input" onSubmit={this.onSubmitEventHandler}>
                    <label for="name">Nama: </label>
                    <input id="name" type="text" value={this.state.name} onChange={this.onNameChangeEventHandler} />
                    <br />
                    <label for="tag">Username: </label>
                    <input id="tag" type="text" value={this.state.username} onChange={this.onUsenameChangeEventHandler} />
                    <br />
                    <label for="igUrl">Url Instagram: </label>
                    <input id="igUrl" type="text" value={this.state.igUrl} onChange={this.onIgurlChangeEventHandler} />
                    <br />
                    <label for="imgUrl">Foto: </label>
                    <input id="imgUrl" type="file" value={this.state.imgUrl} onChange={this.onImgUrlChangeEventHandler} />
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div> 
        )   
    }
}

export default ContactInput;