import PlayStream from "../components/PlayStream";
import CardList from "../components/CardList";
import ViewButton from "../components/ViewButton";
import React from "react";

export default function LiveStream() {
  return (
    <>
      <PlayStream />
      <CardList title={"NEWEST PODCAST"} />
      <ViewButton />
    </>
  );
}
