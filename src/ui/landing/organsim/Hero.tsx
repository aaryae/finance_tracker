import AnalyticsHighExpense from "./section/heroAnalytics/AnalyticsHighExpense";
import AnalyticsLineChart from "./section/heroAnalytics/AnalyticsLineChart";
import ProfitCard from "./section/heroAnalytics/ProfitCard";
import SimpleTable from "./section/incomeTable/IncomeTable";

const Hero = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-wrap  gap-1 justify-center ">
          <div className="flex flex-col gap-3 w-fit justify-center items-center mx-6  ">
            <AnalyticsLineChart />
            <div className="flex flex-wrap gap-3 md:mx-4 mx-3 justify-center w-full items-center">
              <SimpleTable />
              <SimpleTable />
            </div>
          </div>
          <div className="w-full lg:w-1/4 flex flex-col justify-center gap-4 bg-[#262626] rounded-t-3xl rounded-b-3xl max-h-fit sticky top-12 my-3  mx-7">
            <ProfitCard />
            <AnalyticsHighExpense />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
