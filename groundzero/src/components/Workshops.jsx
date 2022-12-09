import React from 'react'
import { workshops } from '../constants'

const Workshops = () => {
  return (
    <div className="grid place-items-center text-white px-40">
      <div className="heading">
        Pre-Ground Zero Workshops
      </div>
      <div className="font-light text-2xl pb-12 text-justify">
        Lorem ipsum dolor sit amet. Qui nihil nesciunt et minus minus id veniam corporis et explicabo aperiam sed quia dolore aut quod soluta.
      </div>
      <div className="grid grid-cols-2 gap-x-6 gap-y-10">
        {workshops.map((workshop) => (
          <div className="cursor-pointer rounded-xl bg-[#2B2853] opacity-60 transition w-auto h-44 p-4 relative hover:scale-105 hover:opacity-100">
            <div className="h-1/2 items-start grid place-items-center text-center underline font-semibold text-xl">
              <p>
                {workshop.name}
              </p>
            </div>
            <div className="h-1/2 text-center font-light grid place-items-center">
              <div className="h-max flex items-end">
                <h3 className="whitespace-pre-line">
                  {
                    `by ${workshop.by}
                    ${workshop.company}
                    ${new Date(workshop.date).toLocaleDateString()}`
                  }
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Workshops