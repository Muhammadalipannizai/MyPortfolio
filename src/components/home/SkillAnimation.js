import React, {useState, useEffect} from 'react'

const SkillAnimation = () => {
    
    const skills = ["React","TypeScript", "Redux", "MongoDB", "NodeJS", "Tailwind CSS", "SQL","JavaScript", "CSS3", "SCSS", "HTML5", "Python", "Azure"]
    const [skill, setSkill] = useState("")
    const [skillIndex, setSkillIndex] = useState(0);
    const [skillWordIndex, setSkillWordIndex] = useState(1);

    useEffect(() => {
        const word = skills[skillIndex];
        let timeOut = 150;

        // check if skill word length ends and also increment skill index every word ends
        if(word.length === skillWordIndex){
            const index = skillIndex === skills.length - 1 ? 0 : skillIndex + 1;
            setSkillIndex(index);
            setSkillWordIndex(1);
        }
        else // append extra letter every time state updates
            setSkillWordIndex(skillWordIndex + 1);

        const displayWord = word.substr(0, skillWordIndex);
        
        // extend delay time when new word starts
        if(skillWordIndex === 1)
            timeOut = 700;

        // set delay to show word change
        setTimeout(() => {
            setSkill(displayWord);
        }, timeOut)
    }, [skill])

    return (
        <h3>Experience in <span className="skill-name">{skill}</span> <span className="text-cursor"></span></h3>
    )
}

export default SkillAnimation
