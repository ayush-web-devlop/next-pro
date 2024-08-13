import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
       <div className='mt-12 flex gap-10 md:flex-row flex-col'>
        <Image src="/karate-page.jpg" width={500} height={500} alt='karate image'/>
        <div>
          <h1 className='font-bold text-2xl'>What is Karate?</h1>
          <p>Karate is a traditional Japanese martial art that focuses on striking   techniques using punches, kicks, knee strikes, and elbow strikes. The term   "Karate" translates to "empty hand," emphasizing the art's reliance on   unarmed combat. With its origins in the Okinawan islands, Karate has   evolved into a globally practiced martial art known for its discipline,   techniques, and philosophical principles.</p>

          <h1 className='font-bold text-2xl mt-5'>Historical Background</h1>
          <p>Karate’s roots trace back to ancient China, where it was influenced by Chinese martial arts introduced to Okinawa through trade and cultural exchange. In the early 20th century, Okinawan masters such as Gichin Funakoshi, Chojun Miyagi, and Kenwa Mabuni began to formalize and popularize karate, incorporating elements from indigenous Okinawan fighting styles. Funakoshi, in particular, is credited with introducing karate to mainland Japan and establishing it as a recognized martial art.</p>
        </div>
       </div>  
       <div>
       <h1 className='font-bold text-2xl mt-7'>Core Principles</h1>
       <p className='mt-3'><b>1. Kihon (Basics): </b>Fundamental techniques and movements form the foundation of karate practice. Kihon includes basic stances, strikes, and blocks that are essential for developing proper technique and body mechanics. </p>
       <p className='mt-3'><b>2. Kata (Forms): </b>Kata are pre-arranged sequences of movements that simulate combat scenarios. Practicing kata helps students internalize techniques, improve precision, and develop rhythm and coordination. Each kata has its own unique patterns and applications. </p>
       <p className='mt-3'><b>3. Kumite (Sparring): </b>Kumite involves practicing techniques against a live opponent. It ranges from controlled, predetermined drills to free sparring. Kumite enhances reflexes, timing, and the ability to apply techniques in real-time combat situations. </p>
       </div>

       <div>
       <h1 className='font-bold text-2xl mt-7'>Styles of Karate</h1>
       <p className='mt-3'>Various styles of karate exist, each with its unique approach and techniques. Some of the major styles include:</p>
       <p className='mt-3'><b>1. Shotokan: </b>Developed by Gichin Funakoshi, Shotokan is known for its deep stances and powerful, linear movements. It emphasizes precision and strong basics.</p>
       <p className='mt-3'><b>2. Shito-Ryu: </b>Founded by Kenwa Mabuni, Shito-Ryu incorporates elements from both Shuri-te and Naha-te styles. It features a wide variety of kata and techniques.</p>
       <p className='mt-3'><b>3. Goju-Ryu: </b>Created by Chojun Miyagi, Goju-Ryu blends hard (Go) and soft (Ju) techniques. It focuses on close-range combat and includes both powerful strikes and flowing movements.</p>
       <p className='mt-3'><b>4. Wado-Ryu: </b>Founded by Hironori Ohtsuka, Wado-Ryu combines traditional karate with jujitsu principles. It emphasizes fluid movement and evasion techniques.</p>
       </div>
       <Link href="/"><button className='mt-7 bg-green-400 p-3 rounded-lg '>Visit Homepage</button></Link>
    </div>
  )
}

export default page
