import React from 'react'
import InputField from '../Components/InputField'

const WorkExperience = ({handleChange}) => {
  return (
    <div>
        <h4 className='text-lg font-medium mb-2'>Work Experience</h4>

        <div>
            <label className='sidebar-label-container'>
                <input type="radio" name='test' id='test' value="" onChange={handleChange} />
                <span className='checkmark'></span>Any experience
            </label>

            <InputField handleChange={handleChange} value="Beginner" title="Beginner" name="test"/>
            <InputField handleChange={handleChange} value="Intermediate" title="Intermediate" name="test"/>
            <InputField handleChange={handleChange} value="Advanced" title="Advanced" name="test"/>
            


        </div>
    </div>
  )
}

export default WorkExperience