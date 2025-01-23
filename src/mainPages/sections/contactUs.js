import Countries from "../../generals/countries";
import Footer from "../../generals/footer";
import AppNav from "../navigations/appNavigation";

const ContactUs = () => {
  return (
    <main className="contact">
      <AppNav />
      <section className="section1">
        <div>
          <div className="det">
            <h1>Contact Us</h1>
            <p>
              Ready to take it to the next level? Let’s talk about your project
              or idea and find out how we can help your business grow. If you
              are looking for unique digital experiences that’s relatable to
              your users, drop us a line.
            </p>
          </div>
        </div>
        <div className="login">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email Address" />
          <input type="number" placeholder="Number" />
          <input type="text" placeholder="Your Message" />
        </div>
      </section>
      <Countries />
      <Footer />
    </main>
  );
};
export default ContactUs;
