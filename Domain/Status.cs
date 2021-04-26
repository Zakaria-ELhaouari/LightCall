using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain
{
    public class Status
    {

        public int Id { get; set; }
        public string StatusType { get; set; }
        public int StatusPiority { get; set; }
        public bool ClosingStatus { get; set; }


    }
}
