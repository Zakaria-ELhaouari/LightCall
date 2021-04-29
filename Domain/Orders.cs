using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain
{
    public class Orders
    {
        public Guid Id { get; set; }
        public int OrderId { get; set; }
        public string Description { get; set; }
        public string Customer { get; set; }
        public Confirmation  Confirmation  { get; set; }
        public Projects Project  { get; set; }
        public StatusModel  Status  { get; set; }
        public List<OperatorAcc> Operators  { get; set; }
        [Column(TypeName = "money")]
        public decimal Price { get; set; }
        public Products Product { get; set; }
        
        
    }
}