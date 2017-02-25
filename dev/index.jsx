var React = require('react');
var ReactDOM = require('react-dom');
/*var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;*/
import { Router, Route, hashHistory, Link, IndexRoute, IndexLink} from 'react-router'

if (typeof windows !== 'undefined'){
  windows.React = React;
}

var App = React.createClass({
  render: function(){
    return (
      <div>
        <h1>Simple SPA</h1>
        <ul className="header">
          <li><IndexLink to='/' activeClassName="active">Home</IndexLink></li>
          <li><Link to='/stuff' activeClassName="active">Stuff</Link></li>
          <li><Link to='/contact' activeClassName="active">Contact</Link></li>
        </ul>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }

});

var Home = React.createClass({
  render: function(){
    return(
      <div>
        <h1>Home</h1>
        <p>Cras facilisis urna ornare ex volutpat, et
          convallis erat elementum. Ut aliquam, ipsum vitae
          gravida suscipit, metus dui bibendum est, eget rhoncus nibh
          metus nec massa. Maecenas hendrerit laoreet augue
          nec molestie. Cum sociis natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus.</p>
  
          <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
      </div>
    );
  }
});

var Contact = React.createClass({
  render: function() {
      return (
        <div>
          <h2>GOT QUESTIONS?</h2>
          <p>The easiest thing to do is post on
          our <a href="http://forum.kirupa.com">forums</a>.
          </p>
        </div>
      );
    }
});
 
var Stuff = React.createClass({
  render: function() {
      return (
        <div>
          <h2>STUFF</h2>
          <p>Mauris sem velit, vehicula eget sodales vitae,
          rhoncus eget sapien:</p>
          <ol>
            <li>Nulla pulvinar diam</li>
            <li>Facilisis bibendum</li>
            <li>Vestibulum vulputate</li>
            <li>Eget erat</li>
            <li>Id porttitor</li>
          </ol>
        </div>
      );
    }
});


var destination = document.querySelector('#container');

ReactDOM.render(
  <div>
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home}/>
        <Route path='stuff' component={Stuff}/>
        <Route path='contact' component={Contact}/>
      </Route>
    </Router>
  </div>,
  destination
);

























/*var React = require('react');
var ReactDOM = require('react-dom');

if (typeof windows !== 'undefined'){
  window.React = React;
}*/
/* Creating a To-Do App */

/*var destination = document.querySelector("#container");

var ToDoList = React.createClass({
  getInitialState: function(){
    return {
      items: []
    };
  },
  addItem: function(event){
    var itemArray = this.state.items;

    itemArray.push(
      {
        text: this._inputElement.value,
        key: Date.now()
      }
    );

    this.setState({
      items: itemArray
    });

    this._inputElement.value = "";

    event.preventDefault();
  },

  render: function(){
    return(
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a}
              placeholder="enter task">
            </input>
            <button type="submit">Add</button>
          </form>
        </div>
        <ToDoItems entries={this.state.items}/>
      </div>
      );
  }
});

var ToDoItems = React.createClass({
  render: function(){
    var todoEntries = this.props.entries;

    function createTasks(item){
      return <li key={item.key}>{item.text}</li>
    }
    var listItems = todoEntries.map(createTasks);

    return (
      <ul className="thelist">
        {listItems}
      </ul>
    );
  }
});

ReactDOM.render(
  <div>
    <ToDoList/>  
  </div>,
  destination
);*/




/* Please omit everything post this line */

