import Navigation from "../navigation";

const DateInput = () => {
  return (
    <div>
      <Navigation />

      <label style={{ display: "block" }}>Enter Date</label>
      <input type="text" placeholder="DD/MM/YYYY" />
    </div>
  );
};

export default DateInput;
