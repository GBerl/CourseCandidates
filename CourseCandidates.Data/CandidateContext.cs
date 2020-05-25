using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace CourseCandidates.Data
{
    public class CandidateContext:DbContext
    {
        private string _connection;

        public CandidateContext(string connection)
        {
            _connection = connection;
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_connection);
        }

        public DbSet<Candidate> Candidates { get; set; }
      
    }
}
