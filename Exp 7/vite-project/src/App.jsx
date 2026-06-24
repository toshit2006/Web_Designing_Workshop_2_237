import './App.css';
import StudentCard from './StudentCard.jsx';

function App() {
  const students = [
    { name: 'Simon James', course: 'Computer Science', marks: 85 },
    { name: 'Theres James', course: 'Computer Science', marks: 95 },
    { name: 'Aarav Sharma', course: 'Web Designing', marks: 88 },
  ];

  return (
    <main className="app-shell">
      <section className="hero">
        <p className="eyebrow">Experiment 7</p>
        <h1>Student Card App</h1>
        <p>Reusable React components created with JSX and props.</p>
      </section>

      <section className="student-grid" aria-label="Student details">
        {students.map((student) => (
          <StudentCard
            key={student.name}
            name={student.name}
            course={student.course}
            marks={student.marks}
          />
        ))}
      </section>
    </main>
  );
}

export default App;
