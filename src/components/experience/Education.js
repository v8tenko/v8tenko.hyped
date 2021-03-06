import React from 'react'
import './Education.css'
import Title from "../titles/TItle";
import EducationCard from "./EducationCard/EducationCard";

export default function Education() {
  return (
    <section>
      <div id="experience-before"/>
      <div className="experience">
        <div>
          <Title> образование </Title>
          <EducationCard place={'Университет ИТМО'} date={'01.2020 - сейчас'} post={'студент'}/>
        </div>
       {/* <div>
          <Title> experience </Title>
          <EducationCard place={'University ITMO'} date={'08.2002 - now'} post={'student'}/>
          <EducationCard place={'University ITMO'} date={'08.2002 - now'} post={'student'}/>
          <EducationCard place={'University ITMO'} date={'08.2002 - now'} post={'student'}/>
        </div>*/}
      </div>
    </section>
  )
}
