import React from 'react';
import Header from './Header';
import Question from './Question';
import { useState } from 'react';
import { QuestionMarkCircleIcon} from "@heroicons/react/20/solid";
import { Fade } from 'react-awesome-reveal';

const Faq = () => {
    const [questions] = useState([
        {
          question: "How does NaviGO's Intelligent Traffic Management System actually work?",
          answer:
            "NaviGO's system uses advanced sensors and cameras to monitor traffic density in real-time across Kigali's roads. It tracks vehicle properties, detects emergency vehicles, and even counts pedestrians at intersections. Our proprietary algorithm calculates optimal traffic light timing and automatically prioritizes ambulances and fire trucks, ensuring they reach their destinations faster while keeping regular traffic flowing smoothly.",
          panel: "panel1",
        },
        {
          question:
            "Can I track buses in real-time with NaviGO? How accurate is the bus tracking?",
          answer:
            "Yes! NaviGO Mobile App provides real-time bus tracking for routes across Kigali. You can see exactly where your bus is, check available seats before it arrives, and get accurate arrival time estimates. Bus drivers update seat availability and report issues in real-time, so you'll know if the Nyabugogo–Kanombe bus is running late or if there are seats available. The tracking is updated every few seconds for maximum accuracy.",
          panel: "panel2",
        },
        {
          question:
            "How does NaviGO Maps differ from Google Maps or other navigation apps?",
          answer:
            "NaviGO Maps is our custom-built mapping platform specifically designed for Rwanda's road network. Unlike generic mapping services, it integrates directly with our Traffic Management System, giving you access to real-time traffic data that other apps don't have. It knows about local shortcuts like 'kwa Mirongo' and understands Kigali's unique traffic patterns. Plus, it powers all NaviGO features from bus tracking to emergency vehicle prioritization all in one seamless experience.",
          panel: "panel3",
        },
        {
          question:
            "Does NaviGO work in both English and Kinyarwanda?",
          answer:
            "Absolutely! NaviGO is designed for Rwanda, so we support both languages. You'll receive notifications like 'Imodoka iri hafi kugera' (The bus is arriving soon) in Kinyarwanda, while route suggestions mix English technical terms with Kinyarwanda place names naturally. This bilingual approach makes NaviGO accessible to everyone, whether you're more comfortable with English, Kinyarwanda, or both.",
          panel: "panel4",
        },
        {
          question:
            "How does NaviGO help emergency vehicles get through traffic faster?",
          answer:
            "Our Traffic Management System automatically detects emergency vehicles (ambulances, fire trucks) using advanced recognition technology. When detected, the system immediately adjusts traffic light timing at intersections to give them priority passage. This means ambulances can reach hospitals faster, potentially saving lives. Regular traffic is rerouted in real-time to make way, and you'll get notifications like 'Fata indi route, hari umubyigano imbere' (Take another route, there's congestion ahead) to help you avoid delays.",
          panel: "panel5",
        },
        {
          question:
            "Can bus companies use NaviGO to manage their fleet?",
          answer:
            "Yes! NaviGO offers a comprehensive Bus Tracking Management System for transport companies. Bus operators can register drivers, track their fleet in real-time, and receive reports on seat availability and route performance. Drivers can update seat counts, notify passengers when journeys start, and report issues instantly. This helps companies optimize routes, improve customer satisfaction, and reduce operational costs.",
          panel: "panel6",
        },
        {
          question:
            "Is NaviGO free to use? What features are available?",
          answer:
            "NaviGO Mobile App is free for individual users! You get access to real-time bus tracking, intelligent route planning, traffic alerts, and our custom NaviGO Maps. For bus companies and organizations, we offer premium dashboard features with advanced analytics, fleet management tools, and detailed reporting. Check our subscription plans for more details on enterprise features.",
          panel: "panel7",
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
                <Header title='FAQs' icon={<QuestionMarkCircleIcon className="fill-[#059669] w-6 h-6 max-sm:w-4 max-sm:h-4"/>}/>
                <h1 className='text-[#001209] font-bold text-5xl text-center max-md:text-4xl max-sm:text-3xl '>Maybe Your <span className='text-[#059669]'>Question</span> Is One Of These</h1>
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
