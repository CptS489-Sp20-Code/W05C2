class RoundForm extends React.Component {
    constructor(props) {
      super(props);
      //Create date object for today, taking time zone into consideration
      let today = new Date(Date.now()-(new Date()).getTimezoneOffset()*60000);
      //store date as ISO string
      this.state = {date:  today.toISOString().substr(0,10), 
                    course: "",
                    type: "practice",
                    holes: "18",
                    strokes: 80,
                    minutes: 50,
                    seconds: "00",
                    notes: ""};  
    }
  
    computeSGS = () => {
      return (Number(this.state.strokes) + Number(this.state.minutes)) 
                  + ":" + this.state.seconds;
    }
  
    handleSubmit = (event) => {
      event.preventDefault();
      localStorage.setItem("userData",JSON.stringify(this.state));
      alert("Local user data now contains " + localStorage.getItem("userData"));
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <center>
            <label>
              Date:
              <input name="date" className="form-control" 
                type="date" value={this.state.date} onChange={this.handleChange} />
            </label>
            <p></p>
            <label>
              Course:
              <input name="course" className="form-control" type="text"
                value={this.state.course} onChange={this.handleChange}
                placeholder="Course played" size="50" maxLength="50" />
            </label>
          <p></p>
          <label>Type:
          <select name="type" value={this.state.type} 
            className="form-control form-center" onChange={this.handleChange}>
            <option value="practice">Practice</option>
            <option value="tournament">Tournament</option>
          </select> 
          </label>
          <p></p>
          <label># Holes:
          <select name="holes" value={this.state.holes} 
            className="form-control form-center" onChange={this.handleChange}>
            <option value="9">9</option>
            <option value="18">18</option>
          </select> 
          </label>
          <p></p>
          <label># Strokes:
          <input name="strokes" className="form-control form-center" type="number" 
            min="9" max="200" value={this.state.strokes} 
            onChange={this.handleChange} />
          </label>
          <p></p>
          <label>Time: <br></br>
          <input name="minutes" type="number" size="3"
            min="10" max="400" value={this.state.minutes}
            onChange={this.handleChange} />:  
          <input name="seconds" type="number" size="2"
            min="0" max="60" value={this.state.seconds} 
            onChange={this.handleChange} />
          </label>
          <p></p>
          <label>Speedgolf Score: <br></br>
              <input name="SGS" className="form-center" type="text" size="6" 
                disabled={true} value={this.computeSGS()} />
          </label>
          <p></p>
          <label>Notes:
              <textarea name="notes" className="form-control" rows="6" cols="75" 
                placeholder="Enter round notes" value={this.state.notes} 
                onChange={this.handleChange} />
          </label>
          <p></p>
          <input type="submit" style={{width: "70%",fontSize: "36px"}} 
            className="btn btn-primary btn-color-theme" value="Save Round Data" />
          </center>
        </form>
      );
    }
}

  ReactDOM.render(
    <RoundForm />,
    document.getElementById('root')
  );