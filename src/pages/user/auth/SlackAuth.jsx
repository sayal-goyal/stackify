import React from 'react'
import { useLocation } from 'react-router-dom';

const SlackAuth = () => {
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const codeName = params.get('code');

  return (
    <div>Slack</div>
  )
}

export default SlackAuth