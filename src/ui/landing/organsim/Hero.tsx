import AnalyticsHighExpense from "./section/AnalyticsHighExpense";
import AnalyticsLineChart from "./section/AnalyticsLineChart";
import ProfitCard from "./section/ProfitCard";
import SimpleTable from "./section/SimpleTable";

const Hero = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-wrap ">
          <div className="flex flex-col gap-6 w-full lg:w-3/4 ">
            <AnalyticsLineChart />
            <div className="flex flex-wrap gap-6 md:mx-4 mx-3 justify-start">
              <SimpleTable />
              <SimpleTable />
            </div>
          </div>
          <div className="w-full lg:w-1/4 flex flex-col justify-center  gap-4 bg-[#262626] rounded-t-3xl rounded-b-3xl max-h-fit sticky top-12 my-3  ">
            <ProfitCard />
            <AnalyticsHighExpense />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
