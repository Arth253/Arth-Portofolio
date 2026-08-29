// import { skills } from '../data/skills'

// function Skills() {
//   return (
//     <section id="skills" className="max-w-5xl mx-auto px-6 py-15 bg-background">
//       <h2 className="text-3xl font-bold mb-10 text-text">
//         My <span className="text-accent">Skills</span>
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {skills.map((group) => (
//           <div key={group.category} className="border border-border rounded-lg p-6">
//             <h3 className="text-lg font-bold text-text mb-4">{group.category}</h3>
//             <div className="flex flex-wrap gap-2">
//               {group.items.map((item) => (
//                 <span
//                   key={item}
//                   className="text-sm px-3 py-1 rounded-full border border-accent text-accent"
//                 >
//                   {item}
//                 </span>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }

// export default Skills
import { skills } from '../data/skills'

function Skills() {
  const isOdd = skills.length % 2 !== 0

  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-15 bg-background">
      <h2 className="text-3xl font-bold mb-10 text-text">
        My <span className="text-accent">Skills</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((group, index) => {
          const isLastAndOdd = isOdd && index === skills.length - 1

          return (
            <div
              key={group.category}
              className={`border border-border rounded-lg p-6 ${
                isLastAndOdd ? 'md:col-span-2 md:max-w-[calc(50%-1rem)] md:mx-auto md:w-full' : ''
              }`}
            >
              <h3 className="text-lg font-bold text-text mb-4">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-3 py-1 rounded-full border border-accent text-accent"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Skills