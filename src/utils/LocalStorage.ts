export const AddMatch = (link: string) => {
  const matches = GetMatches();
  matches.push({
    link: link,
    bettedTeam: "",
  });
  localStorage.setItem("matches", JSON.stringify(matches));
};

export const RemoveMatch = (link: string) => {
  const matches = GetMatches();
  localStorage.setItem(
    "matches",
    JSON.stringify(matches.filter((match) => match.link !== link))
  );
};

export const GetMatches = (): any[] => {
  const matches = JSON.parse(localStorage.getItem("matches"));
  return matches ? matches : [];
};

export const UpdateMatch = (link: string, bettedTeam: string) => {
  let matches = GetMatches();
  const match = matches.filter((match) => match.link == link)[0];
  matches = matches.filter((match) => match.link !== link);
  match.bettedTeam = bettedTeam;
  matches.push(match);
  localStorage.setItem("matches", JSON.stringify(matches));
};
