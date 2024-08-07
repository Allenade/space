import "./Home.scss";
const Home = () => {
  return (
    <div className="home">
      <div className="background-image"></div>
      <div className="main-container">
        <div className="big-container">
          <div className="first-container">
            <h5>SO, YOU WANT TO TRAVEL TO</h5>
            <h1>SPACE</h1>
            <p>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className="second-container">
            <div className="circle-container">
              <div className="circle">
                <p>EXPLORE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
