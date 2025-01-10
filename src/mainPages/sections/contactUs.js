import Footer from "../../generals/footer";

const ContactUs = () => {
  return (
    <main>
      <section>
        <div>
          <h1>Contact Us</h1>
          <p>
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </p>
        </div>
        <div>
          <label>Name</label>
          <input type="text" />
          <label>Email Address</label>
          <input type="text" />
          <label>Phone</label>
          <input type="number" />
          <label>Your Message</label>
          <input type="text" />
        </div>
      </section>
      <Footer />
    </main>
  );
};
