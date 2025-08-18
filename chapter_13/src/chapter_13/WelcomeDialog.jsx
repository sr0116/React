import FancyBorder from "./FancyBorder";


function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title"> 어서오세요 </h1>
      <p className="Dialog-message">
        우리 사이트에 방문 하신 것을 환영해요!
      </p>
    </FancyBorder>
  );
}

export default WelcomeDialog;