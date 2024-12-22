import React from "react";
import { TiTick } from "react-icons/ti";

const Pricing = () => {
  const plans = [
    {
      id: 1,
      type: "SILVER",
      fee: "$50",
      duration: "/month",
      offers: [
        'No Discount',
        'Optimize hashtags',
        'Chat support',
        'Own analytics platform',
        'All limited links',
        'Component Library',
        'Design Style',
        'Ads Banner Free',
        'Basic Support',
        'No Discount'
      ],
      button: "Choose plan",
    },
    {
      id: 2,
      type: "GOLD",
      fee: "$100",
      duration: "/month",
      popular: true,
      offers: [
        'No Discount',
        'Optimize hashtags',
        'Chat support',
        'Own analytics platform',
        'All limited links',
        'Component Library',
        'Design Style',
        'Ads Banner Free',
        'Basic Support',
        'No Discount'
      ],
      button: "Choose plan",
    },
    {
      id: 3,
      type: "PREMIUM",
      fee: "$150",
      duration: "/month",
      offers: [
        'Unlimited users',
        'Optimize hashtags',
        'Chat support',
        'Own analytics platform',
        'All limited links',
        'Component Library',
        'Design Style',
        'Ads Banner Free',
        'Basic Support',
        'No Discount'
      ],
      button: "Choose plan",
    },
  ];

  return (
    <section id="pricing" className="bg-[#0D1849] text-white">
      <div className="flex flex-col items-center gap-8 py-20">
        <div className="flex flex-col items-center gap-6 px-4">
          <h2 className="text-xl md:text-5xl font-bold">Pricing Plans</h2>
          <p className="text-xs md:text-sm text-center">
            Coca landing page UI Kit no credit card required. All plans come with{' '}
            <br className="hidden md:block" /> a free, 14 day trial of our Premium features.
          </p>
          
          <div className="inline-flex rounded-lg overflow-hidden">
            <button className="bg-[#2A85FF] px-4 py-2 hover:bg-white hover:text-[#2A85FF] transition-colors">
              Monthly
            </button>
            <button className="bg-white text-[#2A85FF] px-4 py-2 hover:bg-[#2A85FF] hover:text-white transition-colors">
              Yearly
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 px-4 pt-12">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="relative bg-[#0D1849] w-full md:w-64 rounded-3xl border border-white transition-all duration-300 hover:-translate-y-6 hover:border-b-4"
            >
              {plan.popular && (
                <div className="absolute -top-6 inset-x-0 mx-auto w-32 bg-[#FFD88D] text-black rounded-full py-3 text-center text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <div className="p-6 space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-[#2A85FF]">
                    {plan.type}
                  </h3>
                  <div className="mt-2">
                    <span className="text-3xl font-bold">{plan.fee}</span>
                    <span className="text-slate-400">{plan.duration}</span>
                  </div>
                </div>
                <div className="border-t border-white w-full"></div>
                <ul className="space-y-3">
                  {plan.offers.map((offer, index) => (
                    <li key={index} className="flex items-center gap-2">
                     <div className="p-[2px] rounded-full bg-[#2A85FF]"><TiTick className="w-3 h-3 text-white" /></div> 
                      <span className="text-sm text-slate-300">{offer}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-auto py-2 px-5 bg-white text-[#2A85FF] text- rounded-xl hover:bg-opacity-10 transition-colors">
                  {plan.button}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;