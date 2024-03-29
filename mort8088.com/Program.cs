using mort8088.com.Providers.RssFeed;
using mort8088.com.Providers.RssFeed.Abstrations;
using mort8088.com.Models;

var builder = WebApplication.CreateBuilder(args);
int port = builder.Configuration.GetValue<int>("ServerSettings:PortNumber");

builder.WebHost.ConfigureKestrel((context, serverOptions) => 
{
    serverOptions.ListenAnyIP(port);
});

// Add services to the container.
builder.Services.Configure<SiteConfiguration>(builder.Configuration.GetSection("SiteConfiguration"));
builder.Services.AddSingleton<IPostService, MockPostService>();
builder.Services.AddSingleton<IFeedService, FeedService>();
builder.Services.AddControllers();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    //app.UseHsts();
}

app.UseStaticFiles();
app.UseRouting();

app.MapControllerRoute(name: "default", pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");;

app.Run();