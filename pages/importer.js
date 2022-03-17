import { FlatfileButton } from "@flatfile/react";
import { Button, Card } from "react-bootstrap";

export default function Importer() {
  return (
    <div>
      <FlatfileButton
        licenseKey="dcd8d60c-bdf3-4e60-afef-3845a902731a"
        customer={{
          email: "mamtadesai007@gmail.com",
          name: "John Mactavish",
          userId: "1",
        }}
        settings={{
          type: "Contact",
          fields: [
            { label: "Full Name", key: "name" },
            { label: "Email", key: "email" },
          ],
          managed: true,
        }}
        onData={async (results) => {
          // Do something with the data here
          console.log({ results });
          return "Done!";
        }}
        onRecordChange={(record) => {
          return { name: { value: record.name + " from change" } };
        }}
        onRecordInit={(record) => {
          return { name: { value: record.name + " from init" } };
        }}
        fieldHooks={{
          email: (values) => {
            return values.map(([item, index]) => [
              { value: item + ".au" },
              index,
            ]);
          },
        }}
        onCancel={() => {
          console.log("cancel");
        }}
        render={(importer, launch) => {
          return (
            <Card className="text-center">
              <Card.Header>Portal Method</Card.Header>
              <Card.Body>
                <Button variant="warning" onClick={launch}>
                  Upload file
                </Button>
              </Card.Body>
            </Card>
          );
        }}
      >
        Import Contacts
      </FlatfileButton>
    </div>
  );
}
