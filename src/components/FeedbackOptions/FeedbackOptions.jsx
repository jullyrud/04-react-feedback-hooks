import PropTypes from 'prop-types'

export function FeedbackOptions({ options, onHandleClick }) {
    return (
        <div>
            <h2>Please leave feedback</h2> 
            {options.map((option, ind) => (
                <button onClick={() => onHandleClick(option)} type="button" key={ind} >{option}</button>
            ))}
        </div>
            )
    
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string)
}