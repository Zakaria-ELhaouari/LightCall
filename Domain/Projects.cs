using System;

namespace Domain
{
    public class Projects
    {
        public Guid Id { get; set; }
        public string Project_Type { get; set; }
        public string Question_description { get; set; }
        public AppUser User { get; set; }
        
        
    }
}