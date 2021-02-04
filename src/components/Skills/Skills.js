import React from "react"
import { SectionName, SectionTitle, SkillsWrapper } from '../../assets/styles/index'
import { MainSkills, OtherSkills, BasicSkills} from '../index'

export const Skills = () => {
    return (
      <>
      <SkillsWrapper>
        <SectionName>SKILLS</SectionName>
        <SectionTitle>TECHNOLOGIES I KNOW</SectionTitle>
        <MainSkills />
        <SectionTitle>BASIC KNOWLEDGE</SectionTitle>
        <BasicSkills />
        <SectionTitle>OTHERS</SectionTitle>
        <OtherSkills />
      </SkillsWrapper>
      </>
    )
}