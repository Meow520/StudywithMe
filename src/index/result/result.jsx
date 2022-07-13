import "../../styles/App.css";
import StudyCompletedList from "./studycompletedlist";
import Twitter from "../../images/twitter_logo.png";


const Result = ({
  studyList,
  setIsResult,
  setIsStopWatch,
  sumh,
  summin,
  setStudyList,
}) => {
  const handleReset = () => {
    setStudyList([]);
    setIsResult(false);
    setIsStopWatch(false);
  };

  return (
    <div className="text-center py-10">
      <h2 className="text-6xl">Well done!</h2>

      <p className="text-6xl">
        Time : <span>{sumh}</span> h <span>{summin}</span> m{" "}
      </p>

      <StudyCompletedList studyList={studyList} />

      <div className="object-center my-10">
            <a
              href={`http://twitter.com/share?url=study-with-me-beta.vercel.app&text=今日は${sumh}時間${summin}分勉強しました。%0A%0A${studyList}&hashtags=StudywithMe`}
              target="_blank"
            >
              <img src={Twitter} className="mx-auto max-h-8 max-w-md"></img>
            </a>
          </div>
      <div className="py-5">
        <button
          onClick={handleReset}
          className="bg-emerald-600 hover:bg-emerald-400 px-16 py-4 text-emerald-50 text-2xl rounded-lg mx-3"
        >
          Reset
        </button>
      </div>
      
    </div>
  );
};

export default Result;
