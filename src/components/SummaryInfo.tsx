import { memo } from "react"
import { Button } from "react-bootstrap";
import memoryIcon from "../assets/images/icon-memory.svg"
import reactionIcon from "../assets/images/icon-reaction.svg"
import verbalIcon from "../assets/images/icon-verbal.svg"
import visualIcon from "../assets/images/icon-visual.svg"

const SummaryInfo = () => {

  return (
    <div className="summary">

        <div className="summary-overall">
            <span className="summary-title">Your Result</span>
            <div className="total-score">
                <h2>76</h2>
                <h3>of 100</h3>
            </div>
            <h2 className="summary-status">Great</h2>
            <p>
                You scored higher than 65% of the
                people who have taken these tests.
            </p>
        </div>

        <div className="summary-details">
            <h4>Summary</h4>
            {summaryDetailsInfo?.length && (
                summaryDetailsInfo?.map((item: any, index: number) => (
                    <div 
                        className="summary-card" 
                        key={index}
                        style={{
                            backgroundColor: item?.backgroundColor,
                        }} 
                    >
                        <img className="icon" src={item?.icon} alt="icons" />
                        <span className="summary-type" style={{ color: item?.color}}>{item?.typeName} </span>
                        <span className="current-count">
                            <strong>{item?.count}</strong>
                            <span className="total-percentage"> / 100</span>
                        </span>
                    </div>
                ))
            )}
            <Button variant="secondary" className="request-continue">
                Continue
            </Button>
        </div>

    </div>

  );

};

export default memo (SummaryInfo);

export const summaryDetailsInfo = [
    { typeName: "Reaction", count: "80", backgroundColor: "#fff6f5", color: "rgb(255 85 85)", icon: reactionIcon },
    { typeName: "Memory", count: "92", backgroundColor: "#fffbf2", color: "rgb(255 191 70)", icon: memoryIcon },
    { typeName: "Verbal", count: "61", backgroundColor: "#f2fafa", color: "rgb(114 193 178)", icon:  verbalIcon },
    { typeName: "Visual", count: "73", backgroundColor: "#f3f3fd", color: "rgb(96 102 177)", icon: visualIcon },
];