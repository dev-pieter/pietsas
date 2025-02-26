const Timeline = () => {
  const events = [
    { time: "15:00", event: "Ceremony" },
    { time: "16:00", event: "Reception & Cocktails" },
    { time: "18:00", event: "Dinner" },
    { time: "20:00", event: "Party" },
  ];

  return (
    <section className="max-w-full mx-auto">
      <div className="space-y-6 bg-primary/5 rounded-xl p-8">
        {events.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-8 p-4 rounded-lg hover:bg-primary/5"
          >
            <span className="text-xl font-semibold text-primary">
              {item.time}
            </span>
            <span className="text-xl">{item.event}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
