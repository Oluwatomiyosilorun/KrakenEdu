import React from 'react';
// import {Link} from 'react-router-dom'
import Logo from '../../assets/images/logo.png'
import Suggestion from '../Suggestion';

const Home = () => {
    return (
        <div className="container_fluid">
            <div className="container">
                <section>
                    <div className="grad">
                        <h4>Frontend Mentor</h4>
                        <p>Feedback Board</p>
                    </div>

                    <div className="category_one">
                        <button className="active">All</button>
                        <button>UI</button>
                        <button>UX</button>
                        <button>Enhancement</button>
                        <button>Bug</button>
                        <button>Feature</button>
                    </div>

                    <div className="category_one">
                        <div className="category_one_content">
                            <h4>Roadmap</h4>
                            <p className="view">View</p>
                            {/* <Link to="#">View</Link> */}
                        </div>

                        <div>
                            <div className="listed_items">
                                <p className="dotted"></p>
                                <p className="text">Planned</p>
                                <p className="number_of_view">2</p>
                            </div>

                            <div className="listed_items">
                                <p className="dotted one"></p>
                                <p className="text">In-progress</p>
                                <p className="number_of_view">3</p>
                            </div>

                            <div className="listed_items">
                                <p className="dotted two"></p>
                                <p className="text">Live</p>
                                <p className="number_of_view">1</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div>
                    <div className="suggestion">
                        <div className="logo_section">
                            <img src={Logo} alt="" />
                            <p>6 Suggestion</p>
                        </div>
                        <div className="sortby">
                            <p>Sort by: 
                                <select>
                                    <option>Most Update</option>
                                </select>
                            </p>
                        </div>
                        <div>
                            <button className="btn">+ Add Feedback</button>
                        </div>
                    </div>
                    <div>
                        <Suggestion
                            detailsh6="Add tags for solutions"
                            detailsP="Easier to search for solutions based on a specific stack."
                            btn="Enhancement"
                            commentNumber="2"
                        />

                        <Suggestion
                            detailsh6="Add a dark theme option"
                            detailsP="Easier to search for solutions based on a specific stack."
                            btn="Enhancement"
                            commentNumber="1"
                        />

                        <Suggestion
                            detailsh6="Q&A within the challenge hubs"
                            detailsP="Easier to search for solutions based on a specific stack."
                            btn="Bug"
                            commentNumber="4"
                        />

                        <Suggestion
                            detailsh6="Allow image/video upload to feedback"
                            detailsP="Easier to search for solutions based on a specific stack."
                            btn="Feature"
                            commentNumber="8"
                        />  
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;