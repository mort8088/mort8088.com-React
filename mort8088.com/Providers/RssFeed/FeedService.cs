using System.Xml;
using Microsoft.SyndicationFeed;
using Microsoft.SyndicationFeed.Atom;
using Microsoft.SyndicationFeed.Rss;
using mort8088.com.Models.RssFeed;
using mort8088.com.Providers.RssFeed.Abstrations;

namespace mort8088.com.Providers.RssFeed
{
    public class FeedService : IFeedService
    {
        private readonly IPostService _postsService;

        public FeedService(IPostService posts)
        {
            _postsService = posts;
        }

        public async Task<string> GetFeedDocument(string host)
        {
            // STEP 1: Fetch Posts from the DataSource
            IEnumerable<Post> posts = await _postsService.GetPosts();

            // STEP 2: PREPARE THE FEED METADATA
            StringWriter sw = new StringWriter();
            using (XmlWriter xmlWriter = XmlWriter.Create(sw, new XmlWriterSettings() { Async = true, Indent = true }))
            {
                var rss = new RssFeedWriter(xmlWriter);
                await rss.WriteTitle("MyBlog");
                await rss.WriteDescription("My Blog is the Best one out there!");
                await rss.WriteGenerator("myHouse");
                await rss.WriteValue("link", host);

                if (posts != null && posts.Count() > 0)
                {
                    // STEP 3: PREPARE ITEMS FOR THE FEED
                    var feedItems = new List<AtomEntry>();
                    foreach (var post in posts)
                    {
                        var item = ToRssItem(post, host);
                        feedItems.Add(item);
                    }

                    foreach (var feedItem in feedItems)
                    {
                        await rss.Write(feedItem);
                    }
                }
            }

            // STEP 4: EXTRACT THE XML DOCUMENT
            return sw.ToString();
        }

        private AtomEntry ToRssItem(Post post, string host)
        {
            var item = new AtomEntry
            {
                Title = post.Title,
                Description = post.Content,
                Id = $"{host}/posts/{post.Slug}",
                Published = post.PublishedOn,
                LastUpdated = post.PublishedOn,
                ContentType = "html",
            };

            if (!string.IsNullOrEmpty(post.Category))
            {
                item.AddCategory(new SyndicationCategory(post.Category));
            }

            item.AddContributor(new SyndicationPerson(post.Author, post.AuthorEmail));

            item.AddLink(new SyndicationLink(new Uri(item.Id)));

            return item;
        }
    }
}
