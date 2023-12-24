import React, { useState, useEffect } from "react";
import purpleBoi from "./assets/purpleBoi.png";
import { useMediaQuery } from "react-responsive";
import testPicture from "./images/Screenshot (15).png";
import dates from './assets/dates.json';
import { AwesomeButtonProgress } from 'react-awesome-button';
import { useOrientation } from "@uidotdev/usehooks";
const images = import.meta.glob("./images/*");

const getRandomImage = async () => {
  const imageKeys = Object.keys(images);
  const randomKey = imageKeys[Math.floor(Math.random() * imageKeys.length)];
  const imageURL = (await images[randomKey]()).default;
  return imageURL;
};

const Polaroid = ({ picture, description, isMobile }) => {
  const polaroidLaptopStyle = {
    position: "relative",
    height: "75vh",
    width: "auto",
    backgroundColor: "#fff",
    padding: "15px",
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
    borderRadius: "10px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  };

  const polaroidMobileStyle = {
    marginTop:'12vh',
    position: "relative",
    width: "90vw",
    height: "auto",
    backgroundColor: "#fff",
    padding: "1vh",
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
    borderRadius: "10px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  };

  const imageLaptopStyle = {
    width: "auto",
    height: "90%",
    borderRadius: "5px",
  };

  const imageMobileStyle = {
    width: "100%",
    height: "auto",
    borderRadius: "5px",
  };

  const descriptionMobileStyle = {
    fontFamily: "RustyColaPen, sans-serif",
    fontSize: "3vh",
    // marginBottom: "10px",
    marginTop: "2vh",
  };

  const descriptionLaptopStyle = {
    fontFamily: "RustyColaPen, sans-serif",
    fontSize: "5vh",
    // marginBottom: "10px",
    marginTop: "2vh",
  };

  return (
    <div
      style={isMobile ? polaroidMobileStyle : polaroidLaptopStyle}
      className="polaroid"
    >
      <img
        src={picture}
        alt="Polaroid Picture"
        style={isMobile ? imageMobileStyle : imageLaptopStyle}
      />
      <p style={isMobile ? descriptionMobileStyle : descriptionLaptopStyle}>{description}</p>
    </div>
  );
};

const App = () => {
  const [randomPicture, setRandomPicture] = useState("");
  const [date, setDate] = useState("");
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 720px)" });
  const orientation = useOrientation();
  const nextImage = [
    "INNONDU",
    "ONE MORE",
    "GIIIIIVEEE",
    "GREEDY OR WHAT SEND ONE MORE",
    "WOW NICE PICTURE NOW ONE MORE",
    "SAAKAGILLA INNU BEKU",
    "MORE MORE MORE",
    "MAD OR WHAT I/U/WE LOOK SO CUTE GIVE MORE",
    "WE ARE SO COOL",
    "DAMN WE SO SEXY SEND ONE MORE",
    "1 MORE",
    "ME+U=SO CUTE",
    "DAMN WE RAN OUT OF PICS JK LOL PRESS HERE",
    "TULU BARPUNDA? VANTAE VANTAE BARPUNDU",
    "AYUKTHA OR YANISH"
  ];
  const loadImage = async () => {
    setRandomPicture(null);
    const image = await getRandomImage();
    var fileName=image.split('/').pop();
    var fileName1=fileName.split('-')[0]+fileName.split(".").pop();
    console.log(fileName1,dates[fileName1])
    setDate(dates[fileName1]);
    setRandomPicture(image);
  };

  useEffect(() => {
    loadImage();
  }, []);

  const madeByTextStyle = {
    fontFamily: "KidPrint, sans-serif",
    fontSize: "3.2vh",
    position: "absolute",
    top: "75%",
    left: "70%",
    transform: "translate(-50%, -50%)",
  };

  const arrowStyle1 = {
    width: "auto",
    position: "fixed",
    bottom: "14vh",
    right: "7vw",
    height: "7vh",
    borderRadius: "5px",
  };
  const arrowStyle2 = {
    width: "auto",
    position: "fixed",
    bottom: "15vh",
    right: "0vw",
    height: "7vh",
    borderRadius: "5px",
    transform: "rotate(45deg)",
  };
  const arrowStyle3 = {
    width: "auto",
    position: "fixed",
    bottom: "2vh",
    right: "12vw",
    height: "7vh",
    borderRadius: "5px",
    transform: "rotate(230deg) scaleX(-1)",
  };
  const ovalStyle = {
    width: "auto",
    height: "25vh",
  };

  const madeByStyle = {
    position: "fixed",
    bottom: 0,
    right: 0,
    textAlign: "center",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >

      {
        (
        orientation.type=="landscape-primary"

        )?
      (randomPicture)?
      <><Polaroid
        picture={randomPicture}
        description={date}
        isMobile={isTabletOrMobile}
      />
      <button
        style={{
          backgroundColor: "#663399",
          color: "#efe6ff",
          borderRadius: "1.5vh",
          border: "none",
          fontSize: "4vh",
          cursor: "pointer",
          boxShadow: "0 4px 6px rgba(66, 165, 245, 0.2)",
          transition: "background-color 0.3s ease-in-out",
          outline: "none",
          margin: "10px",
          display: "inline-block",
          fontWeight: "bold",
          textDecoration: "none",
          position: "absolute",
          top: "83vh",
          width: "20vw",
        }}
        onClick={() => {
          loadImage();
        }}
      >
        {nextImage[Math.floor(Math.random() * nextImage.length)]}
      </button>
      </>
      :
      <p>loading wait have some patience</p>
      
    :
    <p>TURN PHONE AROUND OTHERWISE ILL BEAT U UP</p>
    }
      <div style={madeByStyle}>
        <div style={madeByTextStyle}> Made by Purple Boi</div>
        <img src={purpleBoi} alt="Polaroid Picture" style={ovalStyle} />
      </div>
    </div>
  );
};

export default App;
