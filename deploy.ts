import { exec } from "https://deno.land/x/exec@0.0.5/mod.ts";

for await (const dirEntry of Deno.readDir("./supabase/functions")) {
  if (dirEntry.isDirectory && dirEntry.name !== "_shared") {
    await exec(`supabase functions deploy ${dirEntry.name}`)
  }
}