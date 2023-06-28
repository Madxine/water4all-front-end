import "./ShopPage.css";
import BuyModal from "../components/BuyModal";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function ShopPage() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className="generalwrapper">
      <Container>
        <div>
          <h1
            style={{
              textAlign: "center",
              color: "#2669ba",
              paddingTop: "50px",
            }}
          >
            WATER SHOP
          </h1>
          <p style={{ textAlign: "center", paddingTop: "15px" }}>
            Owning a refillable bottle means you always have a drink with you,
            wherever you go.
          </p>
        </div>
        <div
          className="flex-container"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "stretch",
            height: "auto",
            width: "auto",
            paddingTop: "50px",
          }}
        >
          <div>
            <Card sx={{ maxWidth: 360, marginBottom: 1 }}>
              <CardMedia
                sx={{ height: 350 }}
                image={process.env.PUBLIC_URL + "/resources/waterbottle1.png"}
              />
              <CardActions>
                <BuyModal />
              </CardActions>
            </Card>
          </div>
          <div>
            <h4 style={{ textAlign: "center", padding: "25px" }}>
              Why should you choose our bottle?
            </h4>
          </div>
          <div className="accordion">
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>1</Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  Support water access for everyone
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  By buying our branded bottles you support this site running
                  and make sure EVERYONE gets easy access to clean drinking
                  water, regardless of the individual challenges some might
                  face.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>2</Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  UV Filter
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Specially developed to be reusable and with a UV filter, which
                  protects water from light, guaranteeing its properties.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>3</Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  Premium materials
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Resistant, made of PET (BPA Free), they have a distinctive
                  design and color.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>4</Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  Environmental Advantages
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Less emissions in the production of bottles. Less emissions in
                  the transport of bottles. Fewer bottles as waste in landfills.
                  Fewer bottles in the oceans. Reuse it more than once and
                  you're already saving the environment!
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </Container>
    </div>
  );
}