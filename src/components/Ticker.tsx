const ITEMS = [
  "AWS IoT Core", "mTLS · X.509", "7.5× Provisioning Speedup",
  "K3s · Kubernetes", "GE Healthcare", "500+ Edge Gateways",
  "cosign · Kyverno", "JLL Technologies", "200+ msg/sec MQTT",
  "Deloitte USI", "1,000+ Locations", "Terraform · SaltStack",
  "Samsung SmartThings", "Zero Critical CVEs", "IISc · IEEE · IETF RFC",
  "Grafana · OpenTelemetry", "25% Latency Reduction", "Spring Boot · Python",
];

export function Ticker() {
  const all = [...ITEMS, ...ITEMS];
  return (
    <div className="ticker-wrap" style={{ padding: "13px 0" }}>
      <div className="ticker-track">
        {all.map((item, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 18,
              paddingRight: 18,
              fontFamily: "var(--f-mono)",
              fontSize: 11,
              fontWeight: 500,
              color: "var(--t2)",
              whiteSpace: "nowrap",
              letterSpacing: "0.04em",
            }}
          >
            {item}
            <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--teal)", opacity: 0.5, flexShrink: 0, display: "inline-block" }} aria-hidden />
          </span>
        ))}
      </div>
    </div>
  );
}
