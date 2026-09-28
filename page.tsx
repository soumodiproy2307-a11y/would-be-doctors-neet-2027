import { Target, Trophy, ClipboardCheck, BookOpen, Bell, UserRound } from "lucide-react";

const features = [
  ["Daily Targets", "Set today's target and track progress.", Target],
  ["Progress", "Daily, weekly and monthly progress views.", ClipboardCheck],
  ["Daily Quiz", "Practice MCQs with automatic scoring.", BookOpen],
  ["Leaderboard", "Track quiz and published test performance.", Trophy],
  ["Notices", "Important announcements from the admin.", Bell],
  ["Profile", "Student profile and privacy controls.", UserRound],
] as const;

export default function Home() {
  return (
    <main className="shell">
      <section className="hero">
        <div className="eyebrow">WOULD BE DOCTORS</div>
        <h1>NEET 2027<br /><span>TARGET TRACKER</span></h1>
        <p className="subtitle">Your daily targets. Your progress. Your journey to medical college.</p>
        <div className="hero-actions">
          <button className="primary">Student Login</button>
          <button className="secondary">Admin Portal</button>
        </div>
      </section>

      <section className="stats">
        <div><strong>50</strong><span>Students</span></div>
        <div><strong>2027</strong><span>NEET Goal</span></div>
        <div><strong>24/7</strong><span>Progress Hub</span></div>
      </section>

      <section className="grid">
        {features.map(([title, text, Icon]) => (
          <article className="card" key={title}>
            <div className="icon"><Icon size={22} /></div>
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
