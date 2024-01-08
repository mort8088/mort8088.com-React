namespace mort8088.com.Models.RssFeed
{
    public class Post
    {
        public Post(
            string title, 
            string description, 
            string content, 
            string category, 
            string author)
        {
            this.Title = title;
            this.Description = description;
            this.Content = content;
            this.Category = category;
            this.Author = author;
            this.PostId = Guid.NewGuid();
            this.Slug = this.Title.ToLower().Replace(" ", "-",StringComparison.InvariantCultureIgnoreCase);
            this.PublishedOn = DateTime.Now;
            this.AuthorEmail = $"{this.Author}@mail.com";
        }

        public Guid PostId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Content { get; set; }
        public string Slug { get; set; }
        public DateTime PublishedOn { get; set; }
        public string Author { get; set; }
        public string Category { get; set; }
        public string AuthorEmail { get; set; }
    }
}