/*var HelloWorld = React.createClass({
  render: function() {
    return (
      <p>Hello, {this.props.greetTarget}!</p>
    );
  }
});

/*var HelloWorld = React.createClass({
  render: function(){
    return (
      <p>Hello {this.props.greetTarget}!</p>
    );
  }
});

var Buttonify = React.createClass({
  render: function(){
    return(
      <div>
        <button type={this.props.behavior}>{this.props.children}</button>
      </div>
      );
  }
});
 
ReactDOM.render(
  <div>
    <HelloWorld greetTarget="Batman"/>
    <HelloWorld greetTarget="Iron Man"/>
    <HelloWorld greetTarget="Nicolas Cage"/>
    <HelloWorld greetTarget="Mega Man"/>
    <HelloWorld greetTarget="Bono"/>
    <HelloWorld greetTarget="Catwoman"/>
  </div>,
  document.querySelector("#container")
);  

ReactDOM.render(
  <div>
    <HelloWorld greetTarget="Saket"/>
    <HelloWorld greetTarget="Rohit"/>
    <HelloWorld greetTarget="Ramesh"/>
    <HelloWorld greetTarget="Suresh"/>
    <Buttonify behavior="submit">Send data</Buttonify>

  </div>,
  document.querySelector("#container")
  );
*/

/*var Letter = React.createClass({
    render: function() {
        var letterStyle = {
          padding: 10,
          margin: 10,
          backgroundColor: this.props.bgcolor,
          color: "#333",
          display: "inline-block",
          fontFamily: "monospace",
          fontSize: "32",
          textAlign: "center"
        };

        return (
          <div style = {letterStyle}>
            {this.props.children}
          </div>
        );
      }
  });
 
var destination = document.querySelector("#container");
 
ReactDOM.render(
  <div>
    <Letter bgcolor="#58B3FF">A</Letter>
    <Letter bgcolor="#FF605F">E</Letter>
    <Letter bgcolor="#FFD52E">I</Letter>
    <Letter bgcolor="#49DD8E">O</Letter>
    <Letter bgcolor="#AE99FF">U</Letter>
  </div>,
  destination
);*/

/*var Card = React.createClass({
  render: function(){
    var cardStyle = {
      height: 200,
      width: 150,
      padding: 0, 
      backgroundColor: "#FFF",
      webkitFilter: "drop-shadow(0px 0px 5px #666)",
      filter: "drop-shadow(0px 0px 5px #666)"
    };

    return (
      <div style={cardStyle}>
          <Square {...this.props}/>
          <Label {...this.props}/>
      </div>
    );
  }
});

var Label = React.createClass({
  render: function(){

    var labelStyle = {
      fontFamily: "sans-serif",
      fontWeight: "bold",
      padding: 13, 
      margin: 0
    };
    return (
      <p style={labelStyle}>{this.props.color}
      </p>
      );
  }
});

var Square = React.createClass({
  render: function(){
    var squareStyle = {
      height: 150, 
      backgroundColor: this.props.color
    };
    return(
      <div style={squareStyle}>
      </div>
      );
  }
});


ReactDOM.render(
  <div>
    <Card color="#FFA737"/>
  </div>,
  document.querySelector("#container")
  );*/


/*var LightningCounter = React.createClass({
  getInitialState: function(){
    return {
      strikes: 0
    };
  },

  timeTicker: function(){
    this.setState({
      strickes: this.state.strikes + 100
    });
  },

  //This nis being called as soon as the component loads on the windows.
  componentDidMount: function(){
    setInterval(this.timeTicker, 1000);
  },

  render: function(){
    var counterStyle = {
      color: "#66FFFF",
      fontSize: 50
    };

    var count = this.state.strikes.toLocaleString();

    return (
      <h1 style={counterStyle}>{count}</h1>
      );
  }
});

var LightningCounterDisplay = React.createClass({
    render: function() {
      var commonStyle = {
        margin: 0,
        padding: 0
      }
      var divStyle = {
        width: 250,
        textAlign: "center",
        backgroundColor: "#020202",
        padding: 40,
        fontFamily: "sans-serif",
        color: "#999999",
        borderRadius: 10
      };
 
      return(
        <div style={divStyle}>
          <LightningCounter/>
          <h2>LIGHTNING STRIKES</h2>
          <h2>WORLDWIDE</h2>
          <p>(since you loaded this example)</p>
        </div>
      );
    }
});
 
ReactDOM.render(
  <LightningCounterDisplay/>,
  document.querySelector("#container")
);      
*/

