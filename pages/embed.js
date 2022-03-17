import { FlatfileButton } from "@flatfile/react";
import { useEffect, useState } from "react";

export default function Embed() {
  const [token, setToken] = useState("");
  useEffect(() => {
    fetch("/api/token-embed")
      .then((res) => res.json())
      .then((response) => (response.token ? setToken(response.token) : ""));
  }, []);
  if (!token) return <p>Loading...</p>;
  console.log({ token });
  return (
    <FlatfileButton
      licenseKey={token}
      onInit={({ batchId }) =>
        console.log(`Flatfile importer is launched with batchId: ${batchId}`)
      }
      onComplete={async (payload) => {
        const SAMPLE_DATA = true;
        console.log(JSON.stringify(await payload.data(SAMPLE_DATA), null, 4));
      }}
      onError={(err) => console.error(err)}
    />
  );
}
