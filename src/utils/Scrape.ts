export const scrapleLink = async (link: string) => {
  const response = await fetch("/sc/" + link);
  const body = await response.json();
  let starting = 0;
  for (let i = body.events.length - 1; i > 0; i--) {
    if (
      body.events[i].status.type === "inprogress" ||
      body.events[i].status.type === "notstarted"
    )
      starting = i;
  }
  return {
    homeTeam: body.events[starting].homeTeam.name,
    homeScore:
      body.events[starting].homeScore.current != undefined
        ? body.events[starting].homeScore.current
        : body.events[starting].homeScore.aggregated,
    awayTeam: body.events[starting].awayTeam.name,
    awayScore:
      body.events[starting].awayScore.current != undefined
        ? body.events[starting].awayScore.current
        : body.events[starting].awayScore.aggregated,
    startedTime: body.events[starting].statusTime
      ? body.events[starting].statusTime.timestamp
      : undefined,
    inProgress: body.events[starting].status.type === "inprogress",
    firstHalf: body.events[starting].lastPeriod === "period2" ? false : true,
  };
};
