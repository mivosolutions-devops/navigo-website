"use client";

import React from "react";
import TableOfContents from "../../components/TableOfContents";
import PrivacyPolicySection from "../../components/PrivacyPolicySection";
import { useNavigate } from "react-router-dom";
import { useRouter } from "next/navigation";

const privacyPolicySections = [
  {
    id: "general-information",
    title: "1. General Information",
    content: (
      <div>
        <p>Company Name and Contact Information:</p>
        <p>
          <strong>Company Name:</strong> NaviGO LTD
        </p>
        <p>
          <strong>Address:</strong> Rwanda, Kigali City, Kicukiro
        </p>
        <p>
          <strong>Email:</strong> contact@mivosolutions.com
        </p>
        <p>
          <strong>Phone:</strong> +250 790 603 658
        </p>
      </div>
    )
  },
  {
    id: "data-collection",
    title: "2. Data Collection",
    content: (
      <div>
        <p>
          <strong>Types of Data Collected:</strong>
        </p>
        <ul className='list-disc list-inside '>
          <li>
            Personal Identification Information: This includes your name, email
            address, and phone number, which are collected when you register or
            use our services.
          </li>
          <li>
            Real-Time Location: We collect your real-time location to provide
            navigation and traffic management services.
          </li>
          <li>
            Navigation History: We keep records of your past navigations to
            improve your user experience and provide personalized
            recommendations.
          </li>
          <li>
            IP Address: Your IP address is collected when you access our app or
            website to monitor and analyze usage and trends.
          </li>
          <li>
            Device Information: We collect information about the device you use,
            such as the type, operating system, and unique device identifiers,
            to optimize our services for your device.
          </li>
          <li>
            App Usage Data: This includes data on features accessed, the
            duration of use, and your interactions with the app, which help us
            understand user behavior and improve our services.
          </li>
          <li>
            Cookies and Tracking Technologies: We use cookies and similar
            tracking technologies to track activity on our app and website and
            hold certain information.
          </li>
        </ul>
      </div>
    )
  },
  {
    id: "data-usage",
    title: "3. Data Usage",
    content: (
      <div>
        <p>We use the collected data for the following purposes:</p>
        <ul className='list-disc list-inside'>
          <li>
            To Provide and Maintain the Service: Ensuring our app and website
            function correctly and efficiently.
          </li>
          <li>
            To Personalize User Experience: Customizing our services to better
            suit your preferences and usage patterns.
          </li>
          <li>
            To Process Transactions: Handling payments and other financial
            transactions securely.
          </li>
          <li>
            To Send Periodic Emails or Notifications: Informing you about
            updates, changes to our services, and other relevant information.
          </li>
          <li>
            To Improve Customer Service: Addressing your inquiries, concerns,
            and feedback effectively.
          </li>
          <li>
            For Marketing and Advertising Purposes: Sending you promotional
            materials and advertisements that may be of interest to you.
          </li>
          <li>
            For Analytics and Research: Analyzing usage data to improve our
            services and develop new features.
          </li>
          <li>
            For Legal Compliance: Complying with legal obligations and
            responding to legal requests.
          </li>
        </ul>
      </div>
    )
  },
  {
    id: "data-sharing",
    title: "4. Data Sharing",
    content: (
      <div>
        <p>We only share data with the following third party:</p>
        <ul className='list-disc list-inside'>
          <li>
            Rwanda National Police: Data is shared with the Rwanda National
            Police for their analytics and traffic management purposes.
          </li>
        </ul>
      </div>
    )
  },
  {
    id: "data-storage-security",
    title: "5. Data Storage and Security",
    content: (
      <div>
        <p>
          <strong>Data Storage:</strong> Data is stored on servers protected and
          monitored by the Rwandan government. These servers are equipped with
          advanced security measures to ensure data safety.
        </p>
        <p>
          <strong>Data Retention:</strong> All data that we receive is stored
          indefinitely unless a deletion request is made by the user. This
          allows us to provide continuous and personalized services to our
          users.
        </p>
        <p>
          <strong>Security Measures:</strong> We implement various security
          measures, including encryption, firewalls, and secure access
          protocols, to protect your data. Our servers are monitored
          continuously to detect and respond to potential security threats.
        </p>
      </div>
    )
  },
  {
    id: "user-rights",
    title: "6. User Rights",
    content: (
      <div>
        <p>
          <strong>Access and Correction:</strong> You have the right to access
          the personal data we hold about you and to request corrections if any
          information is inaccurate or incomplete. You can make such requests by
          contacting us at contact@mivosolutions.com.
        </p>
        <p>
          <strong>Data Deletion:</strong> You can request the deletion of your
          personal data at any time by contacting us at
          contact@mivosolutions.com. We will process your request promptly
          unless we are required by law to retain certain data.
        </p>
        <p>
          <strong>Data Portability:</strong> You have the right to request a
          copy of your personal data in a commonly used, machine-readable
          format. To make such a request, please contact us at
          contact@mivosolutions.com.
        </p>
        <p>
          <strong>Opt-Out:</strong> You can opt out of data collection or
          certain uses of your data by adjusting your account settings or
          contacting us directly. This includes opting out of marketing
          communications and certain tracking technologies.
        </p>
      </div>
    )
  },
  {
    id: "cookies-tracking",
    title: "7. Cookies and Tracking Technologies",
    content: (
      <div>
        <p>
          <strong>Cookies:</strong> We use cookies to store information about
          your preferences and to track your activity on our app and website.
          Cookies help us understand your usage patterns and improve your user
          experience.
        </p>
        <p>
          <strong>Tracking Technologies:</strong> In addition to cookies, we use
          web beacons, pixels, and similar tracking technologies to collect
          information about how you interact with our services. This data helps
          us analyze user behavior and optimize our services.
        </p>
      </div>
    )
  },
  {
    id: "children-privacy",
    title: "8. Children's Privacy",
    content: (
      <div>
        <p>
          Our services are intended for use by individuals aged 10 and older. We
          do not knowingly collect personal information from children under the
          age of 10. If we become aware that we have inadvertently collected
          data from a child under 10, we will take steps to delete that
          information promptly. Parents or guardians who believe that their
          child has provided us with personal information can contact us at
          contact@mivosolutions.com to request the deletion of such information.
        </p>
      </div>
    )
  },
  {
    id: "changes-policy",
    title: "9. Changes to the Privacy Policy",
    content: (
      <div>
        <p>
          We may update our Privacy Policy from time to time to reflect changes
          in our practices, legal requirements, or other factors. We will notify
          users of any significant changes by email and update the effective
          date at the top of this policy. We encourage you to review this
          Privacy Policy periodically to stay informed about how we are
          protecting your data.
        </p>
      </div>
    )
  },
  {
    id: "legal-compliance",
    title: "10. Legal Compliance",
    content: (
      <div>
        <p>
          This Privacy Policy is governed by the laws of Rwanda. Any disputes
          arising from this Privacy Policy or your use of our services will be
          resolved in accordance with the laws of Rwanda. If you are accessing
          our services from outside Rwanda, please be aware that your personal
          data will be transferred to, stored, and processed in Rwanda, where
          our servers are located. By using our services, you consent to this
          transfer and processing of your personal data.
        </p>
      </div>
    )
  },
  {
    id: "contact-information",
    title: "11. Contact Information",
    content: (
      <div>
        <p>
          If you have any questions or concerns about this Privacy Policy, or if
          you wish to exercise your rights regarding your personal data, please
          contact us:
        </p>
        <p>
          <strong>Email:</strong> contact@mivosolutions.com
        </p>
        <p>
          <strong>Phone:</strong> +250 790 603 658
        </p>
      </div>
    )
  }
];

