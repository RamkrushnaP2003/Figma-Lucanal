import RightTop from "./RightTop";
import RightBottom from "./RightBottom";

// Right.js
function RightWidget() {
  return (
    <div className="rightWidget">
        <RightTop/>
        <hr style={{ width: '614px', height: '4px', backgroundColor: '#4A4E54',borderRadius: "50rem", margin: "1.5rem 0 1.5rem 75px", boxShadow: "2px 2px 5px black"}} />
        <RightBottom/>
        <hr style={{ width: '614px', height: '4px', backgroundColor: '#4A4E54',borderRadius: "50rem", margin: "1.5rem 0 1.5rem 75px", boxShadow: "2px 2px 5px black"}} />
    </div>
  );
}

export { RightWidget };
