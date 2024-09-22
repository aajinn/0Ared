export default function RecentActivities() {
  const activities = [
    { date: "2023-04-01", description: "Launched a new open-source project" },
    { date: "2023-03-15", description: "Published a blog post on AI trends" },
    {
      date: "2023-03-01",
      description: "Contributed to a major open-source library",
    },
  ];

  return (
    <section className="text-center">
      <h2 className="text-2xl font-bold mb-4">Recent Activities</h2>
      <ul className="space-y-4 inline-block text-left">
        {activities.map((activity, index) => (
          <li key={index} className="border-b pb-2">
            <span className="font-semibold">{activity.date}: </span>
            {activity.description}
          </li>
        ))}
      </ul>
    </section>
  );
}
