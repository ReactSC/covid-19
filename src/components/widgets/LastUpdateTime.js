import React from 'react';

const LastUpdateTime = props => {
  // const event = new Date(props.time);
  // const options = {
  //   weekday: 'long',
  //   year: 'numeric',
  //   month: 'long',
  //   day: 'numeric',
  //   hour: 'numeric',
  //   minute: 'numeric'
  // };
  // const time = event.toLocaleDateString(undefined, options);

  const getTimeString = time => {
    const event = new Date(time);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric"
    };
    return time = event.toLocaleDateString(undefined, options);
  }
  
  return <p className="mt-3">{getTimeString(props.time)}</p>;
}
export default LastUpdateTime;