function Skills(){

const skills=[
"Python",
"JavaScript",
"React",
"HTML & CSS",
"Git",
"Github",
"Figma",
"SQL"
];


return(

<section>

<h3>02 — SKILLS & TOOLS</h3>

<h2>
What I Work With
</h2>


<div className="skills">

{
skills.map(skill=>
<div className="skill">
{skill}
</div>
)
}

</div>

</section>

)

}

export default Skills;