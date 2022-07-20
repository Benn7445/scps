import type { NextPage } from "next";
import Head from "next/head";
import $ from "jquery";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { scrapleLink } from "src/utils/Scrape";
import {
  AddMatch,
  GetMatches,
  RemoveMatch,
  UpdateMatch,
} from "src/utils/LocalStorage";

const Index: NextPage = () => {
  const [scoresList, setScoresList] = useState([]);

  const removeScoresList = (id: string) => {
    setScoresList([...scoresList.filter((linkC) => linkC.id !== id)]);
    RemoveMatch(id);
  };

  const getScoresList = (id: string) => {
    return scoresList.filter((linkC) => linkC.id === id)[0];
  };

  const addScoresList = (link: any) => {
    const exScoresList = scoresList;
    if (exScoresList.filter((match) => match.id === link).length === 0) {
      exScoresList.push(link);
      setScoresList([...exScoresList]);
    }
  };

  const updateWinner = (id: string, winner: string) => {
    let newList = scoresList;
    const link = getScoresList(id);
    link.bettedTeam = winner;
    newList = scoresList.filter((linkC) => linkC.id !== id);
    newList.push(link);
    setScoresList([...newList]);
    UpdateMatch(link.id, winner);
  };

  useEffect(() => {
    for (const match of GetMatches()) {
      scrapleLink(match.link).then((matchData) => {
        addScoresList({
          id: match.link,
          homeTeam: matchData.homeTeam,
          homeScore: matchData.homeScore,
          awayTeam: matchData.awayTeam,
          awayScore: matchData.awayScore,
          bettedTeam: match.bettedTeam,
          startedTime: matchData.startedTime,
          firstHalf: matchData.firstHalf,
          inProgress: matchData.inProgress,
        });
      });
    }
    setInterval(async () => {
      const newList = [];
      for (const score of scoresList) {
        await scrapleLink(score.id).then((matchData) => {
          newList.push({
            id: score.id,
            homeTeam: matchData.homeTeam,
            homeScore: matchData.homeScore,
            awayTeam: matchData.awayTeam,
            awayScore: matchData.awayScore,
            bettedTeam: score.bettedTeam,
            startedTime: matchData.startedTime,
            firstHalf: matchData.firstHalf,
            inProgress: matchData.inProgress,
          });
        });
      }
      setScoresList(newList);
    }, 120000);
  }, []);

  return (
    <>
      <Head>
        <title>Scps</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-5">
        <section className="flex gap-2 w-full lg:w-2/3 xl:w-1/2">
          <input
            id="sofascore-link"
            type="text"
            className="relative border outline-none rounded py-3 px-3 w-full bg-white mr-3 shadow text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-outline"
            placeholder="SofaScore Link"
          />
          <button
            className="rounded-lg px-4 py-2 bg-green-700 text-green-100 hover:bg-green-800 duration-300"
            onClick={() => {
              const link = $("#sofascore-link")
                .val()
                .toString()
                .split(".com/")[1]
                .split("/")[1];
              if (getScoresList(link) == undefined) {
                scrapleLink(link).then((matchData) => {
                  addScoresList({
                    id: link,
                    homeTeam: matchData.homeTeam,
                    homeScore: matchData.homeScore,
                    awayTeam: matchData.awayTeam,
                    awayScore: matchData.awayScore,
                    bettedTeam: undefined,
                    startedTime: matchData.startedTime,
                    firstHalf: matchData.firstHalf,
                    inProgress: matchData.inProgress,
                  });
                  AddMatch(link);
                });
                $("#sofascore-link").val("");
              }
            }}
          >
            Submit
          </button>
          <button
            className="rounded-lg px-4 py-2 bg-gray-700 text-gray-100 hover:bg-gray-800 duration-300"
            onClick={async () => {
              const newList = [];
              for (const score of scoresList) {
                await scrapleLink(score.id).then((matchData) => {
                  newList.push({
                    id: score.id,
                    homeTeam: matchData.homeTeam,
                    homeScore: matchData.homeScore,
                    awayTeam: matchData.awayTeam,
                    awayScore: matchData.awayScore,
                    bettedTeam: score.bettedTeam,
                    startedTime: matchData.startedTime,
                    firstHalf: matchData.firstHalf,
                    inProgress: matchData.inProgress,
                  });
                });
              }
              setScoresList(newList);
            }}
          >
            <Icon icon="charm:refresh" />
          </button>
        </section>
        <section className="mt-5 w-full lg:w-2/3 xl:w-1/2 border-t">
          {scoresList
            .sort((match1, match2) =>
              match1.homeTeam > match2.homeTeam ? -1 : 1
            )
            .map((match, count) => {
              return (
                <div
                  key={`link-${count}`}
                  className="flex justify-between border-b py-2"
                >
                  <div className="flex w-1/3 whitespace-nowrap">
                    {match.bettedTeam == undefined ||
                    match.homeScore == undefined ? (
                      <Icon
                        icon="bi:question-square"
                        className="my-auto mr-2 text-gray-500 min-w-[16px]"
                      />
                    ) : (match.bettedTeam === match.homeTeam &&
                        match.homeScore > match.awayScore) ||
                      (match.bettedTeam === match.awayTeam &&
                        match.homeScore < match.awayScore) ? (
                      <Icon
                        icon="bi:check-square"
                        className="my-auto mr-2 text-green-500 min-w-[16px]"
                      />
                    ) : (
                      <Icon
                        icon="bi:exclamation-square"
                        className="my-auto mr-2 text-red-500 min-w-[16px]"
                      />
                    )}
                    <p
                      className={`my-auto cursor-pointer duration-300 hover:text-emerald-300 ${
                        match.homeTeam === match.bettedTeam
                          ? "text-emerald-500"
                          : ""
                      }`}
                      onClick={() => updateWinner(match.id, match.homeTeam)}
                    >
                      {match.homeTeam}
                    </p>
                    <p className="mx-1">-</p>
                    <p
                      className={`my-auto cursor-pointer duration-300 hover:text-emerald-300 ${
                        match.awayTeam === match.bettedTeam
                          ? "text-emerald-500"
                          : ""
                      }`}
                      onClick={() => updateWinner(match.id, match.awayTeam)}
                    >
                      {match.awayTeam}
                    </p>
                  </div>
                  <p className="w-12">
                    {match.homeScore} - {match.awayScore}
                  </p>
                  <p className="w-12">
                    {match.startedTime ? Math.round((new Date().getTime() - (match.startedTime * 1000)) / 1000 / 60) + "'" : "-"}
                  </p>
                  <Icon
                    icon="emojione-v1:cross-mark"
                    className="my-auto cursor-pointer duration-300 hover:opacity-50"
                    onClick={() => removeScoresList(match.id)}
                  />
                </div>
              );
            })}
        </section>
        <section className="mt-5">
          <h1 className="font-semibold text-gray-700 mb-2">Overall:</h1>
          <div className="flex flex-col gap-3">
            <div className="flex">
              <Icon
                icon="bi:check-square"
                className="my-auto mr-2 text-green-500"
              />
              <p className="mb-[1px]">
                {
                  scoresList.filter(
                    (match) =>
                      (match.bettedTeam != undefined &&
                        match.homeScore != undefined &&
                        match.bettedTeam === match.homeTeam &&
                        match.homeScore > match.awayScore) ||
                      (match.bettedTeam === match.awayTeam &&
                        match.homeScore < match.awayScore)
                  ).length
                }
              </p>
            </div>
            <div className="flex">
              <Icon
                icon="bi:exclamation-square"
                className="my-auto mr-2 text-red-500"
              />
              <p className="mb-[1px]">
                {
                  scoresList.filter(
                    (match) =>
                      (match.bettedTeam != undefined &&
                        match.homeScore != undefined &&
                        match.bettedTeam === match.homeTeam &&
                        match.homeScore <= match.awayScore) ||
                      (match.bettedTeam === match.awayTeam &&
                        match.homeScore >= match.awayScore)
                  ).length
                }
              </p>
            </div>
            <div className="flex">
              <Icon
                icon="bi:question-square"
                className="my-auto mr-2 text-gray-500"
              />
              <p className="mb-[1px]">
                {
                  scoresList.filter(
                    (match) =>
                      match.bettedTeam == undefined ||
                      match.homeScore == undefined
                  ).length
                }
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Index;
