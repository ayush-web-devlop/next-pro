import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
       <div className='mt-12 flex gap-10 md:flex-row flex-col'>
        <Image src="/judo-page.jpg" width={500} height={500} alt='judo image' />
        <div>
          <h1 className='font-bold text-2xl my-3'>Judo: The Way of the Gentle Way</h1>
          <p>Judo, which translates to "The Gentle Way" in Japanese, is a modern martial art and Olympic sport focusing on throws, joint locks, and strangles. Developed from traditional Japanese jiu-jitsu, Judo emphasizes using an opponent’s force and balance against them, making it effective for self-defense and competitive sports.</p>

          <h1 className='font-bold text-2xl mt-5 mb-3'>Historical Background</h1>
          <p>Judo was founded by Jigoro Kano in Japan in 1882. Kano, a skilled practitioner of jiu-jitsu, sought to create a martial art that emphasized skill and technique over brute strength. He distilled the principles of jiu-jitsu into Judo, which focuses on throws, holds, and submissions. Judo quickly gained popularity in Japan and worldwide, eventually becoming an Olympic sport in 1964.</p>
        </div>
       </div>

       <div>
        <h1 className='font-bold text-2xl mt-7'>Techniques</h1>
        <p className='mt-3'>Judo techniques are divided into several categories:</p>
        <p className='mt-3'><b>1) Nage-waza (Throwing Techniques):</b> Techniques used to throw or takedown an opponent. Key throws include:
        Ippon Seoi Nage: A shoulder throw where the practitioner lifts the         opponent over their shoulder.
        O Goshi: A hip throw where the practitioner uses their hip to lift         and throw the opponent.
        Uchi Mata: An inner thigh throw that involves sweeping the         opponent’s legs from underneath.</p>
        <p className='mt-3'><b>2) Katame-waza (Grappling Techniques):</b> Techniques used for control on the ground. These include:

        Osaekomi-waza (Pins): Techniques to hold the opponent down, such as Kesa Gatame (scarf hold) and Yoko Shiho Gatame (side four-quarterhold).
        Shime-waza (Strangulation Techniques): Techniques used to force anopponent to submit by applying pressure to the neck, such as HadakaJime (naked choke) and Okuri Eri Jime (sliding collar choke).
        Kansetsu-waza (Joint Lock Techniques): Techniques applied to jointsto force submission, such as Juji Gatame (cross arm lock) and Ude Garami (entangled arm lock).</p>
        
       </div>

       <div>
        <h1 className='font-bold text-2xl mt-7'>Training</h1>
        <p className='mt-3'>Judo training typically involves:</p>
        <p className='mt-3'><b>1) Randori (Sparring):</b> Free practice where practitioners apply techniques against resisting opponents in a controlled environment.</p>
        <p className='mt-3'><b>2) Kata (Forms):</b> Pre-arranged patterns of movements and techniques that teach principles and technique applications. Kata includes forms such as Nage-no-Kata (throwing forms) and Katame-no-Kata (grappling forms).</p>
        <p className='mt-3'><b>3) Drills:</b> Repetitive practice of specific techniques to build precision and muscle memory.</p>
        <p className='mt-3'><b>4) Conditioning: </b> Physical exercises to enhance endurance, strength, and overall fitness.</p>
        <p className='mt-3'><b>5) Bokken Practice: </b> Training with a wooden sword (bokken) to improve technique and understanding of kata principles.</p>
       </div>

       <div>
        <h1 className='font-bold text-2xl mt-7'>Culture and Significance</h1>
        <p className='mt-3'>Judo is not only a physical practice but also a way of life. The principles of Judo, such as "maximum efficiency with minimum effort" and "mutual welfare and benefit," reflect its philosophical and educational aspects. The practice of Judo emphasizes respect, discipline, and the development of character, making it a holistic martial art.</p>
       </div>

       <Link href="/"><button className='mt-7 bg-green-400 p-3 rounded-lg '>Visit Homepage</button></Link>
    </div>
  )
}

export default page
