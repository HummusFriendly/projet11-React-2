import { useEffect, useState } from 'react';
import { getActivityByUserId, getAverageSessionByUserId, getUserByUserId, getPerfSessionByUserId } from './services/api';
import { UserActivity, UserData, UserAverageSessions, UserPerformance } from './types/apiTypes';
import ActivityChart, { ActivityChartType } from './components/ActivityChart';
import AverageChart, { AverageChartType } from './components/AverageChart';
import PerfChart, { PerfChartType } from './components/PerfChart';
import ScoreChart, { ScoreChartType } from './components/ScoreChart';
import ColumnImg from './components/ColumnImg';
import './App.css';

function 
mapActivityChartData (UserActivity:UserActivity):ActivityChartType{
  return UserActivity.sessions.map((session)=>{
    return {
      day:parseInt(session.day),
      kilogram:session.kilogram,
      calories:session.calories
    }
  }) 
}

function mapAverageChartData (UserAverage:UserAverageSessions):AverageChartType{
  return UserAverage.sessions.map((session)=>{
    return {
      day:session.day,
      sessionLength:session.sessionLength
    }
  }) 

}

function mapPerfChartData(userPerf: UserPerformance): PerfChartType {
  return userPerf.data.map((session) => {
    return {
      value: session.value,
      kind: userPerf.kind[session.kind],
    };
  });
}
function mapScoreChartData(userScore: UserData): ScoreChartType {
  console.log(userScore, 'userScore')
  return [{value: (userScore.todayScore??userScore.score??0) * 100}]
}

const App = () => {

  const [error, setError] = useState<string | null>(null);
  const [dataActivity, setDataActivity] = useState<ActivityChartType | null>(null);
  const [dataAverage, setDataAverage] = useState<AverageChartType | null>(null);
  const [perfAverage, setDataPerf] = useState<PerfChartType | null>(null);
  const [scoreAverage, setDataScore] = useState<ScoreChartType | null>(null);
  const [dataUser, setDatauser] = useState<UserData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {

        const [activity, user, averageSession,perfSession,scoreSession] = await Promise.all([getActivityByUserId(18),getUserByUserId(18),getAverageSessionByUserId(18),getPerfSessionByUserId(18),getUserByUserId(18)]); // On centralise ici l'appel API
        const activityData=mapActivityChartData(activity.data);
        const averageData=mapAverageChartData(averageSession.data);
        const perfData=mapPerfChartData(perfSession.data);
        const scoreData=mapScoreChartData(scoreSession.data);
        console.log(perfData)
        setDataActivity(activityData);
        setDataAverage(averageData);
        setDataPerf(perfData);
        setDataScore(scoreData);
        setDatauser(user.data);
      } catch (error) {
        setError("Une erreur est survenue lors du chargement des données.");
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container-all">
      {error ? (
        <p className="error-message">{error}</p>
      ) : dataActivity && dataUser ? (
        <><div className="container-first">
          <div className="container-name">
            <h1>
              Bonjour <span className="username">{dataUser?.userInfos?.firstName || 'Utilisateur inconnu'}</span>
            </h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
          </div>
          {dataActivity && <ActivityChart data={dataActivity}/>}
          <div className='container-display'>
          {dataAverage && <AverageChart data={dataAverage}/>}
          {perfAverage && <PerfChart data={perfAverage}/>}
          {scoreAverage && <ScoreChart data={scoreAverage}/>}
          </div>
          </div>
              <ColumnImg /></>
      ) : (
        <p>Chargement...</p>
      )}
    </div>
  );
};

export default App;
