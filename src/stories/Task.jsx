import React from 'react';
import PropTypes from 'prop-types';
import './task.css'
export default function Task({task: {id, title, state}, position}, onArchiveTask, onPinTask, ...props){
  console.log('position', position)
  return (
    <div 
      className={['storybook-input',`storybook-position--${position}`].join(' ')}>
      <label htmlFor="title" aria-label={title}>
          <input type="text" value={title} readOnly={true} name='title' />
      </label>
    </div>
  )
}



Task.propTypes = {
  /**
   * Task is required with title state
   */
  task: PropTypes.object.isRequired,

  /**
   * How postion should apply on input field
   */
  position: PropTypes.oneOf(['left','right','center'])
}

Task.defaultProps = {
  position: 'center'
}