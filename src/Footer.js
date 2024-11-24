import AppNav from "./AppNav";

const Footer = () => {
  return (
    <div>
      <AppNav />
      <div>
        <div>
          <p>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <p>Copyright {new Date().getFullYear()} All Rights Reserved</p>
        </div>
        <div>icons</div>
      </div>
    </div>
  );
};
export default Footer;
