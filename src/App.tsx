import { useEthers } from '@usedapp/core';
import { shortenAddress } from '@usedapp/core/dist/esm/src/helpers';
import React from 'react';

function App() {
  const { account, deactivate, activateBrowserWallet } = useEthers();

  const onClickConnectButton = () => {
    if (account) {
      deactivate();
    } else {
      activateBrowserWallet();
    }
  };

  return (
    <div className='App'>
      <button onClick={onClickConnectButton}>
        {account ? shortenAddress(account) : 'Connect'}
      </button>
    </div>
  );
}

export default App;
