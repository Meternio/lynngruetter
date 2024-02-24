export async function GET({ params, redirect }) {
  // exception robots.txt
  if (params.slug[0] === "robots.txt") {
    return { body: "User-agent: *\nDisallow: /" };
  }
  return redirect("/", 301);
}