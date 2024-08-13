import React, { Component } from "react";
import data from "../data.json";
import FullpageDiv from "../components/FullpageDiv";
import "./Sections.css";
import avatar from "../Screenshot 2024-08-04 215344.png";
import { Element } from 'react-scroll';

class SecondSection extends Component {
  render() {
    return (
      <Element name="about" className="element">
      <FullpageDiv className="2" id="SecondSection">
        <img src={avatar} alt="Logo" className="Avatar" />
        <h2 className="SectionsTitle">{data.sections[0].title}</h2>
        <p className="AboutMeSubTitile">
          My name is : {data.sections[0].items[0].OwnerName} | I am :{" "}
          {data.sections[0].items[0].Education} | My degree level is :{" "}
          {data.sections[0].items[0].Degree} | I studied in :{" "}
          {data.sections[0].items[0].University}
        </p>
        <p className="AboutMe">
        Computer engineering student at Hormozgan University / Specialties: Full stack developer / 4 years of work experience. 
        </p>
      </FullpageDiv>
      </Element>
    );
  }
}

export default SecondSection;
