import React, { Component } from "react";
import { Link } from "react-router-dom";
import Pagination from "./extra/Pagination";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roomListPerPage: 6,
      currentPage: 1,
      currentPageList: [],
      roomList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    };
  }
  handlePage = () => {
    let indexOfLastList = this.state.currentPage * this.state.roomListPerPage;
    let indexOfFirstList = indexOfLastList - this.state.roomListPerPage;
    this.setState({
      currentPageList: this.state.roomList.slice(
        indexOfFirstList,
        indexOfLastList
      )
    });
  };

  componentDidMount = () => {
    // this.props.showRooms();
    this.paginate(1);
  };

  paginate = pageNumber => {
    this.setState(
      {
        currentPage: pageNumber
      },
      () => {
        this.handlePage();
      }
    );
  };
  render() {
    return (
      <div className='container text-center'>
        <h1 className="pt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, libero!
          Labore sequi rem distinctio hic adipisci quas, voluptatum velit
          magnam?
        </p>
        <div className="container d-flex flex-wrap justify-content-center mt-5 ">
          {this.state.currentPageList.map((val, i) => {
            // if (!val.isBooked) {
            return (
              <div
                key={val}
                className="card mb-5 mx-4 my-card"
                style={{ width: "18rem" }}
              >
                <img
                  src="https://static1.squarespace.com/static/57d03e423e00be61bf183b3d/t/5c94d116085229d4d73baccc/1553256732369/roller+rink+friends.jpg"
                  class="card-img-top"
                  alt="..."
                  height="200px"
                />
                <div className="card-body">
                  <h5 className="card-title">Good Condition</h5>
                  <p className="card-text">If You want this take it</p>
                  <p className="card-text">Price Of This: Its Free</p>
                  <p className="card-text">Card No: {val}</p>
                  <p>
                    <Link to={`/booking-page/${val}`} className="card-link">
                      Book Now >>
                    </Link>
                  </p>
                </div>
              </div>
            );
            // }
          })}
        </div>
        <Pagination
          // totalList={this.props.roomList}
          totalList={this.state.roomList}
          roomListPerPage={this.state.roomListPerPage}
          changePage={this.paginate}
        />
      </div>
    );
  }
}

export default Home;
