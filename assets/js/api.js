async function fetchProfileData() {
  const url =
    "https://raw.githubusercontent.com/LindermanBR/Portfolio/main/data/profile.json?token=GHSAT0AAAAAACH3ZOXGQVTVASX2MWVWAJKQZPBN7HQ";
  const fetching = await fetch(url);

  return await fetching.json();
}
