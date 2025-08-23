import React,{useState} from "react";

function PriceJump({ data }) {
  const datas = data;
  const [selectedPlan, setSelectedPlan] = useState("Basic");

  return (
    <div className=" ">
      <div className="flex flex-col items-center justify-center  bg-gray-100 h-[15rem] w-full">
        {/* Button Group */}
        <div className="grid grid-cols-3 gap-x-1  bg-gray-700   shadow-lg w-full ">
          {["Basic", "Advanced", "Premium"].map((plan) => (
            <button
              key={plan}
              onClick={() => setSelectedPlan(plan)}
              className={`px-2 py-2 text-white transition-all text-sm duration-300 ${
                selectedPlan === plan
                  ? "bg-blue-500"
                  : "bg-gray-500 hover:bg-gray-400"
              }`}
            >
              {plan}
            </button>
          ))}
        </div>

        {/* Pricing Display */}
        <div className="my-6 bg-gray-200 py-6 rounded-lg shadow-md  text-center  ">
          {datas.plans
            .filter((data) => data.planType === selectedPlan)
            .map((plan, idx) => (
              <div key={idx} className="space-y-2 px-3 -400 mx-5" >
                <h2 className="text-xl font-semibold text-gray-800">
                  {plan.planType} Plan
                </h2>
                <p className="text-lg font-bold text-blue-600">
                  {plan.price} / {plan.priceType}
                </p>
                <p className="text-gray-600">{plan.additional}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default PriceJump;
