import React, { Component } from 'react';

class App extends Component {
  state = {
    person: {
      fullName: "LAKRIM Youssef",
      bio: "Hi every one I am fullstack Developer ",
      imgSrc: "https://via.placeholder.com/150",
      profession: "Web Developer",
    },
    shows: false,
    time: 0,
    intervalId: null,
  };

  componentDidMount() {
    const intervalId = setInterval(this.timer, 1000);
    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  timer = () => {
    this.setState((prevState) => ({
      time: prevState.time + 1,
    }));
  };

  toggleShow = () => {
    if (this.state.shows) {
      clearInterval(this.state.intervalId);
      this.setState({ intervalId: null });
    } else {
      const intervalId = setInterval(this.timer, 1000);
      this.setState({ intervalId });
    }
    this.setState((prevState) => ({
      shows: !prevState.shows,
      time: 0,
    }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { shows, time } = this.state;

    return (
      <div>
        <button onClick={this.toggleShow}>Toggle Show</button>
        {shows && (
          <div>
            <h2>{fullName}</h2>
            <p>{bio}</p>
            <img src={imgSrc} alt="Profile" />
            <p>{profession}</p>
          </div>
        )}
        {shows && <p>Time since last component mounted: {time} seconds</p>}
      </div>
    );
  }
}

export default App;
