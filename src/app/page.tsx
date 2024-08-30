import Header from "@/components/Header";
import Description from "@/components/Description";
import RecentActivities from "@/components/RecentActivities";

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Description />
        <RecentActivities />
      </main>
    </>
  );
}
