const Button = ({ value }: { value: string }) => {
  return (
    <button className="px-[26px] py-[6px] border-1 bg-black text-white hover:text-black hover:bg-white transition-all mt-6 cursor-pointer">
      {value}
    </button>
  );
};

export default Button;
