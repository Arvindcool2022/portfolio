import React from 'react';
import Skill from './Skill'; // Import the Skill component

function SkillsBar() {
  return (
    <article className="h-screen flex justify-center items-center text-white">
      <div className="relative w-full md:w-4/5 bg-white bg-opacity-5 mx-auto py-2 px-5 rounded-md">
        <h1 className="text-center font-medium text-xl mt-4 mb-7 uppercase">
          Skills
        </h1>

        <Skill name="HTML" width="[95%]" percentage="95" animationDelay="" />
        <Skill name="CSS" width="4/5" percentage="80" animationDelay="One" />
        <Skill
          name="JavaScript"
          width="4/5"
          percentage="80"
          animationDelay="One"
        />
        <Skill
          name="React"
          width="9/12"
          percentage="75"
          animationDelay="Three"
        />
        <Skill
          name="SASS"
          width="9/12"
          percentage="75"
          animationDelay="Three"
        />
        <Skill
          name="git/Github"
          width="3/5"
          percentage="60"
          animationDelay="Three"
        />
        <Skill
          name="Bootstrap"
          width="9/12"
          percentage="75"
          animationDelay="Three"
        />
        <Skill
          name="Tailwind"
          width="9/12"
          percentage="75"
          animationDelay="Three"
        />
        <Skill
          name="Redux toolkit"
          width="3/5"
          percentage="60"
          animationDelay="Four"
        />
        <Skill
          name="Framer motion"
          width="2/5"
          percentage="40"
          animationDelay="Four"
        />
      </div>
    </article>
  );
}

export default SkillsBar;
