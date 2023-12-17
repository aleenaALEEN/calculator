import React from "react";
import "./style.css";
class A extends React.Component {
  state = {
    string1: "",
    // result:"",
  };
  handleinp = (e) => {
    console.log(e.target.value);
  };
  handlesub = (e) => {
    // console.log("Ac btn is working")
    // console.log(e.target.innerText);
    // this.setState({string:e.target.innerText})
    if (e.target.innerText == "=") {
      console.log("inside equal", this.state.string1);
      var newStr = this.state.string1;
      newStr = String(eval(newStr));
      console.log(typeof newStr, "new Str equal");
      //  this.setState({result:newStr})
      // this.setState({result:result2})
      // console.log("res",this.state.result)
      this.setState({ string1: newStr });
    } else if (e.target.innerText == "Ac") {
      this.setState({ string1: "" });
    } else if (e.target.innerText == "x") {
      var str = this.state.string1;
      var newstr = str;
      var str2 = newstr.slice(0, -1);
      console.log(this.state.string1, "str2");
      this.setState({ string1: str2 });
    } else if (e.target.innerText == "sin") {
      var st = this.state.string1;
      var st2 = Math.sin(st).toFixed(4);
      console.log(st2, "sin");
      this.setState({ string1: st2 });
      console.log(this.state.string1, "s-state");
    } else if (e.target.innerText == "cos") {
      var str = this.state.string1;
      var str2 = Math.cos(str).toFixed(4);
      this.setState({ string1: str2 });
    } else if (e.target.innerText == "tan") {
      var str = this.state.string1;
      var str2 = Math.tan(str).toFixed(4);
      this.setState({ string1: str2 });
    } else if (e.target.innerText == "ln") {
      var str = this.state.string1;
      var str2 = Math.log(str).toFixed(4);
      this.setState({ string1: str2 });
    } else {
      var str = this.state.string1;
      var newstr = str.concat(e.target.innerText);
      this.setState({ string1: newstr });
      console.log(typeof this.state.string1, "strng1");
    }
  };

  render() {
    // console.log(this.state.string,"state");
    // console.log(this.state.string1,"state");
    console.log(typeof this.state.string1, "str4");
    return (
      <div>
        <div className="container">
        <h1>Calculater</h1>

          <div className="calculator">
            <input
              className="cal-inp"
              type="text"
              onChange={this.handleinp}
              value={this.state.string1}
            ></input>

            <button className="btn" onClick={this.handlesub}>
              Ac
            </button>
            <button className="btn" onClick={this.handlesub}>
              x
            </button>
            <button className="btn" onClick={this.handlesub}>
              sin
            </button>
            <button className="btn" onClick={this.handlesub}>
              cos
            </button>
            <button className="btn" onClick={this.handlesub}>
              tan
            </button>
            <button className="btn" onClick={this.handlesub}>
              ln
            </button>
            <button className="btn" onClick={this.handlesub}>
              +
            </button>
            <button className="btn" onClick={this.handlesub}>
              -
            </button>
            <button className="btn" onClick={this.handlesub}>
              7
            </button>
            <button className="btn" onClick={this.handlesub}>
              8
            </button>
            <button className="btn" onClick={this.handlesub}>
              9
            </button>
            <button className="btn" onClick={this.handlesub}>
              *
            </button>
            <button className="btn" onClick={this.handlesub}>
              4
            </button>
            <button className="btn" onClick={this.handlesub}>
              5
            </button>
            <button className="btn" onClick={this.handlesub}>
              6
            </button>
            <button className="btn" onClick={this.handlesub}>
              /
            </button>
            <button className="btn" onClick={this.handlesub}>
              1
            </button>
            <button className="btn" onClick={this.handlesub}>
              2
            </button>
            <button className="btn" onClick={this.handlesub}>
              3
            </button>
            <button className="btn" onClick={this.handlesub}>
              %
            </button>
            <button className="btn" onClick={this.handlesub}>
              0
            </button>
            <button className="btn" onClick={this.handlesub}>
              00
            </button>
            <button className="btn" onClick={this.handlesub}>
              .
            </button>
            <button className="btn" onClick={this.handlesub}>
              =
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default A;
