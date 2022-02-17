import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Aboutus, Text } from "../css/aboutstyle";

const About = () => {
  return (
    <>
      <Navbar />
      <Footer />
      <Aboutus>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          condimentum eros erat, ut vestibulum purus suscipit non. Nulla
          facilisi. Pellentesque pellentesque nibh in libero sollicitudin, ac
          pulvinar lorem venenatis. Duis bibendum semper est porttitor faucibus.
          Suspendisse blandit, nunc sit amet ultricies finibus, ligula sapien
          semper ipsum, id molestie lacus metus sit amet quam. Aenean pharetra
          urna et arcu porttitor, sit amet ullamcorper dui eleifend. In ut velit
          lacus. Sed nec massa ut diam commodo volutpat in et justo. Interdum et
          malesuada fames ac ante ipsum primis in faucibus. Fusce congue, lacus
          vel facilisis viverra, ligula dolor consectetur quam, ultricies
          faucibus enim libero a nisi. In id libero id tellus aliquam placerat
          sodales vel sem. Aenean vitae facilisis nisl. Mauris et aliquet lacus,
          at porta turpis.
        </Text>
      </Aboutus>
    </>
  );
};
export default About;
