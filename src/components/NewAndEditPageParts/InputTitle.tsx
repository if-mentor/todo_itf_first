type InputTitleProps = {
  labelName: string; 
}

const InputTitle: React.FC<InputTitleProps> = ({labelName}) => {
  return (
    <div className="w-full font-bold">
      <div className="max-w-5xl mx-auto p-2">
        <label className="text-2xl">{labelName}</label>
        <input
          type="text"
          placeholder="Text"
          className="text-5 border border-black w-full h-[71px] rounded-[10px] px-4 py-2 placeholder:text-black focus:placeholder:text-white  placeholder:absolute placeholder:text-2xl"
        />
      </div>
    </div>
  );
};

export default InputTitle;
