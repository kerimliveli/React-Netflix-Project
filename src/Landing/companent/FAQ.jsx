import React, { useState } from 'react'
import FAQitem from './FAQitem'

const FAQ = ({}) => {

    const [openAccordion, setOpenAccordion]= useState(null) 

    const items = [
        {
            title:"What is Netflix?",
            desc: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. [break]  You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!                                ",
            id: 1
        },
        {
            title:"How much does Netflix cost?",
            desc: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EUR 7.99 to EUR 11.99 a month (pre-tax). No extra costs, no contracts.",
            id: 2
        },
        {
            title:"Where can I watch?",
            desc: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. [break] You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
            id: 3
        },
        {
            title:"How do I cancel?",
            desc: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
            id: 4
        },
        {
            title:"Whar can I watch on Netflix?",
            desc: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
            id: 5
        },
        {
            title:"Is Netflix good for kids?",
            desc: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. [break] Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
            id: 6
        },
        {
            title:"Why am I seeing this language",
            desc: "Your browser preferences determine the language shown here.",
            id: 7
        },
        

        

    ]

  return (
    <div className="flex flex-col gap-4 py-20 w-full  px-[130px]">
        <h3 className="text-white font-medium pb-[20px] text-[24px] " >Frequently Asked Questions</h3>
        {items.map(item => <FAQitem  item={item} openAccordion={openAccordion} setOpenAccordion={setOpenAccordion} />)}
    </div>
  )
}

export default FAQ
