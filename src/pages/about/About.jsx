import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3.jpg";
import "./about.css";

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo laborum
        praesentium itaque laudantium non quos facilis voluptates voluptatibus
        rerum dolore.
      </Header>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Story Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum at
              aut libero tempore ut, officia consectetur! Et illum optio earum
              blanditiis ipsam maxime inventore doloremque odit nisi
              perferendis. Alias, tenetur!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              pariatur nobis placeat quae accusantium molestias dolorem maxime
              fugiat? Consequatur, nemo.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatum, laudantium.
            </p>
          </div>
        </div>
      </section>

      <section className="about__Vision">
        <div className="container about__Vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum at
              aut libero tempore ut, officia consectetur! Et illum optio earum
              blanditiis ipsam maxime inventore doloremque odit nisi
              perferendis. Alias, tenetur!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatum, laudantium.
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Our Vision Image" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our Mission Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum at
              aut libero tempore ut, officia consectetur! Et illum optio earum
              blanditiis ipsam maxime inventore doloremque odit nisi
              perferendis. Alias, tenetur!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              pariatur nobis placeat quae accusantium molestias dolorem maxime
              fugiat? Consequatur, nemo.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatum, laudantium.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
