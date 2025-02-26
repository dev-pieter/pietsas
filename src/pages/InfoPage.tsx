import Timeline from "@/components/Timeline";
// import Map from "@/components/Map";

const InfoPage = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Schedule</h2>
          <p className="text-muted-foreground">
            The ceremony will begin at 15:00, followed by canapés and drinks.
            Dinner will be served at 18:00, after which the party will continue
            into the evening.
          </p>
          <Timeline />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Accommodation</h2>
          <p className="text-muted-foreground">
            For guests requiring accommodation, we have arranged special rates
            at nearby hotels. Please contact us for more information.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Getting There</h2>
          <p className="text-muted-foreground">
            The venue is located 30 minutes from Cape Town International
            Airport. Detailed directions will be provided in your invitation.
          </p>
          {/* <Map
            address="Hawksmoor House, Matjieskuil Farm, R304, Stellenbosch, 7599, South Africa"
            height="400px"
          /> */}
        </section>
      </div>
    </div>
  );
};

export default InfoPage;
