import React from 'react'
import { FaLinkedinIn, FaGithub, FaRegFilePdf } from 'react-icons/fa';
import ReactTooltip from 'react-tooltip'
import generalData from "../data/General.json";

export default function SocialMedia() {
    return (
        <div className='app__social'>
            <a href={generalData.githubLink} target='_blank'>
                <FaGithub />
            </a>
            <a href={generalData.linkedinLink} target='_blank'>
                <FaLinkedinIn />
            </a>
            <a data-tip href={generalData.cvLink} target='_blank'>
                <FaRegFilePdf />
                <ReactTooltip
                    effect='solid'
                    arrowColor='lightgrey'
                    textColor='#000'
                    backgroundColor='#fff'
                    place='right'
                    className='skills-tooltip'
                >
                    {generalData.name} CV
                </ReactTooltip>
            </a>
        </div>
    )
}
