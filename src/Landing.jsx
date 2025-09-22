import LeftPanel from "./Landing/LeftPanel";
import RightPanel from "./Landing/RightPanel";

export default function Landing() {
  return (
    <div className="text-center justify-content-center align-items-center">
      <div className="pt-4 bg-info pb-2">
          <h1 className="text-dark">Luc Ferrara</h1>
      </div>
      <div className="d-flex flex-row pt-4 px-4">
        <div className="row">
          <div className="col-7">
            <LeftPanel />
          </div>
          <div className="col-5 pb-4 mb-4">
            <RightPanel />
          </div>
        </div>
      </div>
    </div>
  );
}
