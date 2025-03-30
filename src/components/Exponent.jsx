export default function Exponent({ num, exponent }) {
  const turnToExp = () => {

    let expo = exponent;

    switch (expo) {
      case 2:
        expo = "²";
        break;
      case 3:
        expo = "³";
        break;
      case 4:
        expo = "⁴";
        break;
      case 5:
        expo = "⁵";
        break;
      case 6:
        expo = "⁶";
        break;
    }

    return expo
  };

  const displayCalc = () => {
    let calc = num.toString();

    for (let i = 1; i < exponent; i++) {
      calc += ` * ${num.toString()} `;
    }
    return calc;
  };

  const result = num ** exponent;

  return (
    <>
      <div className="exponent-counter-container">
        <p className="exponent-label">n{turnToExp()}</p>
        <p className="exponent-result">{displayCalc()}= <span className="total">{result}</span>
        </p>
      </div>
      ;
    </>
  );
}
