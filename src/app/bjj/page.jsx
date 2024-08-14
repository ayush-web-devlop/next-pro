import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
    <div className='mt-12 flex gap-10 md:flex-row flex-col'>
     <Image src="/bjj-page.jpg" width={500} height={500}  alt="Bjj IMAGE"/>
     <div>
       <h1 className='font-bold text-2xl my-3'>Brazilian Jiu-Jitsu (BJJ): The Gentle Art of Submission</h1>
       <p>Brazilian Jiu-Jitsu (BJJ) is a martial art and combat sport focused on ground fighting and submission grappling. Known for its emphasis on technique and leverage over brute strength, BJJ teaches practitioners how to control and submit opponents using joint locks and chokeholds. It is renowned for its effectiveness in both self-defense and mixed martial arts (MMA) competition.</p>

       <h1 className='font-bold text-2xl mt-5 mb-3'>Historical Background</h1>
       <p>Brazilian Jiu-Jitsu has its roots in Japanese Jiu-Jitsu and Judo, which were brought to Brazil by Mitsuyo Maeda, a Japanese martial artist, in the early 20th century. Maeda trained with the Gracie family, among others, who adapted and evolved the techniques into what is now known as Brazilian Jiu-Jitsu. The Gracie family, particularly Helio Gracie, played a pivotal role in developing BJJ into a distinct martial art that emphasizes ground fighting and submission techniques.</p>
     </div>
    </div>

    <div>
     <h1 className='font-bold text-2xl mt-7'>Techniques</h1>
     <p className='mt-3'>BJJ is characterized by its focus on ground techniques and submission holds. Key techniques include:</p>
     <p className='mt-3'><b>1) Guard:</b> A fundamental position where the practitioner uses their legs to control their opponent, either from the bottom or top. Variations include closed guard, open guard, and half guard.</p>
     <p className='mt-3'><b>2) Mount:</b> A dominant position where the practitioner sits on top of their opponent&apos;s torso, allowing for control and the ability to apply various submissions.</p>
     <p className='mt-3'><b>3) Back Control:</b> A position where the practitioner is behind their opponent, often with hooks in, allowing for a range of submission options.</p>
     <p className='mt-3'><b>4) Submission Holds: </b> Techniques designed to force the opponent to  &quot;tap out&quot; or concede, including joint locks (e.g., armbar, kimura) and chokeholds (e.g., rear-naked choke, triangle choke).</p>
    </div>

    <div>
     <h1 className='font-bold text-2xl mt-7'>Training</h1>
     <p className='mt-3'>BJJ training typically involves:</p>
     <p className='mt-3'><b>1) Drilling:</b> Repetitive practice of techniques to build muscle memory and precision.</p>
     <p className='mt-3'><b>2) Rolling (Sparring):</b> Live practice where practitioners apply techniques against resisting opponents to test and improve their skills.</p>
     <p className='mt-3'><b>3) Positional Sparring:</b> Focused sparring from specific positions to work on technique and strategy.</p>
     <p className='mt-3'><b>4) Conditioning:  </b> Physical training to improve strength, flexibility, and endurance.</p>
     <p className='mt-3'><b>5) Meditation: </b> Mental training to cultivate focus, discipline, and inner calm.</p>
    </div>

    <div>
     <h1 className='font-bold text-2xl mt-7'>Culture and Significance</h1>
     <p className='mt-3'>BJJ is known for its strong emphasis on respect, discipline, and the principle of &quot;using technique over strength&quot; The sport fosters a sense of community and camaraderie among practitioners, often referred to as a &quot;family&quot; The culture emphasizes continual learning and improvement, with a focus on both physical and mental development.</p>
    </div>

    <Link href="/"><button className='mt-7 bg-green-400 p-3 rounded-lg '>Visit Homepage</button></Link>
 </div>
  )
}

export default page
