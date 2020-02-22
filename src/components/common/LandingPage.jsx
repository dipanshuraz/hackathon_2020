import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Image from "./extra/Image";
import ImageText from "./extra/ImageText";
import ImageCard from "./extra/ImageCard";
import '../../App.css'

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: 0,
      endDate: 0,
      totalPrice: 0,
      price: 0,
      arr: [1, 2, 3, 4, 5, 6]
    };
  }
  render() {
    return (
      <div>
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleCaptions"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div style={{ height: "91vh", background: "#229BBF" }}></div>
              <div class="carousel-caption d-block ">
                <div>
                  <div
                    className=" card mx-2 mx-auto my-card mb-3  rounded-0"
                    style={{ opacity: ".9", width: "50vw" }}
                  >
                    <div className="card-body  ">
                      <h2 className="font-weight-bold card-title text-dark mt-2">
                        Make the first move
                      </h2>
                      <p
                        style={{ opacity: "1" }}
                        className="card-subtitle mb-4 text-dark px-3"
                      >
                        <small>
                          Start meeting new people in your area! If you already
                          have an account, sign in to use Bumble on the web.
                        </small>
                      </p>

                      <p className="mb-2">
                        <button
                          to=""
                          className="card-link text-white btn  rounded-0 px-5"
                          style={{ background: "#229BBF" }}
                        >
                          Join
                        </button>
                        <Link
                          className="card-link text-dark btn rounded-0 px-4"
                          to="/orders"
                          style={{ border: "2px solid #229BBF" }}
                        >
                          Sign Up
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="h-25 my-5 py-4 "></div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div style={{ height: "91vh", background: "#FFC629" }}></div>
              <div class="carousel-caption d-block">
                <div>
                  <div
                    className=" card mx-2 mx-auto my-card mb-3  rounded-0"
                    style={{ opacity: ".9", width: "50vw" }}
                  >
                    <div className="card-body  ">
                      <h2 className="font-weight-bold card-title text-dark mt-2">
                        Make the first move
                      </h2>
                      <p
                        style={{ opacity: "1" }}
                        className="card-subtitle mb-4 text-dark px-3"
                      >
                        <small>
                          Start meeting new people in your area! If you already
                          have an account, sign in to use Bumble on the web.
                        </small>
                      </p>

                      <p className="mb-2">
                        <button
                          to=""
                          className="card-link text-white btn rounded-0 px-5"
                          style={{ background: "#FFC629" }}
                        >
                          Join
                        </button>
                        <Link
                          className="card-link text-dark btn rounded-0 px-4"
                          to="/orders"
                          style={{ border: "2px solid #FFC629" }}
                        >
                          Sign Up
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="h-25 my-5 py-4 "></div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div style={{ height: "91vh", background: "#F56A35" }}></div>
              <div class="carousel-caption d-block">
                <div>
                  <div
                    className=" card mx-2 mx-auto my-card mb-3  rounded-0"
                    style={{ opacity: ".9", width: "50vw" }}
                  >
                    <div className="card-body  ">
                      <h2 className="font-weight-bold card-title text-dark mt-2">
                        Make the first move
                      </h2>
                      <p
                        style={{ opacity: "1" }}
                        className="card-subtitle mb-4 text-dark px-3"
                      >
                        <small>
                          Start meeting new people in your area! If you already
                          have an account, sign in to use Bumble on the web.
                        </small>
                      </p>

                      <p className="mb-2">
                        <button
                          to=""
                          className="card-link text-white btn  rounded-0 px-5"
                          style={{ background: "#F56A35" }}
                        >
                          Join
                        </button>
                        <Link
                          className="card-link text-dark btn rounded-0 px-4"
                          to="/orders"
                          style={{ border: "2px solid #F56A35" }}
                        >
                          Sign Up
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="h-25 my-5 py-4 "></div>
                </div>
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        <div className="container mt-3 pt-5">
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center align-self-center">
              <div className="center p-5">
                <div className="line-dark my-2"></div>
                <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, quam.</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eos quae aliquam cumque distinctio optio doloribus voluptas unde sequi earum.
                </p>

              </div>
            </div>
            <div className="col-md-6 bg-img-2"></div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 bg-img-1"></div>
            <div className="col-md-6 d-flex justify-content-center align-self-center">
              <div className="center p-5">
                <div className="line-dark my-2"></div>
                <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, magni?</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis numquam voluptates asperiores, quis nemo incidunt eaque quas maiores error reiciendis!
                </p>

              </div>
            </div>

          </div>
        </div>
        <div className="bg-img-3 container-fluid">
          <div className="container  mt-3 pt-5">
            <div className="row">
              {this.state.arr.map(ele => {
                return (
                  <ImageCard
                    head="This is heading"
                    para="Some quick example text to build on the card title and make up the bulk of the card's content."
                    url="https://static1.squarespace.com/static/57d03e423e00be61bf183b3d/t/5c94d116085229d4d73baccc/1553256732369/roller+rink+friends.jpg"
                  />
                );
              })}
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default LandingPage;
