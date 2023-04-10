const InputDetail = () => {
  return (
    <div className="w-full font-bold">
      <div className="max-w-5xl mx-auto p-2">
        <label className="text-2xl">DETAIL</label>
        <textarea
          name=" text"
          id="text"
          rows={10}
          placeholder=" Text"
          className="text-5 border border-black w-full resize-none h-[208px] rounded-[10px] px-4 py-2 placeholder:text-black focus:placeholder-white placeholder:absolute placeholder:text-2xl"
        ></textarea>
      </div>
    </div>
  );
};
export default InputDetail;