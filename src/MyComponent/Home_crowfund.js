import React from 'react';
import {useNavigate } from "react-router-dom";
const Home_crowfund = () => {
const navigate = useNavigate();
const tocrowdfundingprojects=()=>{
navigate('/crowfunding_projects')
}
const tocharityprojects=()=>{
navigate('/charity_projects')
}
  return (
    <div
      className="card-container"
    >
  <div class="custom-card">
    <div class="card-tag crowdfunding">Projects (Crowdfunding)</div>
    <h3 class="card-title">Explore Projects Related to Crowdfunding</h3>
    <p class="card-text">
      Help make an impact by contributing to active campaigns and supporting the people behind them.
    </p>
    <div class="card-buttons">
      <button class="buttons primary">Learn About Crowdfunding</button>
      <button class="buttons outline"onClick={tocrowdfundingprojects}>Explore Projects</button>
    </div>
  </div>
{/* 
  <!-- Charity Card --> */}
  <div class="custom-card">
    <div class="card-tag charity">Projects (Charity)</div>
    <h3 class="card-title">Explore Events Related to Charity</h3>
    <p class="card-text">
      Contribute to active charity events and support meaningful causes and communities.
    </p>
    <div class="card-buttons">
      <button class="buttons blue">Learn About Charity</button>
      <button class="buttons outline-blue" onClick={tocharityprojects}>Explore Projects</button>
    </div>
  </div>
    </div>
  );
};

export default Home_crowfund;

