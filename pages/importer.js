import { FlatfileButton } from "@flatfile/react";
import { Button, Card } from "react-bootstrap";

export default function Importer() {
  return (
    <div>
      <FlatfileButton
        licenseKey={process.env.NEXT_PUBLIC_LICENCE_KEY}
        customer={{
          email: "mamtadesai007@gmail.com",
          name: "Mamta Desai",
          userId: "1",
        }}
        settings={{
          type: "Contact",
          fields: [
            { label: "Recipient Name", key: "recipientName" },
            { label: "Street Address", key: "streetAddress" },
            { label: "Apartment or Unit #", key: "unitNumber" },
            { label: "Address Line 3", key: "addressLine3" },
            { label: "City", key: "city" },
            { label: "State", key: "state" },
            { label: "Country Code", key: "countryCode" },
            { label: "Postal Code / Zip", key: "postalCode" },
            { label: "Product", key: "product" },
            { label: "Size", key: "size" },
            { label: "Add Ons", key: "addOns" },
            { label: "Customization Option", key: "customizationOption" },
            { label: "Shipping Method", key: "shippingMethod" },
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
