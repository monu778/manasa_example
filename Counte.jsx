import React from 'react';
import styles from './App.css';

class Counte extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };
    }
    
    componentWillMount() {
        console.log("component is mounting");
        console.log("dsdsf  === "+this.props.deadline);
        this.getTimeDiff(this.props.deadline);

    }

    componentDidMount() {
        console.log("Component is did mount");
        setInterval(() => this.getTimeDiff(this.props.deadline), 1000);

    }

    prefix0(num) {
        return num < 10 ? '0' + num : num;
    }

    getTimeDiff(deadline) {
        console.log(" ---- "+deadline)

        const timeDiff = Date.parse(deadline) - Date.parse(new Date());
        const seconds = Math.floor((timeDiff / 1000) % 60);
        const minutes = Math.floor((timeDiff / 1000 / 60) % 60);
        const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
        const days = Math.floor((timeDiff / (1000 * 60 * 60 * 24)));

       // console.log(timeDiff);
       // console.log(days + " days" + hours + " hours" + minutes + " minutes" + seconds + " seconds");
        this.setState({ 'days': days, 'hours': hours, 'minutes': minutes, 'seconds': seconds });
    }

    render() {
        return (
            <div>
                <div className = "alert alert-success"> Time to { this.props.deadline } </div>
                <span className ='btn btn-success' > Days: { this.prefix0(this.state.days) } </span>&nbsp;
                <span  className = 'btn btn-danger' > Hours: { this.prefix0(this.state.hours)} </span>&nbsp;
                <span  className = 'btn btn-primary' > Minutes: { this.prefix0(this.state.minutes) } </span>&nbsp;
                <span  className = 'btn btn-info' > Seconds: { this.prefix0(this.state.seconds) } </span>
            </div>
        )
    }

    

}


export default Counte;