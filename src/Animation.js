import React from "react";
import GSAP from "react-gsap-enhancer";
import { TimelineMax } from "gsap";
import ImgShadow from "./_assets/obj_shadow.png";
import ImgText from "./_assets/obj_text.png";
import Filter from "react-css-filter";

class Shadow extends React.Component {
  constructor(props) {
    super(props);
    this.myCard1 = null;
  }

  componentDidMount() {
    new TimelineMax().from(this.myCard1, 1, { y: -40, opacity: 0 });
    new TimelineMax().from(this.myCard2, 1, { opacity: 0 });
  }

  render() {
    return (
      <Filter effects={{ Saturate: "170%" }}>
        <div style={styles.Box}>
          <img
            style={styles.text}
            src={ImgText}
            ref={(div) => (this.myCard1 = div)}
          />
          <img
            style={styles.shadow}
            src={ImgShadow}
            ref={(div) => (this.myCard2 = div)}
          />
        </div>
      </Filter>
    );
  }
}

const styles = {
  shadow: {
    top: "50%",
    left: "50%",
    transform: "translateY(-50%) translateX(-50%)",
    bottom: "-225%",
    margin: "auto",
    width: "350%",
    zIndex: 1,
    opacity: 0.6,
    position: "absolute"
  },
  text: {
    left: "10%",
    right: "0",
    top: "0",
    bottom: "0",
    margin: "auto",
    width: "100%",
    position: "absolute",
    zIndex: 2
  },
  Box: {
    width: "400px",
    height: "400px",
    position: "relative"
  }
};

export default GSAP()(Shadow);
