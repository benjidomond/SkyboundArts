import React from "react";
import axios from "axios";

class AddVideo extends React.Component {
    constructor(props){
        super(props);
        //These state variables are containers for the values inserted when adding videos
        this.state = {
            eventName: "",
            p1Player: "",
            p2Player: "",
            p1Character: "",
            p2Character: "",
            winnerCharacter: "",
            winnerPlayer: "",
            videoLink: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    async handleSubmit(e){
        e.preventDefault();
        const video = {
            "EventName": this.state.eventName,
            "P1Character": this.state.p1Character,
            "P2Character": this.state.p2Character,
            "WinnerCharacter": this.state.winnerCharacter,
            "P1Player": this.state.p1Player,
            "P2Player": this.state.p2Player,
            "WinnerPlayer": this.state.winnerPlayer,
            "VideoLink": this.state.videoLink
        }
        /*
        The event, player1, and player2 constants are used for the axios posts after a video is created, adding the search params to the database.
        */
        const event = {
            "eventName": this.state.eventName
        }
        const player1 = {
            "playerName": this.state.p1Player
        }
        const player2 = {
            "playerName": this.state.p2Player
        }
        await axios.post("http://localhost:5000/api/videos", video)
        .then(function (response){
            console.log(response);
        })
        .catch(function (error){
            console.log(error);
        })
        await axios.post("http://localhost:5000/api/events", event)
        .then(function (response){
            console.log(response);
        })
        .catch(function (error){
            console.log(error);
        })
        await axios.post("http://localhost:5000/api/players", player1)
        .then(function (response){
            console.log(response);
        })
        .catch(function (error){
            console.log(error);
        })
        await axios.post("http://localhost:5000/api/players", player2)
        .then(function (response){
            console.log(response);
        })
        .catch(function (error){
            console.log(error);
        })
    }
    handleChange(e){
        const value = e.target.value;
        this.setState({
            [e.target.name]: value
        })
    }
    render(){
        return (
            <div>
                <h1 id="addHeader">Upload Video</h1>
                {/* Form used to submit video content */}
                <form method="POST" className="addForm" onSubmit={this.handleSubmit}>
                <input className="formInput" type="text" value={this.state.eventName} name="eventName" placeholder="Event Name" onChange={this.handleChange} />
                <input className="formInput" type="text" value={this.state.p1Player} name="p1Player" placeholder="Player 1 Name" onChange={this.handleChange} />
                <input className="formInput" type="text" value={this.state.p2Player} name="p2Player" onChange={this.handleChange} placeholder="Player 2 Name" />
                <label className="addLabels" htmlFor="P1Character">Select P1's Character:</label>
                <select name="p1Character" id="P1Character" onChange={this.handleChange} value={this.state.p1Character}>
                    <option>Default - Please select a different option!</option>
                    <option value="Charlotta">Charlotta</option>
                    <option value="Ferry">Ferry</option>
                    <option value="Gran">Gran</option>
                    <option value="Katalina">Katalina</option>
                    <option value="Ladiva">Ladiva</option>
                    <option value="Lancelot">Lancelot</option>
                    <option value="Lowain">Lowain</option>
                    <option value="Metera">Metera</option>
                    <option value="Percival">Percival</option>
                    <option value="Vaseraga">Vaseraga</option>
                    <option value="Zeta">Zeta</option>
                </select>
                <label className="addLabels" htmlFor="P2Character">Select P2's Character:</label>
                <select name="p2Character" value={this.state.p2Character} onChange={this.handleChange} id="P2Character">
                    <option>Default - Please select a different option!</option>
                    <option value="Charlotta">Charlotta</option>
                    <option value="Ferry">Ferry</option>
                    <option value="Gran">Gran</option>
                    <option value="Katalina">Katalina</option>
                    <option value="Ladiva">Ladiva</option>
                    <option value="Lancelot">Lancelot</option>
                    <option value="Lowain">Lowain</option>
                    <option value="Metera">Metera</option>
                    <option value="Percival">Percival</option>
                    <option value="Vaseraga">Vaseraga</option>
                    <option value="Zeta">Zeta</option>
                </select>
                <label htmlFor="winningCharacter" className="addLabels">Which character won the match?</label>
                <select name="winnerCharacter" value={this.state.winnerCharacter} onChange={this.handleChange} id="winningCharacter">
                    <option value={this.state.p1Character}>Player 1's Character</option>
                    <option value={this.state.p2Character}>Player 2's Character</option>
                </select>
                <label className="addLabels" htmlFor="winningPlayer">Which player won the match?</label>
                <select name="winnerPlayer" value={this.state.winnerPlayer} onChange={this.handleChange} id="winnigPlayer">
                    <option>Default - please select a different option!</option>
                    <option value={this.state.p1Player}>Player 1</option>
                    <option value={this.state.p2Player}>Player 2</option>
                </select>
                <input type="text" placeholder="Video Link" name="videoLink" value={this.state.videoLink} onChange={this.handleChange} />
                <input type="submit" value="Add Video" />
                <button>Cancel</button>
                </form>
            </div>
        )
    }
}

export default AddVideo;