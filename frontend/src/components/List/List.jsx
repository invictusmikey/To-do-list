import { Buttons } from "../Buttons/Buttons";

export const List = ({ texto }) => {
  return (
    <div className="d-flex justify-content-center border border-primary rounded p-3 my-2 w-50">
      <p className="text-center mb-0 ">
        {texto}
      </p>
      <Buttons  status={"pendiente"}/>

    </div>
  );
};

