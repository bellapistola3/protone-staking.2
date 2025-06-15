import React from 'react';
import StakeForm from './components/StakeForm';
import Leaderboard from './components/Leaderboard';
import NFTClaim from './components/NFTClaim';
import BurnUnstake from './components/BurnUnstake';

function App() {
  return (
    <div className='p-4 text-white bg-black min-h-screen font-mono'>
      <h1 className='text-4xl font-bold mb-6 text-center glow-text'>$PROTONE Staking</h1>
      <StakeForm />
      <Leaderboard />
      <NFTClaim />
      <BurnUnstake />
    </div>
  );
}

export default App;