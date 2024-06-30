const Button = ({text ,Bgcolor , color ,icon}) => {
  return (
    <div>
      <button 
        style={{
          background:Bgcolor,
          padding: "10px 20px",
          borderRadius: "50px",
          outline:'none',
          border:'none',
          color:color,
          cursor:'pointer'
        }}
        
      >
        {!icon ? null: icon } {text}
      </button>
    </div>
  );
};

export default Button;
