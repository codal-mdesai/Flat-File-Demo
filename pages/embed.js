import { useEffect, useState, useCallback } from "react";
// import { flatfileImporter } from "@flatfile/sdk"
import { Button, Card } from "react-bootstrap";

async function launcher(token) {
  try {
    const { flatfileImporter } = await import('@flatfile/sdk')
    const importer = flatfileImporter(token);
    await importer.launch();
    importer.on('init', ({ batchId }) => {
      console.log(`Batch ${batchId} has been initialized.`)
    })
    importer.on("error", (error) => {
      console.error(error);
    });
    importer.on("complete", async (payload) => {
      const SAMPLE_DATA = true; // if true, it'll fetch only the first 1000 rows from the API; otherwise it'll fetch everything
      console.log("on completion", {payload, sample_op: payload.data(SAMPLE_DATA)})
      // setOutput(JSON.stringify(await payload.data(SAMPLE_DATA), null, 4));
    });
  } catch (error) {
      console.error("launcher error", {error})
  }
}

export default function Embed() {
  const [token, setToken] = useState("");

  const memoizedCallback = useCallback(
    () => {
      if (token) launcher(token)
    },
    [token],
  );
  useEffect(() => {
    fetch("/api/token-embed")
      .then((res) => res.json())
      .then(async (response) => {
console.log({response})
        setToken(response.token)
      });
  }, []);
  if (!token) return <p>Loading...</p>;

  return <>
    <Card className="text-center">
      <Card.Header>Embed Method</Card.Header>
      <Card.Body>
        <Button variant="warning" onClick={memoizedCallback}>
          Launch
        </Button>
      </Card.Body>
    </Card>
  </>;
}
