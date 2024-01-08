using Microsoft.AspNetCore.Mvc;
using mort8088.com.Providers.RssFeed.Abstrations;

namespace mort8088.com.Controllers;

[ApiController]
[Route("[controller]")]
public class RssController : ControllerBase
{
    private readonly ILogger<RssController> _logger;
    private readonly IFeedService _feed;

    public RssController(ILogger<RssController> logger, IFeedService feed)
    {
        _logger = logger;
        _feed = feed;
    }

    [HttpGet]
    public async Task<IActionResult> Rss()
    {
        string host = Request.Scheme + "://" + Request.Host;
        string contentType = "application/xml";

        var content = await _feed.GetFeedDocument(host);
        return Content(content, contentType);
    }
}
