using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using server.Dtos.Task;
using server.Services.IService;
using System.Security.Claims;

namespace server.Controllers
{
    [ApiController]
    [Authorize]
    [Route("api/[controller]")]
    public class TaskController : Controller
    {
        private readonly ITaskService _taskService;
        public TaskController(ITaskService taskService) 
        {
            _taskService = taskService;
        }

        [HttpGet("getTasks")]
        public async Task<IActionResult> GetTasks()
        {
            var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (string.IsNullOrEmpty(userId)) return Unauthorized(new { message = "Invalid or missing token" });
            var tasks = await _taskService.GetTasks(Int32.Parse(userId));
            if (tasks == null) return NotFound();
            return Ok(tasks);
        }

        [HttpGet("getTaskById/{id}")]
        public async Task<IActionResult> GetTaskById([FromRoute] int id)
        {
            var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (string.IsNullOrEmpty(userId)) return Unauthorized(new { message = "Invalid or missing token" });
            var task = await _taskService.GetTaskById(Int32.Parse(userId), id);
            if (task == null) return NotFound();
            return Ok(task);
        }

        [HttpPost("create")]
        public async Task<IActionResult> Create([FromBody] CreateTaskRequest request)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);
            var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (string.IsNullOrEmpty(userId)) return Unauthorized(new { message = "Invalid or missing token" });
            var taskDto = await _taskService.CreateTask(Int32.Parse(userId), request);
            return CreatedAtAction(nameof(GetTaskById), new { id = taskDto.TaskId }, taskDto);
        }

        [HttpPut("update/{id}")]
        public async Task<IActionResult> Update([FromRoute] int id,[FromBody] UpdateTaskRequest request)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);
            var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (string.IsNullOrEmpty(userId)) return Unauthorized(new { message = "Invalid or missing token" });
            var taskDto = await _taskService.UpdateTask(Int32.Parse(userId), id, request);
            if (taskDto == null) return NotFound();
            return Ok(taskDto);
        }

        [HttpDelete("delete/{id}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (string.IsNullOrEmpty(userId)) return Unauthorized(new { message = "Invalid or missing token" });
            var result = await _taskService.DeleteTask(Int32.Parse(userId), id);
            if (result == null) return NotFound();
            return NoContent();
        }

    }
}

