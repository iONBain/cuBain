const getCurrentScroll = () => {
  return window.pageYOffset;
};

const ScrollHeaderAnimate = () => {
  var shrinkHeader = 300;
  const scrollLocation = getCurrentScroll();
  // console.log(scrollLocation);
  // console.log(scrollLocation > shrinkHeader, "yay");

//   window.scroll(() => {
//       console.log("asas")
//     });
    
    return null;
};
window.addEventListener("onScroll",ScrollHeaderAnimate())

export default ScrollHeaderAnimate;
