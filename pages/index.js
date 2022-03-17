import Importer from "./importer";
import { Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Embed from "./embed";

export default function Home() {
  const [mode, setMode] = useState("");

  return (
    <>
      <Row className="mx-0 my-5">
        <Button
          as={Col}
          className="mx-2"
          variant="primary"
          onClick={() => {
            setMode("importer");
          }}
        >
          Check Portal Method
        </Button>
        <Button
          as={Col}
          className="mx-2"
          variant="secondary"
          onClick={() => {
            setMode("embed");
          }}
        >
          Check Embedded Method
        </Button>
      </Row>
      <div>
        {mode === "importer" && <Importer />}
        {mode === "embed" && <Embed />}
      </div>
    </>
  );
}
