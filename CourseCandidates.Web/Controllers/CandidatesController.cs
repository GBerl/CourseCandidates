using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CourseCandidates.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace CourseCandidates.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CandidatesController : ControllerBase
    {
        private string _connection;
        public CandidatesController(IConfiguration configuration)
        {
            _connection = configuration.GetConnectionString("Conn");
        }

        [Route("addcandidate")]
        [HttpPost]
        public void AddCandidate(Candidate c)
        {
            var repo = new CandidateRepository(_connection);
            repo.AddCandidate(c);
        }
        [Route("getcandidates")]
        [HttpGet]
        public List<Candidate> GetCandidates()
        {
            var repo = new CandidateRepository(_connection);
            return repo.GetCandidates();
        }
        [Route("getcandidatesbystatus")]
        [HttpGet]
        public List<Candidate> GetCandidatesByStatus(string status)
        {
            var repo = new CandidateRepository(_connection);
            return repo.GetCandidatesByStatus(status);
        }
        [Route("getcandidatebyid")]
        [HttpGet]
        public Candidate GetCandidateById(int id)
        {
            var repo = new CandidateRepository(_connection);
            return repo.GetCandidateById(id);
        }
        [Route("updatecandidatestatus")]
        [HttpPost]
        public void UpdateCandidateStatus(Candidate c)
        {
            var repo = new CandidateRepository(_connection);
            repo.UpdateCandidate(c);
        }

    }
}