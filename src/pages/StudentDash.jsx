import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function StudentDash() {
  const studentProfile = {
    name: "Nikhil",
    cgpa: "8.9 / 10",
    course: "B.Tech Information Technology",
    resumeUrl: "#",
    linkedin: "https://linkedin.com",
    github: "https://github.com"
  };

  const [jobs, setJobs] = useState([
    { id: 1, title: "Frontend Developer", company: "abc", location: "Remote", applied: false },
    { id: 2, title: "Software Engineer Intern", company: "xyz", location: "Mumbai", applied: true },
    { id: 3, title: "React Developer", company: "zb", location: "Remote", applied: false },
    { id: 4, title: "Full Stack Engineer", company: "zcv", location: "Hyderabad", applied: false }
  ]);

  const [searchQuery, setSearchQuery] = useState("");

  const handleApply = (jobId) => {
    setJobs(jobs.map(job => 
      job.id === jobId ? { ...job, applied: !job.applied } : job
    ));
  };

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ backgroundColor: 'white', minHeight: '100vh', fontFamily: 'sans-serif', margin: 0 }}>
      
      
      <nav
        className="navBar"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#d9d0b2',
          padding: '0 30px'
        }}
      >
        <header>
          <h1 style={{ margin: '15px 0', fontSize: '24px' }}>Welcome, {studentProfile.name}</h1>
        </header>

        <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
          <search>
            <input 
              type="search" 
              placeholder="Search jobs or companies..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                padding: '8px 12px',
                borderRadius: '4px',
                border: '1px solid #ccc',
                width: '250px'
              }}
            />
          </search>

          <Link to="/Home" style={{ fontSize: '19px', color: 'black', textDecoration: 'none' }}>
            Home
          </Link>

          
        </div>
      </nav>

      <div style={{ display: 'flex', padding: '30px', gap: '30px' }}>
        
        <aside style={{ 
          flex: '1', 
          backgroundColor: '#d9d0b2', 
          padding: '20px', 
          borderRadius: '8px',
          height: 'fit-content'
        }}>
          <h2 style={{ borderBottom: '2px solid white', paddingBottom: '10px', marginTop: 0 }}>My Profile</h2>
          
          <p><strong>Course:</strong> {studentProfile.course}</p>
          <p><strong>Academics:</strong> {studentProfile.cgpa} CGPA</p>
          
          <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <a href={studentProfile.resumeUrl} style={{ color: 'black'}}> View Resume</a>
            <a href={studentProfile.linkedin} style={{ color: 'black' }}> LinkedIn Profile</a>
            <a href={studentProfile.github}  style={{ color: 'black' }}> GitHub Profile</a>
          </div>

          <div style={{ marginTop: '30px', padding: '15px', backgroundColor: 'white', borderRadius: '4px', textAlign: 'center' }}>
            <h3>Jobs Applied</h3>
              {jobs.filter(j => j.applied).length}
          </div>
        </aside>

        <main style={{ flex: '2' }}>
          <h2 style={{ marginTop: 0, marginBottom: '20px', color: 'black' }}>Available Job Openings</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <div 
                  key={job.id} 
                  style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    padding: '20px', 
                    border: '2px solid #d9d0b2', 
                    borderRadius: '8px',
                    backgroundColor: 'white'
                  }}
                >
                  <div>
                    <h3 style={{ margin: '0 0 5px 0', color: 'black' }}>{job.title}</h3>
                    <p style={{ margin: 0, color: '#555' }}>{job.company} • {job.location}</p>
                  </div>

                  <button 
                    onClick={() => handleApply(job.id)}
                    style={{
                      padding: '8px 16px',
                      backgroundColor: job.applied ? 'white' : '#d9d0b2',
                      color: 'black',
                      border: '2px solid #d9d0b2',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontWeight: 'bold'
                    }}
                  >
                    {job.applied ? '✓ Applied' : 'Apply Now'}
                  </button>
                </div>
              ))
            ) : (
              <p style={{ color: '#777', fontStyle: 'italic' }}>No jobs match your search criteria.</p>
            )}
          </div>
        </main>

      </div>
    </div>
  );
}

export default StudentDash;
