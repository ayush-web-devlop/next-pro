import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const page = () => {
  return (
    <div>
      <div className='mt-12 flex gap-10 md:flex-row flex-col'>
        <Image src="/taekwondo-page.jpg" width={400} height={400} alt='taekwondo image'/>
        <div>
          <h1 className='font-bold text-2xl my-3'>Taekwondo: The Art of Hand and Foot</h1>
          <p>Taekwondo is a Korean martial art characterized by its emphasis on high, fast kicks, jumping and spinning kicks, and powerful hand techniques. It combines elements of self-defense, sport, and philosophy, making it a popular choice for practitioners around the world.</p>

          <h1 className='font-bold text-2xl mt-5'>Historical Background</h1>
          <p>Origins: Taekwondo’s roots can be traced back to ancient Korean martial arts and military training. It evolved from traditional Korean fighting techniques known as Taekkyeon and Hwa Rang Do, which were practiced during the Three Kingdoms period (57 BC – 668 AD).
         <br />
         <br />
         Modern Development: The modern form of Taekwondo began to take shape in the mid-20th century.          In 1955, several Korean martial artists, led by General Choi Hong Hi, consolidated various          styles and techniques to create Taekwondo. It was officially named "Taekwondo" in 1957,          meaning "the way of the foot and fist."</p>
        </div>
       </div> 
       <div className='mt-7'>
        <h1 className='font-bold text-2xl my-3'>Techniques</h1>
        <p>Taekwondo techniques are divided into three main categories:</p>
        <p className='mt-3'><b>1. Strikes (Chirigi): </b>Includes punches (Jireugi) and kicks (Chagi). The kicks are particularly distinctive and include front kicks (Ap Chagi), side kicks (Yop Chagi), and roundhouse kicks (Dollyo Chagi).</p>

        <p className='mt-3'><b>2. Blocks (Makgi): </b>Defensive techniques to protect oneself from attacks. Common blocks include high blocks (Olgul Makgi), middle blocks (Momtong Makgi), and low blocks (Najunde Makgi).</p>

        <p className='mt-3'><b>3. Forms (Poomsae): </b>Pre-arranged patterns of movements that simulate combat against imaginary opponents. Practicing poomsae helps in mastering techniques and improving fluidity and precision.</p>
       </div>
       <div className='mt-8'>
       <h1 className='font-bold text-2xl my-3'>Forms of Taekwondo</h1>

       <p className='mt-3'><b>1. Sport Taekwondo: </b>Focuses on sparring and competition. It is governed by the World Taekwondo Federation (WT) and features point-based sparring where athletes earn points for controlled, accurate strikes.</p>

       <p className='mt-3'><b>2. Traditional Taekwondo: </b>Emphasizes self-defense techniques and forms. It often incorporates elements of traditional Korean martial arts and is practiced more for personal development and self-discipline.</p>

       <p className='mt-3'><b>3. Self-Defense Taekwondo: </b>Concentrates on practical applications of techniques for real-world self-defense scenarios. It integrates defensive tactics, joint locks, and pressure points.</p>
       </div>

       <h1 className='font-bold text-2xl mt-4'>Conclusion</h1>
       <p>Taekwondo is more than a martial art; it’s a path to personal growth, physical fitness, and self-discipline. Whether you’re interested in competitive sport, self-defense, or personal development, Taekwondo offers a rich and rewarding experience.</p>

       <Link href="/"><button className='mt-7 bg-green-400 p-3 rounded-lg '>Visit Homepage</button></Link>
    </div>
  )
}

export default page
