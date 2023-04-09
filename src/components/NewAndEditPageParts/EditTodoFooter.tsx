import { Button } from "../Button";

export const EditTodoFooter = () => {
  return (
    <div className="w-full font-bold">
      <div className="text-[28px] max-w-5xl mx-auto p-2 flex justify-between">
        <div className="colums-1 mr-5">
          <h4 className="text-base">Create</h4>
          <p className="text-xl">2020-11-8-18:55</p>
        </div>
        <div className="colums-1">
          <h4 className="text-base">Detail</h4>
          <p className="text-xl">2021-12-24 18:55</p>
        </div>
        <div className="mt-2 ml-auto">
          <Button href={"/"} backgroundColor="#25855A" fontColor="white">
            UPDATE
          </Button>
        </div>
      </div>
    </div>
  );
};
