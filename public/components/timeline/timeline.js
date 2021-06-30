import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import SchoolIcon from "@material-ui/icons/School";
import Paper from "@material-ui/core/Paper";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import Typography from "@material-ui/core/Typography";

import Styles from "../../../styles/timeline.module.scss";

export default function CustomizedTimeline({ timeline }) {
  return (
    <div className={Styles.timelineWrap}>
      <h3 className={Styles.timelineWrap__title}>Timeline</h3>
      <Timeline align="alternate">
        {timeline.map((timelineData, index) => {
          return (
            <TimelineItem key={index}>
              <TimelineOppositeContent>
                <Typography variant="body2" color="textSecondary">
                  {timelineData.duration}
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot
                  color={index < timeline.length / 2 ? "grey" : "secondary"}
                >
                  {index == timeline.length - 1 ? (
                    <LaptopMacIcon />
                  ) : (
                    <SchoolIcon />
                  )}
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={Styles.timelineWrap__paper}>
                  <Typography variant="h6" component="h1">
                    {timelineData.course}
                  </Typography>
                  <Typography>{timelineData.school}</Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>
    </div>
  );
}
