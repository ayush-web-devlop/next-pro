import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className='mt-12 flex gap-10 md:flex-row flex-col'>
        <Image src="/muay-thai-page.jpg" width={400} height={400} alt='muay thai image'/>
        <div>
          <h1 className='font-bold text-2xl my-3'>Muay Thai: The Art of Eight Limbs</h1>
          <p>Muay Thai, often referred to as the &quot;Art of Eight Limbs&quot; is a traditional Thai martial art renowned for its striking techniques using fists, elbows, knees, and shins. Known for its effectiveness in both self-defense and competition, Muay Thai has a rich history and is considered Thailand&apos;s national sport.</p>

          <h1 className='font-bold text-2xl mt-5 mb-3'>Historical Background</h1>
          <p>Origins: Muay Thai has ancient roots that can be traced back to the military training of the Siamese army (now Thailand) over 500 years ago. It evolved from older forms of Thai martial arts and was originally practiced as a hand-to-hand combat skill for soldiers.
         <br />
         <br />
         Development: During the 16th century, Muay Thai gained prominence through its role in Thai history and warfare. It became formalized into a sport and was celebrated during festivals and royal ceremonies. The modern form of Muay Thai began to take shape in the early 20th century, with the introduction of standardized rules and weight classes.</p>
        </div>
       </div> 

       <div className='my-7'>
        <h1 className='font-bold text-2xl'>Techniques and Skills</h1>

        <p className='mt-3'><b>1. Punches:</b> Like Western boxing, Muay Thai incorporates a range of punches including jabs, crosses, hooks, and uppercuts.</p>

        <p className='mt-3'><b>2. Kicks:</b> The art is renowned for its powerful kicking techniques, including the roundhouse kick, teep (front kick), and side kick.</p>

        <p className='mt-3'><b>3. Elbows:</b> Elbow strikes are used in close-quarters combat and can deliver devastating blows, often employed in clinch fighting.</p>

        <p className='mt-3'><b>4. Knees:</b> Knee strikes are utilized both in striking and clinching situations to inflict damage and control the opponent.</p>

        <p className='mt-3'><b>5. Clinching:</b> Unique to Muay Thai, the clinch involves close-range grappling where fighters control their opponent’s posture to land knee strikes and set up throws.</p>
       </div>

       <div className='my-7'>
       <h1 className='font-bold text-2xl'>Culture and Significance</h1>
       <p className='mt-3'>Muay Thai is not only a sport but also a cultural symbol of Thailand. It is often accompanied by traditional music, known as &quot;Sarama&quot; and pre-fight rituals called &quot;Wai Khru&quot; to pay respect to teachers and the art itself. The sport has a rich tradition of ceremonial dance and rituals that highlight its historical and cultural significance.</p>
       </div>

       <div className='my-7'>
       <h1 className='font-bold text-2xl'>Modern Muay Thai</h1>
       <p className='mt-3'>Today, Muay Thai is practiced globally and is a key component in mixed martial arts (MMA) due to its effective striking techniques. It is known for its rigorous training methods and has produced many world-renowned fighters.</p>
       </div>

       <div className='mt-7'>
       <h1 className='font-bold text-2xl'>Conclusion</h1>
       <p className='mt-3'>Muay Thai remains a vibrant and dynamic martial art with a rich heritage. Its combination of striking techniques, cultural significance, and effective combat skills make it a popular and respected martial art around the world.</p>
       </div>

       <Link href="/"><button className='mt-7 bg-green-400 p-3 rounded-lg '>Visit Homepage</button></Link>
    </div>
  )
}

export default page




