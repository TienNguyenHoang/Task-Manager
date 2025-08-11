using Microsoft.AspNetCore.Mvc;
using server.Services.IService;

namespace server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TaskController : Controller
    {
        private readonly ITaskService _taskService;
        public TaskController(ITaskService taskService) 
        {
            _taskService = taskService;
        }

    }
}

