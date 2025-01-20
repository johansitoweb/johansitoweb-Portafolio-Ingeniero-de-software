import { EXPERIENCES } from "@/content/experiences"

const Timeline = () => {
  return (
    <section className="flex flex-col max-w-[800px]">
      <div className="relative border-l-4 border-slate-700 ml-6">
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="relative mb-10 ml-6">
            <div className="absolute w-4 h-4 bg-slate-700 rounded-full -left-[34px]  top-1.5"></div>
            <p className="text-sm text-gray-500">{experience.date}</p>
            <h3 className="text-xl font-semibold">{experience.jobTitle}</h3>
            <h4 className="text-md text-gray-700 font-medium">
              {experience.company}
            </h4>
            <p className="text-gray-600 mt-2">{experience.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Timeline
