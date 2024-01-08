using mort8088.com.Models.RssFeed;

namespace mort8088.com.Providers.RssFeed.Abstrations 
{
    public interface IFeedService
    {
        Task<string> GetFeedDocument(string host);
    }
}