const Overlay = ({ addToCarts, showThanks }) => {
  const onHide = () => {
    addToCarts(false);
    showThanks(false);
  };
  return <div onClick={onHide} className="overly"></div>;
};
export default Overlay;
