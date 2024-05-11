const GenderCheckbox = ({onCheckboxChange  , selectedGender}) => {
  return (
    <div className="flex p-1 ">
      <div className="form-control ">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text text-base">Male</span>
          <input type="checkbox" 
          className="checkbox" 
          checked = {selectedGender === "male"} 
          onChange={()=>onCheckboxChange("male")}/>
        </label>
      </div>
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text text-base">Female</span>
          <input type="checkbox" 
          className="checkbox" 
          checked = {selectedGender === "female"}
          onChange={()=>onCheckboxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};
export default GenderCheckbox;
