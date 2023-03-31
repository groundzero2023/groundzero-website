import React from 'react'
import { timelineSchedule } from '../constants'

const Timeline = () => {
  return (
    <div className="text-white py-16" id="timeline">  
      <div className="heading">
        Timeline
      </div>
      <div className="my-12 grid place-items-center md:flex md:justify-center">
        {timelineSchedule.map((event) => (
          <div className="grid place-items-center md:flex">
            <div className="flex items-center md:grid md:place-items-center">
              <div className="absolute -ml-36 md:ml-0">
                <h2 className="md:-mt-20 md:text-center">
                  {new Date(event.date).toLocaleString("en-US", { dateStyle: "medium" })}
                </h2>
              </div>

              <div className="w-[60px] h-[60px] rounded-full border-4 border-white">
                
              </div>
              
              <div className="absolute px-28 md:px-3 md:w-44">
                  <div className="md:mt-56 md:text-center text-sm space-y-2 md:space-y-1">
                      {event.title.map((title) => (
                        <div>
                          {title}
                        </div>
                      ))}
                  </div>
              </div>
            </div>
            <div className={`${timelineSchedule.indexOf(event) == timelineSchedule.length - 1 ? 'hidden' : 'block' } grid place-items-center `}>
              <div className="w-1 h-40 md:w-16 lg:w-24 md:h-1 bg-white">
              
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Timeline