const page = () => {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <div className=' w-full h-full pt-24 flex flex-col bg-[#F8FCFA]'>
      <button
        onClick={handleBackClick}
        className='absolute top-10 left-10 p-2 rounded-full justify-center items-center bg-[#00bd5e17] text-[#00bd5e] hover:bg-[#00bd5e] flex flex-row transition-all duration-200 hover:text-white'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='size-4'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M15.75 19.5 8.25 12l7.5-7.5'
          />
        </svg>
        Back
      </button>
      <div className='w-full  flex flex-col items-center justify-center '>
        <div className='flex flex-col items-center justify-center gap-3'>
          <img
            src='images/logodark.svg'
            alt='logo'
            width={1000}
            height={1000}
            className='w-[150px] max-sm:w-24'
          />
          <h1 className='text-6xl max-sm:text-4xl font-bold '>
            Privacy Policy
          </h1>
          <p className='text-xl max-sm:text-ld font-medium'>
            Last updated on 14th June 2024
          </p>
        </div>
        <div className='flex flex-row pt-20 px-36 max-lg:px-10 h-fit relative max-lg:flex-col-reverse items-end justify-between'>
          <div className='w-[70%] max-lg:w-full h-fit'>
            {privacyPolicySections.map((section) => (
              <PrivacyPolicySection
                key={section.id}
                id={section.id}
                title={section.title}
              >
                {section.content}
              </PrivacyPolicySection>
            ))}
          </div>
          <TableOfContents sections={privacyPolicySections} />
        </div>
      </div>
    </div>
  );
};

export default page;
