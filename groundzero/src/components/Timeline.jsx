import React from 'react'
import { timelineSchedule } from '../constants'

const Timeline = () => {
  return (
    <div className="grid place-items-center text-white">  
      <div className="heading">
        Timeline
      </div>
      <div className="">
        {timelineSchedule.map((event) => (
          <div className="grid place-items-center">
            <div className="flex items-center">
              <div className="absolute -ml-36">
                <h2 className="text-right">
                  {new Date(event.date).toLocaleString("en-US", { dateStyle: "medium" })}
                </h2>
              </div>

              <div className="w-20 h-20 rounded-full border-4 border-white">
                
              </div>
              
              <div className="absolute ml-36">
                <h2 className="text-left">
                  {event.title}
                </h2>
              </div>
            </div>
            <div className={`${timelineSchedule.indexOf(event) == timelineSchedule.length - 1 ? 'hidden' : 'block' } grid place-items-center w-full`}>
              <div className="w-1 h-40 bg-white">
              
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Timeline