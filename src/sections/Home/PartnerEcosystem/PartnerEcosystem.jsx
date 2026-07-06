import "./PartnerEcosystem.css";

import nvidiaLogo from "../../../assets/logos/nvidia.png";
import awsLogo from "../../../assets/logos/aws.png";
import microsoftLogo from "../../../assets/logos/microsoft.png";
import salesforceLogo from "../../../assets/logos/salesforce.png";
import oracleLogo from "../../../assets/logos/oracle.png";
import snowflakeLogo from "../../../assets/logos/snowflake.png";
import databricksLogo from "../../../assets/logos/databricks.png";

const partners = [
  {
    name: "NVIDIA",
    logo: nvidiaLogo,
  },
  {
    name: "AWS",
    logo: awsLogo,
  },
  {
    name: "Microsoft",
    logo: microsoftLogo,
  },
  {
    name: "Salesforce",
    logo: salesforceLogo,
  },
  {
    name: "Oracle",
    logo: oracleLogo,
  },
  {
    name: "Snowflake",
    logo: snowflakeLogo,
  },
  {
    name: "Databricks",
    logo: databricksLogo,
  },
];

function PartnerEcosystem() {
  return (
    <section className="partners-section">
      <div className="container">
        <h2 className="partners-heading">Strong Ecosystem of Partners</h2>
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div className="partner-card" key={index}>
              <img src={partner.logo} alt={partner.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PartnerEcosystem;