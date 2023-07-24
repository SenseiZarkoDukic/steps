import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  // const [test, setTest] = useState({ name: "Zarko" });

  const handlePrevious = () => {
    // step > 1 && setStep(step - 1);
    if (step > 1) setStep((s) => s - 1);
  };
  const handleNext = () => {
    // step < 3 && setStep(step + 1);
    // step = step + 1;
    if (step < 3) {
      setStep((s) => s + 1);
    }

    // BAD PRACTICE
    // test.name = "Fred";
    // CORRECT WAY!
    // setTest({ name: "Fred" });
  };

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage step={step}>
            {messages[step - 1]}
            <Button
              bgColor="#e7e7e7"
              textColor="#333"
              onClick={() => alert(`Learn how to ${messages[step - 1]}`)}
            >
              Learn how
            </Button>
          </StepMessage>
          <div className="buttons">
            <Button
              textColor={"white"}
              bgColor={"#7950f2"}
              onClick={handlePrevious}
            >
              <span>👈</span> Previous
            </Button>
            <Button
              textColor={"white"}
              bgColor={"#7950f2"}
              onClick={handleNext}
            >
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
      <StepMessage step={1}>
        <p>Pass in content</p>
        <p>✌️</p>
      </StepMessage>
      <StepMessage step={2}>
        <p>Read children prop</p>
        <p>😎</p>
      </StepMessage>
    </>
  );
}

function StepMessage({ step, children }) {
  return (
    <p className="message">
      <h3>Step {step}</h3>
      {children}
    </p>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
