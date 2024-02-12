using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ScribalReactApp.Server.Models;
using ScribalReactApp.Server.Servicies;

namespace ScribalReactApp.Server.Controller.AuthController
{
    [ApiController]
    [Route("[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;

        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(UserForRegisterDto userForRegisterDto)
        {
            var userToCreate = new User
            {
                Username = userForRegisterDto.Username
            };

            var createdUser = await _authService.Register(userToCreate, userForRegisterDto.Password);

            return StatusCode(201);
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(UserForLoginDto userForLoginDto)
        {
            var userFromRepo = await _authService.Login(userForLoginDto.Username.ToLower(), userForLoginDto.Password);

            if (userFromRepo == null)
                return Unauthorized();

            // Tutaj możesz dodać logikę generowania tokena JWT

            return Ok();
        }
    }

}
