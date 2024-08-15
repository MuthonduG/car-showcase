import Dateselection from "./Dateselection";
import Hoursselection from "./Hoursselection";
import Locationselection from "./Locationselection";

export default function Searchmobile() {
  return (
    <div className="xl:hidden font-medium">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-4">
          
          <Locationselection/>
          <Dateselection/>
          <Hoursselection/>

          <div className="flex items-center px-6">
            <button className="btn btn-sm btn-accent w-[164px] mx-auto">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  )
};
