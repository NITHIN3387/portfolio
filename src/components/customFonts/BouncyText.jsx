const BouncyText = ({ children, className }) => {
  return (
    <div className="ps-5">
      {children.split("").map((letter, i) =>
        letter !== " " ? (
          <span key={i} className={className + " bounce"}>
            {letter}
          </span>
        ) : (
          <span key={i} className={className}>
            {" "}
          </span>
        )
      )}
    </div>
  );
};

export default BouncyText;
