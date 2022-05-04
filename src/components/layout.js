import StarfieldAnimation from "react-starfield-animation";
import "../styles/home.css";

export default function Home({ children }) {
  return (
    <div class="home-root">
      <StarfieldAnimation
        numParticles={500}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      />
      <main>{children}</main>
    </div>
  );
}
