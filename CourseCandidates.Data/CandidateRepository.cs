using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CourseCandidates.Data
{
    public class CandidateRepository
    {
        private string _connection;
        public CandidateRepository(string connection)
        {
            _connection = connection;
        }

        public void AddCandidate(Candidate c)
        {
            using(var context=new CandidateContext(_connection))
            {
                context.Candidates.Add(c);
                context.SaveChanges();
            }
        }
        public List<Candidate> GetCandidates()
        {
            using (var context = new CandidateContext(_connection))
            {
                return context.Candidates.ToList();
            }
        }
        public List<Candidate> GetCandidatesByStatus(string status)
        {
            using (var context = new CandidateContext(_connection))
            {
                return context.Candidates.Where(c=>c.Status==status).ToList();
            }
        }
        public Candidate GetCandidateById(int id)
        {
            using (var context = new CandidateContext(_connection))
            {
                return context.Candidates.FirstOrDefault(c => c.Id == id);
            }
        }
        public void UpdateCandidate(Candidate c)
        {
            using (var context = new CandidateContext(_connection))
            {
                context.Candidates.Attach(c);
                context.Entry(c).State = EntityState.Modified;
                context.SaveChanges();
            }
        }
    }
}
