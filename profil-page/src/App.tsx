import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getActivityByUserId, getAverageSessionByUserId, getUserByUserId, getPerfSessionByUserId } from './services/api';
import { UserActivity, UserData, UserAverageSessions, UserPerformance } from './types/apiTypes';
import ActivityChart, { ActivityChartType } from './components/ActivityChart';
import AverageChart, { AverageChartType } from './components/AverageChart';
import PerfChart, { PerfChartType } from './components/PerfChart';
import ScoreChart, { ScoreChartType } from './components/ScoreChart';
import KeyData from './components/KeyData';
import './App.css';

function mapActivityChartData(userActivity: UserActivity): ActivityChartType | null {
  if (!userActivity?.sessions) return null;

  return userActivity.sessions.map((session) => {
    return {
      day: parseInt(session.day),
      kilogram: session.kilogram,
      calories: session.calories
    };
  });
}

function mapAverageChartData(UserAverage: UserAverageSessions): AverageChartType | null {
  if (!UserAverage?.sessions) return null;

  return UserAverage.sessions.map((session) => {
    return {
      day: session.day,
      sessionLength: session.sessionLength
    };
  });
}

function mapPerfChartData(userPerf: UserPerformance): PerfChartType | null {
  if (!userPerf) {
    console.error("No valid data found in userPerf.");
    return null;
  }

  return userPerf.data.map((session) => {
    return {
      value: session.value,
      kind: userPerf.kind[session.kind],
    };
  });
}

function mapScoreChartData(userScore: UserData): ScoreChartType | null {
  console.log(userScore)
  if (!userScore) return null;

  return [{ value: (userScore?.todayScore ?? userScore?.score ?? 0) * 100 }];
}

const App = () => {
  const { userId } = useParams<{ userId: string }>();
  const [error, setError] = useState<string | null>(null);
  const [dataActivity, setDataActivity] = useState<ActivityChartType | null>(null);
  const [dataAverage, setDataAverage] = useState<AverageChartType | null>(null);
  const [perfAverage, setDataPerf] = useState<PerfChartType | null>(null);
  const [scoreAverage, setDataScore] = useState<ScoreChartType | null>(null);
  const [dataUser, setDatauser] = useState<UserData | null>(null);

  useEffect(() => {
    if (!userId) {
      setError("User ID is missing from the URL.");
      return;
    }

    const userIdNumber = parseInt(userId);
    const fetchData = async () => {
      try {
        const [activity, user, averageSession, perfSession] = await Promise.all([
          getActivityByUserId(userIdNumber),
          getUserByUserId(userIdNumber),
          getAverageSessionByUserId(userIdNumber),
          getPerfSessionByUserId(userIdNumber),
        ]);

        console.log("Raw API responses:", { activity, user, averageSession, perfSession });

        if (!activity || !user || !averageSession || !perfSession) {
          throw new Error("One or more API responses are missing");
        }

        const activityData = mapActivityChartData(activity.data);
        const averageData = mapAverageChartData(averageSession.data);
        const perfData = mapPerfChartData(perfSession.data);
        const scoreData = mapScoreChartData(user.data);

        setDataActivity(activityData);
        setDataAverage(averageData);
        setDataPerf(perfData);
        setDataScore(scoreData);
        setDatauser(user.data);
      } catch (error) {
        console.error("Error in fetchData:", error);
        setError("Une erreur est survenue lors du chargement des données.");
      }
    };

    fetchData();
  }, [userId]);

  return (
    <div className="container-all">
      {error ? (
        <p className="error-message">{error}</p>
      ) : dataActivity && dataUser ? (
        <>
          <div className="container-first">
            <div className="container-name">
              <h1>
                Bonjour <span className="username">{dataUser?.userInfos?.firstName || 'Utilisateur inconnu'}</span>
              </h1>
              <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
            {dataActivity ? <ActivityChart data={dataActivity} /> : <p>Chargement des données d'activité...</p>}
            <div className="container-display">
              {dataAverage ? <AverageChart data={dataAverage} /> : <p>Chargement des données moyennes...</p>}
              {perfAverage ? <PerfChart data={perfAverage} /> : <p>Chargement des données de performance...</p>}
              {scoreAverage ? <ScoreChart data={scoreAverage} /> : <p>Chargement des données de score...</p>}
            </div>
          </div>
          {dataUser && <KeyData data={dataUser.keyData} />}
        </>
      ) : (
        <p>Chargement...</p>
      )}
    </div>
  );

};

export default App;
