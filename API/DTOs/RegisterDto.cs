using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class RegisterDto
    {        
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [RegularExpression("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$", ErrorMessage = "Password must be complex")] //Minimum eight characters, at least one uppercase letter, one lowercase letter and one number
        public string Password { get; set; }

        [Required]
        public string UserName { get; set; }
    }
}