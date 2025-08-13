import React, { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'

function Experience() {

  useEffect(()=> {
    AOS.init({ duration: 600 });
   }, []);

  const experienceData = [
    {
      title: "Software Engineer(Intern/Tutor)",
      pow: "Innovatespace",
      duration: "April 2025 - Present",
      'description-one': "  Part time Code instructor and mentorship program at the software training academy ",
      'description-two': "Paticipated in building of one of the company's websites one of the company website, with the rest of the dev team.",
    },

    {
      title: "UI Designer(Intern)",
      pow: "Clarion Technologies",
      duration: "January 2025 -  April 2025",
      'description-one': " Participated in user researches, designing of low and high-fidelity prototypes for a series of web and mobile App projects. ",
      
    },
  ];
  return (
    <section className="text-textMedium dark:text-white relative bg-white dark:bg-darkBgLight" id="experience">
      {/* Floating Text 👇 */}
       <p className="hidden lg:block absolute top-[400px] -left-28 rotate-90 text-7xl font-semibold italic opacity-5">Experience</p>
      {/* Floating Text ☝ */}

      <div className="container mx-auto px-6 py-28">
        {/* <p className="">Experience</p> */}

        <p className="text-4xl pb-10 md:text-5xl text-textMedium dark:text-textLight">
          Experience
        </p>

        <div className="lg:px-48" data-aos = "fade-right">
          {experienceData.map((experience, index) => (
            <div key={index} className="border-t-[0.2px] border-borderColor py-5 lg:py-10">
              <div>
                <p className="sm:text-2xl">{experience.title}</p>
                <p className="text-end text-sm md:text-lg" style={{lineHeight: "0"}}>{`@${experience.pow}`}</p>
                <p className="py-4 text-textLight text-lg">{experience.duration}</p>
              </div>
              <ul>
                <li className="mb-3">{experience["description-one"]}</li>
                <li>{experience["description-two"]}</li>
                {/* ☝the square brackets is cos I wrapped the keys in qoutes */}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="text-base ">
              <p className="text-end"> <a href="" className="hover:text-mainBgColor text-xl "> <span className="text-black font-medium text-2xl">@</span>Innovatespace</a></p>
          </div>*/}

    </section>
  );
}

export default Experience;
