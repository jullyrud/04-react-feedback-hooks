import PropTypes from 'prop-types'

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
        return (
        <>
            <h2>Statisticsk</h2> 
            <div>Good: {good}</div>
            <div>Neutral: {neutral}</div>
            <div>Bad: {bad}</div>
            <div>Total: {total}</div>
            <div>Positive percentage: {positivePercentage}%</div>
        </>
    )
    } 

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
    }