import React from "react"
import "./LoadingScreen.css"
import Spinner from "../../Assets/react-spinner_bean-eater-0.8s-364px.gif"

const LoadingScreen = () => {
  return (
    <>
      <div className="loading-container">
        <img
          src={Spinner}
          className="loading"
          alt="loading-spinner-animation"
        />
      </div>
    </>
  )
}

export default LoadingScreen
