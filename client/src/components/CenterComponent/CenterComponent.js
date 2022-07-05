import React from "react";
import MeetupList from "../MeetupList/MeetupList";

export default function CenterComponent({ user, setUser, meetups, joinMeetup }) {

    return (
    <>
    <div className="center-component-title">
      <h2>Upcoming meetups</h2>
      <h4>Meet local soccer players and team up!</h4>
    </div>  
    <div className="CenterComponent">
          <MeetupList
            user={user}
            setUser={setUser}
            meetups={meetups}
            joinMeetup={joinMeetup}
          />
      </div>
      </>
    );
  }