const FAQs = ({faq}) => {
    return ( <div className="space-y-4">
    <details className="group [&_summary::-webkit-details-marker]:hidden py-2" close>
      <summary
        className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-green-300"
      >
        <h2 className="font-medium text-center text-grey-700">
          {faq.question}
        </h2>
  
        <svg
          className="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </summary>
  
      <p className="p-4 leading-relaxed text-gray-700 bg-white border border-gray-100 shadow-l rounded-xl">
        {faq.answer}
      </p>
    </details>
  
    
  </div>
  );
}
 
export default FAQs;