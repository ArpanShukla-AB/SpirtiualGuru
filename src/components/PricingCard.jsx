import React from 'react';

const PricingCard = ({ plan, isHighlighted = false, isYearly = false, onUpgrade }) => {
  const getPlanDetails = () => {
    switch (plan) {
      case 'free':
        return {
          name: 'FREE',
          price: '₹0',
          monthlyPrice: '₹0',
          yearlyPrice: '₹0',
          features: [
            'Basic shloka access',
            'Limited AI chat (5/day)',
            'Mood-based suggestions',
            'Daily shloka'
          ],
          buttonText: 'Get Started',
          buttonColor: 'bg-gray-600 hover:bg-gray-700'
        };
      case 'pro':
        return {
          name: 'PRO',
          price: isYearly ? '₹1,990' : '₹199',
          monthlyPrice: '₹199',
          yearlyPrice: '₹1,990',
          features: [
            'Unlimited AI chat',
            'Advanced explanations',
            'Save insights',
            'Multi-language support',
            'Voice interaction (UI only)'
          ],
          buttonText: 'Upgrade Now',
          buttonColor: 'bg-gradient-to-r from-[#FF9933] to-[#FDE68A] hover:from-[#E67E25] hover:to-[#F5D547] text-gray-900 font-semibold'
        };
      case 'mentor':
        return {
          name: 'MENTOR',
          price: isYearly ? '₹4,990' : '₹499',
          monthlyPrice: '₹499',
          yearlyPrice: '₹4,990',
          features: [
            'Everything in Pro',
            'Personalized daily guidance',
            'Weekly reflection summary',
            'Mood tracking insights'
          ],
          buttonText: 'Start Mentorship',
          buttonColor: 'bg-gradient-to-r from-[#1E3A8A] to-blue-600 hover:from-blue-700 hover:to-blue-800'
        };
      default:
        return null;
    }
  };

  const planDetails = getPlanDetails();

  return (
    <div
      className={`relative bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 ${
        isHighlighted ? 'border-2 border-[#FF9933] transform scale-105' : 'border border-gray-200'
      }`}
    >
      {isHighlighted && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-[#FF9933] to-[#FDE68A] text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2 text-gray-900">{planDetails.name}</h3>
        <div className="mb-4">
          <span className="text-4xl font-bold text-gray-900">{planDetails.price}</span>
          {plan !== 'free' && (
            <span className="text-gray-600 text-sm">/{isYearly ? 'year' : 'month'}</span>
          )}
        </div>
        {plan !== 'free' && isYearly && (
          <div className="text-sm text-green-600 font-medium">
            Save ₹{plan === 'pro' ? '398' : '998'} per year
          </div>
        )}
      </div>

      <ul className="space-y-4 mb-8">
        {planDetails.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700 text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={() => onUpgrade(plan)}
        className={`w-full py-3 px-6 rounded-xl font-medium transition-all duration-300 ${planDetails.buttonColor}`}
      >
        {planDetails.buttonText}
      </button>
    </div>
  );
};

export default PricingCard;
