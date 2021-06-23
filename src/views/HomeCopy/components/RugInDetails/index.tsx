import React from 'react'

interface RugInDetailsProps {
  details: {
    id: number,
    name: string,
    path: string,
    type: string,
    withdrawalCooldown: string,
    nftRevivalTime: string,
    rug: string,
    artist?: any,
    stakingToken: any
  }
}

const RugInDetails: React.FC<RugInDetailsProps> = ({
  details: { id, name, path, type, withdrawalCooldown, nftRevivalTime, rug, artist, stakingToken },
}) => {
  return (
    <div key={id} className="rug-indetails">
      <div className="direction-column imageColumn">
        <div className="sc-iwajpm dcRUtg">
          {type === 'image' ? (
            <img src={path} alt="CAKE" className="sc-cxNHIi bjMxQn" />
          ) : (
              <video width="100%" autoPlay>
                <source src={path} type="video/mp4" />
              </video>
            )}
        </div>
      </div>
      <div className="direction-column">
        <span className="indetails-type">Grave</span>
        <span className="indetails-title">
          Weight:
          <span className="indetails-value">120X</span>
        </span>
        <span className="indetails-title">
          Zombie TVL:
          <span className="indetails-value">$37.01K</span>
        </span>
        <span className="indetails-title">
          Artist:
          <span className="indetails-value">{artist}</span>
        </span>
      </div>
      <div className="direction-column">
        <span className="indetails-type">Deposit Fees:(dynamic price in BNB equivalent to BUSD 4 dollars)</span>
        <span className="indetails-title">
          Early Withdrawal:
          <span className="indetails-value">5%</span>
        </span>
        <span className="indetails-title">
          Withdrawal Cooldown:
          <span className="indetails-value">{withdrawalCooldown}</span>
        </span>
        <span className="indetails-title">
          NFT Mint competion:
          <span className="indetails-value">{nftRevivalTime}</span>
        </span>
      </div>
      {/* <div className="direction-column">
          <a href="/" target="_blank" className="indetails-link">Tutorials goes to gitbook</a>
          <a href="/" target="_blank" className="indetails-link">Fees &amp; Tokenomics goes to gitbook page</a>
          <a href="/" target="_blank" className="indetails-link">View Contract goes to BSC Scan (wait for address)</a>
        </div> */}
    </div>
  )
}

export default RugInDetails
