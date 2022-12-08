import React, { useState } from 'react'
import { questions } from '../constants/index'

const Faq = () => {

    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected == i) {
            return setSelected(null)
        }
        setSelected(i)
    }

  return (
    <div className="faq">
        <div className="heading">
            Frequently Asked Questions
        </div>
        <div className="faq-accordion">
            {questions.map((item, i) => (
                <div className='faq-item'>
                    <div className='faq-item-title' onClick={() => toggle(i)}>
                        <h2>{item.Question}</h2>
                        <span>{selected == i ? "-" : "+"}</span>
                    </div>
                    <div className={selected === i ? "faq-item-content-show" : "faq-item-content"}>
                        {item.Answer}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Faq