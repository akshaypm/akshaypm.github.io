export function ProvisioningFigure() {
  return (
    <figure className="figure">
      <svg viewBox="0 0 280 176" role="img" aria-labelledby="provision-title">
        <title id="provision-title">
          Provisioning API latency fell from 22 to 30 seconds to under 5 seconds.
          Manual inputs fell from 10 to 12 down to 1.
        </title>
        <text x="0" y="12" fill="#5B5750" fontSize="11" letterSpacing="1.2">
          PROVISIONING API
        </text>
        <text x="0" y="40" fill="#141414" fontSize="13">
          22–30 s
        </text>
        <rect x="78" y="30" width="188" height="8" fill="#141414" />
        <text x="0" y="66" fill="#1B3A6B" fontSize="13">
          {"< 5 s"}
        </text>
        <rect x="78" y="56" width="36" height="8" fill="#1B3A6B" />

        <text x="0" y="104" fill="#5B5750" fontSize="11" letterSpacing="1.2">
          MANUAL INPUTS
        </text>
        <text x="0" y="132" fill="#141414" fontSize="13">
          10–12
        </text>
        <rect x="78" y="122" width="150" height="8" fill="#141414" />
        <text x="0" y="158" fill="#1B3A6B" fontSize="13">
          1
        </text>
        <rect x="78" y="148" width="14" height="8" fill="#1B3A6B" />
      </svg>
    </figure>
  );
}
