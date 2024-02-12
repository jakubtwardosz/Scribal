namespace ScribalReactApp.Server.Models
{
    public class UserForRegisterDto
    {
        public int Id { get; set; }
        public string Username { get; set; } = string.Empty;
        public string Email { get; set; }
        public string Password { get; set; }
        public string PasswordHash { get; set; }
        public string PasswordSalt { get; set; }
    }
    
}