import React from 'react'

const Slack = () => {
    const response = fetch('https://slack.com/api/conversations.list', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.REACT_APP_SLACK_BOT_TOKEN}`
        }
    })

    return (
        <div>

        </div>
    )
}

export default Slack