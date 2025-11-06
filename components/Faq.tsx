import React from 'react';
import Header from './Header';
import Question from './Question';
import { useState } from 'react';
import { QuestionMarkCircleIcon} from "@heroicons/react/20/solid";
import { Fade } from 'react-awesome-reveal';

const Faq = () => {
    const [questions] = useState([
        {
          question: "What does the traffic congestion management application do?",
          answer:
            "Our application utilizes real-time data and advanced algorithms to monitor traffic flow, identify congestion points, and suggest optimal routes for users to navigate efficiently and avoid delays.",
          panel: "panel1",
        },
        {
          question:
            "How accurate is the traffic information provided by the application?",
          answer:
            "We source data from various reliable providers and leverage advanced machine learning techniques to ensure the accuracy of the information provided. While we strive for the highest accuracy, certain unforeseen circumstances can affect real-time data, leading to occasional discrepancies.",
          panel: "panel2",
        },
        {
          question:
            "Does the application consider alternative transportation modes, such as public transport or biking, to alleviate traffic congestion?",
          answer:
            "Yes, our application is designed to promote multi-modal transportation solutions. It not only suggests alternate routes for cars but also integrates information on public transportation schedules, bike lanes, and shared mobility options to offer users comprehensive, congestion-alleviating choices.",
          panel: "panel3",
        },
        {
          question:
            "How does the application handle peak traffic hours and special events that may cause increased congestion?",
          answer:
            "Our application is equipped with predictive analytics that anticipates traffic patterns during peak hours and special events. By analyzing historical data and live updates, it provides users with timely alerts, alternate route suggestions, and tailored recommendations to navigate through congested areas efficiently.",
          panel: "panel4",
        },
        {
          question:
            "How does the application prioritize user privacy and data security?",
          answer:
            "We prioritize user privacy and data security as fundamental pillars of our service. Our application employs industry-standard encryption techniques to safeguard all user data. We strictly adhere to data protection regulations and do not compromise on the confidentiality of personal information. User data is only used to enhance the application's functionality and improve overall user experience.",
          panel: "panel5",
        },
    ]);
    
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange = (panel: string) => (isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className='flex flex-col items-center relative pt-20 pb-20 gap-10 lg:px-[20%] px-6 overflow-hidden bg-[#F2FAF6] '>
            <img src="/images/gradient.svg" alt="zigs" className='absolute w-2/5 -top-1/3 -left-1/4 z-30'/>
            <img src="/images/gradient.svg" alt="zigs" className='absolute w-2/5 -bottom-1/3 -right-1/4 z-30'/>
            <Fade>
               <div className='flex flex-col items-center justify-center gap-10 w-full max-sm:gap-6'>
                <Header title='FAQs' icon={<QuestionMarkCircleIcon className="fill-[#00BD5E] w-6 h-6 max-sm:w-4 max-sm:h-4"/>}/>
                <h1 className='text-[#001209] font-bold text-5xl text-center max-md:text-4xl max-sm:text-3xl '>Maybe Your <span className='text-[#00BD5E]'>Question</span> Is One Of These</h1>
                <p className='text-md text-[#001209]/70 text-center md:text-md max-sm:text-xs lg:text-center'>Find answers to commonly asked questions about our products and services here. Can't find what you're looking for? Feel free to reach out to us for personalized assistance.</p>
            </div>
            </Fade>
           
            <div className="flex flex-wrap justify-center gap-5 w-full">
                {questions.map((question, idx) => (
                    <Question
                        key={idx}
                        expanded={expanded === question.panel}
                        handleChange={handleChange(question.panel)}
                        question={question.question}
                        panel={question.panel}
                        answer={question.answer}
                    />
                ))}
            </div>
        </div>
    );
}

export default Faq;
