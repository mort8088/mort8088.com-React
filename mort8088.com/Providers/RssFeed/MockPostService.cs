using mort8088.com.Models.RssFeed;
using mort8088.com.Providers.RssFeed.Abstrations;

namespace mort8088.com.Providers.RssFeed {
    public class MockPostService : IPostService
    {
        public Task<IEnumerable<Post>> GetPosts()
        {
            // From DB look up make a List<Posts>
            return Task.FromResult<IEnumerable<Post>>(new List<Post>()
            {
                new Post(
                    "How Endpoint Routing works in ASP.NET Core",
                    "Loreum Ipseum Loreum Ipseum Loreum Ipseum Loreum Ipseum Loreum Ipseum",
                    "Loreum Ipseum Loreum Ipseum Loreum Ipseum Loreum Ipseum Loreum Ipseum. Loreum Ipseum Loreum Ipseum Loreum Ipseum Loreum Ipseum Loreum Ipseum. Loreum Ipseum Loreum Ipseum Loreum Ipseum Loreum Ipseum Loreum Ipseum.",
                    "ASP.NET Core",
                    "mort8088"),
                    new Post(
                    "Understanding Merge Sort - Comparison and Analysis",
                    "Loreum Ipseum Loreum Ipseum Loreum Ipseum Loreum Ipseum Loreum Ipseum",
                    "Loreum Ipseum Loreum Ipseum Loreum Ipseum Loreum Ipseum Loreum Ipseum. Loreum Ipseum Loreum Ipseum Loreum Ipseum Loreum Ipseum Loreum Ipseum. Loreum Ipseum Loreum Ipseum Loreum Ipseum Loreum Ipseum Loreum Ipseum.",
                    "DSA",
                    "mort8088"),
                    new Post(
                    "Understanding Binary Search - Comparison and Analysis",
                    "Loreum Ipseum Loreum Ipseum Loreum Ipseum Loreum Ipseum Loreum Ipseum",
                    "Loreum Ipseum Loreum Ipseum Loreum Ipseum Loreum Ipseum Loreum Ipseum. Loreum Ipseum Loreum Ipseum Loreum Ipseum Loreum Ipseum Loreum Ipseum. Loreum Ipseum Loreum Ipseum Loreum Ipseum Loreum Ipseum Loreum Ipseum.",
                    "DSA",
                    "mort8088"),
                    new Post(
                    "Understanding Quick Sort - Comparison and Analysis",
                    "Loreum Ipseum Loreum Ipseum Loreum Ipseum Loreum Ipseum Loreum Ipseum",
                    "Loreum Ipseum Loreum Ipseum Loreum Ipseum Loreum Ipseum Loreum Ipseum. Loreum Ipseum Loreum Ipseum Loreum Ipseum Loreum Ipseum Loreum Ipseum. Loreum Ipseum Loreum Ipseum Loreum Ipseum Loreum Ipseum Loreum Ipseum.",
                    "DSA",
                    "mort8088"),
                    new Post(
                    "Understanding Modules Directives and Components in Angular",
                    "Loreum Ipseum Loreum Ipseum Loreum Ipseum Loreum Ipseum Loreum Ipseum",
                    "Loreum Ipseum Loreum Ipseum Loreum Ipseum Loreum Ipseum Loreum Ipseum. Loreum Ipseum Loreum Ipseum Loreum Ipseum Loreum Ipseum Loreum Ipseum. Loreum Ipseum Loreum Ipseum Loreum Ipseum Loreum Ipseum Loreum Ipseum.",
                    "Angular",
                    "mort8088")
            });
        }
    }

}