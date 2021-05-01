using System;
using System.Collections.Generic;

namespace Application.UpSell
{
    public class UpsellDto
    {
        public Guid Id { get; set; }
        public bool Status { get; set; }
        public Guid Project_id { get; set; }
        public ICollection<Guid> Products_ids { get; set; }
        public Guid User_id { get; set; }
    }
}