interface Props {
  setInstructions: (instructions: string) => void;
}

export default function Instructions({ setInstructions }: Props) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInstructions(event.target.value); // Update the inputValue state with the new input value
  };

  return (
    <div className="card" style={{ padding: "10px" }}>
      <div className="card-header">Instructions</div>
      <div className="card-body overflow-auto"></div>
      <input
        type="text"
        className="form-control"
        placeholder="Enter some instructions for the AI"
        aria-label="Enter some instructions for the AI"
        aria-describedby="basic-addon1"
        onChange={handleInputChange}
      ></input>
    </div>
  );
}
