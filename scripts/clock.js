class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date(), visible: true};
      }

    componentDidMount() {
        this.timer = setInterval(
          () => this.updateTime(),
          1000
        );
      }

    componentWillUnmount() {
        clearInterval(this.timer);
      }

    updateTime() {
        this.setState({
          date: new Date()
        });
    }

   buttonClick = () => {
        this.setState({
            visible: !this.state.visible
          });
    }

    render() {
      return (
        <div>
          <h1>Hello CptS 489 Students!</h1>
          {this.state.visible ? <h2>It is <FormattedDate date={this.state.date} />.</h2> : null}
          <button className="btn btn-primary" onClick={this.buttonClick}>{this.state.visible ? "Hide Time" : "Show Time"}</button>
        </div>
      );
    }
  }

  class FormattedDate extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: props.date};
    }

    componentWillReceiveProps(nextProps) {
        this.setState({date: nextProps.date});
    }

    render() {
      return this.state.date.toLocaleTimeString();
    }

  }

  ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  );