/*var LightningCounter = React.createClass({
  getInitialState: function() {
    return {
      strikes: 0
    };
  },
  timerTick: function() {
    this.setState({
      strikes: this.state.strikes + 100
    });
  },
  componentDidMount: function() {
    setInterval(this.timerTick, 1000);
  },
  render: function() {
    var counterStyle = {
      color: "#66FFFF",
      fontSize: 50
    };
 
    var count = this.state.strikes.toLocaleString();
 
    return (
      <h1 style={counterStyle}>{count}</h1>
    );
  }
});
 
var LightningCounterDisplay = React.createClass({
    render: function() {
      var commonStyle = {
        margin: 0,
        padding: 0
      }
      var divStyle = {
        width: 250,
        textAlign: "center",
        backgroundColor: "#020202",
        padding: 40,
        fontFamily: "sans-serif",
        color: "#999999",
        borderRadius: 10
      };
 
      return(
        <div style={divStyle}>
          <LightningCounter/>
          <h2>LIGHTNING STRIKES</h2>
          <h2>WORLDWIDE</h2>
          <p>(since you loaded this example)</p>
        </div>
      );
    }
});
 
ReactDOM.render(
  <LightningCounterDisplay/>,
  document.querySelector("#container")
);      */

/*var Circle = React.createClass({
  render: function(){
    var circleStyle = {
      padding: 10, 
      margin: 20,
      display: "inline-block",
      backgroundColor: this.props.bgcolor,
      borderRadius: "50%",
      width: 100, 
      height: 100,
    };

    return (
      <div style={circleStyle}>
      </div>
      );
  }
});

var destination = document.querySelector("#container");

var theCircle = <Circle bgcolor="#f4d33f"/>

function showCircle(){
  var colors = ["#393E41", "#E94F37", "#1C89BF", "#A1D363"];
  //var ran = Math.floor(Math.random() * colors.length);
  var renderData = [];
  for(var i = 0; i < colors.length; i++){
    var color = colors[i];
    renderData.push(<Circle bgcolor={color} key={i+color}/>);
  }

  return renderData;
};

ReactDOM.render(
  <div>
    {showCircle()}
  </div>,
  destination
);*/

/*var destination = document.querySelector("#container");

var Counter = React.createClass({
  render: function(){
    var textStyle = {
        fontSize: 72,
        fontFamily: "sans-serif",
        color: "#333",
        fontWeight: "bold"
      };
    return(
      <div style={textStyle}>
        {this.props.display}
      </div>
      );
  }
});

var PlusButton = React.createClass({

  render: function(){
  var buttonStyle= {
    fontSize: "1em",
    width: 30,
    height: 30,
    fontFamily: "sans-serif",
    color: "#333",
    fontWeight: "bold",
    lineHeight: "3px"
  };
  return (
    <div style={buttonStyle} onClick={this.props.clickHandler}>
      <button>+</button>
    </div>
    );
  }
 });

var CounterParent = React.createClass({
  getInitialState: function(){
    return{
      count: 0
    };
  },

  increase: function(e){
    var currentCount = this.state.count;

    if (e.shiftKey){
      currentCount += 10;
    }
    else{
      currentCount += 1;
    }
    this.setState({
      count: currentCount
    });
  },*/
/*
  render: function(){
    var backgroundStyle = {
        padding: 50,
        backgroundColor: "#FFC53A",
        width: 250,
        height: 100,
        borderRadius: 10,
        textAlign: "center"
      };
 
    return(
      <div style={backgroundStyle}>
        <Counter display={this.state.count}/>
        <PlusButton clickHandler={this.increase}/>
      </div>,
      destination
      );
  },
});


ReactDOM.render(
  <div>
    <CounterParent/>
  </div>, 
  destination
);*/



