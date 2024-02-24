export async function GET({ params, redirect }) {
  return redirect("/", 301);
}