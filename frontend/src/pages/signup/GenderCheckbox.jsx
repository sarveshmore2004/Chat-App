const GenderCheckbox = () => {
  return (
    <div className="flex p-1 ">
      <div className="form-control ">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text text-base">Male</span>
          <input type="checkbox" className="checkbox" />
        </label>
      </div>
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text text-base">Female</span>
          <input type="checkbox" className="checkbox" />
        </label>
      </div>
    </div>
  );
};
export default GenderCheckbox;
