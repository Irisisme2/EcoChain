import React, { useState, useEffect } from 'react';
import { RouterNitro } from '@router-protocol/nitro-eth-connector'; 

const RouterIntegration = () => {
  const [integrationData, setIntegrationData] = useState([]);
  const [routerNitro, setRouterNitro] = useState(null);

  useEffect(() => {

    const sourceChainId = 1; 
    const sourceProvider = 'https://eco-chain-provider.com'; 

    const newRouterNitro = new RouterNitro({
      chains: {
        [sourceChainId]: { provider: sourceProvider },
      },
    });


    setRouterNitro(newRouterNitro);

    const itemId = 1;
    const amount = 10;



    transferToChain(itemId, amount, newRouterNitro);
  }, []);

  const transferToChain = async (itemId, amount, routerNitro) => {

    const transferDetails = {
      fromChainId: 1, // EcoChain
      toChainId: 2,   
      assetType: 'Token',
      assetId: itemId,
      amount: amount,
    };

    try {
      await routerNitro.transferOut(transferDetails);

      const updatedData = [...integrationData, {}];
      setIntegrationData(updatedData);
    } catch (error) {
      console.error('Błąd podczas transferu:', error.message);
    }
  };

  return (
    <div>
      <h2>Router Nitro Integration</h2>
      <p>
        The Router Nitro Integration component provides insights into the interactions facilitated by Router Nitro,
        allowing seamless cross-chain transfers and asset swapping between different supply chains.
      </p>
      <div>
        <h3>Integration Details</h3>
        <ul>
          {integrationData.map((transfer, index) => (
            <li key={index}>
              <strong>Transfer Type:</strong> {transfer.transferType}
              <br />
              <strong>Timestamp:</strong> {transfer.timestamp}
              <br />
              <strong>Details:</strong> {transfer.details}
              <hr />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RouterIntegration;
