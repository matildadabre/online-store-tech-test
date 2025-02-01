const footerStyles = {
  container:
    "flex justify-between items-center mx-[19.5px] h-[65px] border-t border-[#E5E7EB]",
  text: "w-full font-medium text-center text-sm text-[#707784]",
};

const Footer = () => {
  return (
    <footer>
      <div className={footerStyles.container}>
        <div className={footerStyles.text}>The Fake Store Copyright 2024</div>
      </div>
    </footer>
  );
};

export default Footer;
